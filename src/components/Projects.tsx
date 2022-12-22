import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  SimpleGridProps,
  Spacer,
  Text,
  useColorModeValue,
  useToken,
  VStack
} from "@chakra-ui/react";
import { Theme } from "react-activity-calendar";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import * as React from "react";
import { BiGitRepoForked, FaLink, FaRegStar, GoEye } from "react-icons/all";
import { Async } from "react-async";
import getRawGithubFileContent from "../tools/gitraw";

const jsyaml = require("js-yaml");

const repoNames: Array<string> = [
  "TikTokPy",
  "DuckyLighting",
  "MultiTouch",
  "StatiCat",
  "NotMalware-Game"
]

type RepoProps = {
  html_url: string,
  name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  homepage: string,
  colors: Array<{ language: string, color: string, proportion: number }>,
}

const RepoCard = (repo: RepoProps) => {
  return (
    <LinkBox as={Card}
             width="100%"
             p="0.25rem"
             transition="0.3s"
             borderRadius=".625rem!important"
             minH="270px"
             h="100%"
    >
      <CardHeader fontSize="25px" pb={0} mb={0}>
        <Flex>
          <LinkOverlay
            as={Link}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text as="h6">
              {repo.name}
            </Text>
          </LinkOverlay>
        </Flex>
      </CardHeader>

      <CardBody
        fontSize="20px"
      >
        <Text>{repo.description}</Text>
      </CardBody>
      <CardFooter>
        <VStack width="100%">
          <Text
            width="100%"
            textAlign="left"
            noOfLines={1}
          >
            {repo.colors.slice(0, 4).map(x => x.language).join(", ")}
          </Text>
          <Flex width="100%" overflow="hidden">
            {repo.colors.map((value, index: number) => {
              return (
                <Box
                  key={value.language}
                  backgroundColor={value.color}
                  minW={`${value.proportion * 100}%`}
                  maxW={`${value.proportion * 100}%`}
                  w={`${value.proportion * 100}%`}
                  height="10px"
                  borderRadius={
                    index === 0
                      ? index === repo.colors.length - 1
                        ? "10px 10px 10px 10px"
                        : "10px 0 0 10px"
                      : index === repo.colors.length - 1
                        ? "0 10px 10px 0"
                        : ""
                  }
                />
              );
            })}
          </Flex>
          <Flex width="100%">
            <HStack
              fontSize="20px"
              spacing="0.75rem"
            >
              <HStack spacing="0.375rem">
                <Icon as={GoEye}/>
                <Text>
                  {repo.stargazers_count}
                </Text>
              </HStack>
              <HStack spacing="0.375rem">
                <Icon as={FaRegStar}/>
                <Text>
                  {repo.stargazers_count}
                </Text>
              </HStack>
              <HStack spacing="0.375rem">
                <Icon as={BiGitRepoForked}/>
                <Text>
                  {repo.forks_count}
                </Text>
              </HStack>
            </HStack>
            <Spacer/>
            {repo.homepage && (
              <Link
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                fontSize="20px"
              >
                <Icon as={FaLink} transform="translate(0, 4px)"/>
              </Link>
            )}
          </Flex>
        </VStack>
      </CardFooter>
    </LinkBox>
  );
};

async function fetchUser(props: { user: string }, controller: AbortController) {
  const userRes = await fetch(
    `https://api.github.com/users/${props.user}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
      signal: controller.signal
    }
  );
  return userRes.json();
}

async function fetchColors() {
  const colorsRaw = await getRawGithubFileContent({
    user: "github",
    repo: "linguist",
    pathToDirectory: "lib/linguist",
    fileName: "languages.yml",
  });
  return jsyaml.load(colorsRaw);
}

async function fetchRepo(props: { repo: string }, controller: AbortController) {
  const repoRes = await fetch(
    `https://api.github.com/repos/Russell-Newton/${props.repo}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
      signal: controller.signal
    }
  );
  const languageRes = await fetch(
    `https://api.github.com/repos/Russell-Newton/${props.repo}/languages`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
      signal: controller.signal
    }
  );
  let allColors = await fetchColors();
  let languages = await languageRes.json();
  let languageTotal = 0
  Object.values(languages).forEach((value) => {
    languageTotal += Number(value);
  });
  let colors = Object.keys(languages).map((value) => ({
    language: value,
    color: allColors[value]["color"],
    proportion: languages[value] / languageTotal
  }));
  return repoRes.json().then(async (value) => {
    return {
      ...value,
      colors,
    }
  })
}

const Repos = (props: SimpleGridProps) => {
  return (
    <SimpleGrid
      {...props}
    >
      {
        repoNames.map((value) => (
          <Async
            //@ts-ignore
            promiseFn={fetchRepo}
            repo={value}
            key={`repo-card-${value}`}
          >
            {
              state => {
                return (
                  state && state.data ?
                    <RepoCard {...state.data}/>
                    : null
                )
              }
            }
          </Async>
        ))
      }
    </SimpleGrid>
  )
}

type UserProps = {
  avatar_url: string,
  login: string,
  public_repos: number,
  followers: number,
}

const UserCard = (user: UserProps) => {
  return (
    <Center fontSize="32px">
      <Image
        src={user.avatar_url}
        alt={user.login}
        height="64px"
        width="64px"
        mr="1rem"
      />
      <Text>{user.login}</Text>

      <Center height="54px">
        <Divider orientation="vertical" mx="1rem"/>
      </Center>

      <Text>{user.public_repos} repos</Text>

      <Center height="54px">
        <Divider orientation="vertical" mx="1rem"/>
      </Center>

      <Text>{user.followers} followers</Text>
    </Center>
  );
}

const User = () => {
  return (
    <Async
      //@ts-ignore
      promiseFn={fetchUser}
      user="Russell-Newton"
    >
      {
        state => (
          state && state.data ?
            <UserCard {...state.data}/>
            : null
        )
      }
    </Async>
  )
}

export const Projects = () => {

  const lightCalendarTheme: Theme = {
    level0: useToken("colors", "gray.50"),
    level1: useToken("colors", "brightBlue.100"),
    level2: useToken("colors", "brightBlue.200"),
    level3: useToken("colors", "brightBlue.300"),
    level4: useToken("colors", "brightBlue.500"),
  }
  const darkCalendarTheme: Theme = {
    level0: useToken("colors", "gray.700"),
    level1: useToken("colors", "brightBlue.800"),
    level2: useToken("colors", "brightBlue.600"),
    level3: useToken("colors", "brightBlue.400"),
    level4: useToken("colors", "brightBlue.300"),
  }
  const calendarTheme = useColorModeValue(lightCalendarTheme, darkCalendarTheme)

  return (
    <Box>

      <User/>

      <Divider my="2rem"/>

      <Center>
        <Heading size="lg" mb="1rem">My Favorite Projects</Heading>
      </Center>
      <Repos minChildWidth="300px" spacing="1rem"/>

      {/*<Divider my="2rem"/>*/}

      <Center mt="2rem">
        {/*<VStack>*/}
        {/*  <Heading size="lg" mb="1rem">GitHub Contributions</Heading>*/}
          <GitHubCalendar
            username="Russell-Newton"
            fontSize={16}
            theme={calendarTheme}
          >
            <ReactTooltip delayShow={50} html/>
          </GitHubCalendar>
        {/*</VStack>*/}
      </Center>
    </Box>
  );
}
