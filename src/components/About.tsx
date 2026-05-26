import {
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Tag,
  useColorModeValue,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/all";
import React from "react";
import { HorizontalLR, VCenter } from "./SpacingTools";
import { CapsizedText } from "./CapsizedText";

export const About = () => {

  const tags: Array<string> = [
    // "Quick Learner",
    // "Grad Student",
    "Adaptable",
    "Strong Leader",
    "Eagle Scout",
  ]

  type SkillsDict = { [index: string]: string };

  const skills: SkillsDict = {
    "Python": "brightBlueAlpha.300",
    "Java": "brightBlueAlpha.300",
    "C/C++": "brightBlueAlpha.300",
    "C#": "brightBlueAlpha.300",
    "JavaScript": "brightBlueAlpha.300",
    "SQL": "brightBlueAlpha.300",
    "Unreal Engine": "brightBlueAlpha.300",
    "Unity": "brightBlueAlpha.300",
    "Computer Graphics": "brightBlueAlpha.300",
    "Computer Vision": "brightBlueAlpha.300",
    "Computational Geometry": "brightBlueAlpha.300",
    "Linear Algebra": "brightBlueAlpha.300",
    "Multivariable Calculus": "brightBlueAlpha.300",
    "Differential Equations": "brightBlueAlpha.300",
    "Statistical Modeling": "brightBlueAlpha.300",
    "Leadership": "brightBlueAlpha.300",
    "Communication": "brightBlueAlpha.300",
    "Instructing & Mentoring": "brightBlueAlpha.300",
  };

  return (
    <HorizontalLR>
      <Box>
        <Heading size={{ base: "2xl", sm: "4xl" }} as="h1">
          Russell Newton
        </Heading>
        <Heading size={{ base: "md", sm: "xl" }}>IT Associate Developer at Delta Air Lines</Heading>

        <Box h="4em"></Box>

        <List
          fontSize={30}
          pl={{ base: "1rem", sm: "2rem", md: "4rem" }}
          spacing="0.25em"
        >
          {tags.map((value) => (
            <ListItem key={value} as={HStack}>
              <ListIcon as={FaAngleDoubleRight} color="brightBlue.200" />
              <CapsizedText capsizeOptions={{ capHeight: 23 }}>
                {value}
              </CapsizedText>
            </ListItem>
          ))}
        </List>

        <Box h="4em"></Box>

        <Card maxW="2xl" mx={5}>
          <CardBody>
            <Heading size="md">Skill Set</Heading>
            <Divider my="1rem" />

            <Wrap>
              {Object.keys(skills).map((value: string) => (
                <WrapItem key={value}>
                  <Tag
                    variant="dynamic"
                    colorScheme={skills[value]}
                    size="lg"
                    fontSize="1.125rem"
                  >
                    {value}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </CardBody>
        </Card>
      </Box>

      <VCenter>
        <Image
          src="images/me.jpg"
          boxSize="xl"
          objectFit="cover"
          borderRadius="full"
          borderWidth="1em"
          borderStyle="solid"
          borderColor={useColorModeValue(
            "brightBlueAlpha.100",
            "whiteAlpha.300"
          )}
          alt="Russell Newton"
          display={{ xl: "block", base: "none" }}
        />
      </VCenter>
    </HorizontalLR>
  );
}
