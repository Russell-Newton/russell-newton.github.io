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
  SimpleGridProps, Spacer,
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
      <CardHeader fontSize="25px">
        <Flex>
          <LinkOverlay as={Link}
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
            <HStack fontSize="20px">
              <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <Icon as={FaLink}/>
              </Link>
            </HStack>
          )}
        </Flex>
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
  return repoRes.json();
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
              state => (
                state && state.data ?
                  <RepoCard {...state.data}/>
                  : null
              )
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

      <Divider my="2rem"/>

      <Center>
        <VStack>
          <Heading size="lg" mb="1rem">GitHub Contributions</Heading>
          <GitHubCalendar
            username="Russell-Newton"
            fontSize={16}
            theme={calendarTheme}
          >
            <ReactTooltip delayShow={50} html/>
          </GitHubCalendar>
        </VStack>
      </Center>
    </Box>
  );
}
