import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Tag, useColorModeValue,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/all";
import React from "react";

export const About = () => {

  type SkillsDict = { [index: string]: string };

  const skills: SkillsDict = {
    "Python": "brightBlueAlpha.300",
    "Java": "brightBlueAlpha.300",
    "C/C++": "brightBlueAlpha.300",
    "AI/ML": "brightBlueAlpha.300",
    "Computer Graphics": "brightBlueAlpha.300",
    "Computer Vision": "brightBlueAlpha.300",
    "Linear Algebra": "brightBlueAlpha.300",
    "Multivariable Calculus": "brightBlueAlpha.300",
    "Algorithm Design": "brightBlueAlpha.300",
    "Algorithm Analysis": "brightBlueAlpha.300",
    "Leadership": "brightBlueAlpha.300",
  };

  return (
    <Flex>
      <Box>
        <Heading size="4xl">Russell Newton</Heading>

        <Box h="4em"></Box>

        <List fontSize={30} pl="4rem">
          <ListItem>
            <ListIcon as={FaAngleDoubleRight} color="brightBlue.200"/>
            Avid Learner
          </ListItem>
          <ListItem>
            <ListIcon as={FaAngleDoubleRight} color="brightBlue.200"/>
            Enthusiastic Programmer
          </ListItem>
          <ListItem>
            <ListIcon as={FaAngleDoubleRight} color="brightBlue.200"/>
            Eagle Scout
          </ListItem>
        </List>

        <Box h="4em"></Box>

        <Card maxW="xl" mx={5}>
          <CardBody>
            <Heading size="md">
              Skill Set
            </Heading>
            <Divider my="1rem"/>

            <Wrap>
              {
                Object.keys(skills).map((value: string) => (
                  <WrapItem key={value}>
                    <Tag variant="dynamic" colorScheme={skills[value]} size="lg" fontSize="1.125rem">
                      {value}
                    </Tag>
                  </WrapItem>
                ))
              }
            </Wrap>
          </CardBody>
        </Card>
      </Box>
      <Spacer/>
      <Image
        src="images/me.jpg"
        boxSize="xl"
        objectFit="cover"
        borderRadius="full"
        borderWidth="1em"
        borderStyle="solid"
        borderColor={useColorModeValue("brightBlueAlpha.100", "whiteAlpha.300")}
        alt="Russell Newton"
      />
    </Flex>
  );
}
