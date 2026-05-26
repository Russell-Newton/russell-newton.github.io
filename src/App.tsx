import * as React from "react"
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Link,
  Tab,
  TabList,
  Tabs,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { HorizontalLR, VCenter } from "./components/SpacingTools";
import { CapsizedText } from "./components/CapsizedText";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/all";
import { Publications } from "./components/Publications";
import { useEffect } from "react";
import { TabBody } from "./components/TabBody";

import { useTabContext } from "./contexts/TabContext";

export const App = () => {

  const {
    tabs,
    setTabs,
    tabState: { currentTab },
    changeTab,
  } = useTabContext();

  useEffect(() => {setTabs({
    About: (
      <VCenter>
        <About />
      </VCenter>
    ),
    Education: (
      <VCenter>
        <Education />
        <Image
          src="images/graduation_blaze.svg"
          // position="absolute"
          bottom="0px"
          height="7.5rem"
          display={{ "2xl": "block", base: "none" }}
        />
      </VCenter>
    ),
    Publications: (
      <HorizontalLR>
        <VCenter>
          <Publications />
        </VCenter>
        <VCenter>
          <Image
            src="images/online_articles_blaze.svg"
            height="30rem"
            display={{ "2xl": "block", base: "none" }}
          />
        </VCenter>
      </HorizontalLR>
    ),
    Projects: (
      <VCenter>
        <Projects />
      </VCenter>
    ),
    Resume: (
      <VCenter>
        <Experience />
      </VCenter>
    ),
    Contact: (
      <VCenter>
        <Contact />
      </VCenter>
    ),
  });}, [setTabs]);

  return (
    <Box h="100%">
      <Grid
        templateAreas={`"header"
                      "tabs"
                      "main"
                      "footer"`}
        gridTemplateRows={"45px 42px auto 25px"}
        gridTemplateColumns={"1fr"}
        gap={0}
        h="100vh"
      >
        <GridItem
          bg={useColorModeValue("blackAlpha.100", "blackAlpha.400")}
          area={"header"}
          px="1rem"
        >
          <HorizontalLR height="100%">
            <VCenter>
              <CapsizedText capsizeOptions={{ capHeight: 18 }}>
                Russell Newton
              </CapsizedText>
            </VCenter>

            <HStack spacing="0.375em" height="100%">
              <CapsizedText capsizeOptions={{ capHeight: 21 }}>
                <Link
                  href="mailto:russell.newton01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={23}
                >
                  <Icon as={SiGmail} color="brightBlue.200" />
                </Link>
              </CapsizedText>
              <CapsizedText capsizeOptions={{ capHeight: 21 }}>
                <Link
                  href="https://www.linkedin.com/in/russellnewton01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={23}
                >
                  <Icon as={SiLinkedin} color="brightBlue.200" />
                </Link>
              </CapsizedText>
              <CapsizedText capsizeOptions={{ capHeight: 21 }}>
                <Link
                  href="https://github.com/Russell-Newton"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={23}
                >
                  <Icon as={SiGithub} color="brightBlue.200" />
                </Link>
              </CapsizedText>
            </HStack>
          </HorizontalLR>
        </GridItem>
        <GridItem area={"tabs"}>
          <Tabs
            index={currentTab}
            onChange={changeTab}
            size={{ base: "xs", sm: "sm", md: "md" }}
          >
            <TabList>
              {Object.keys(tabs).map((value: string) => (
                <Tab key={value}>{value}</Tab>
              ))}
            </TabList>
          </Tabs>
        </GridItem>
        <GridItem
          area={"main"}
          h="100%"
          overflowY="auto"
          overflowX="hidden"
          px={{ base: "1rem", md: "2rem", lg: "6rem" }}
          py="1rem"
        >
          <Box h="100%">
            {Object.values(tabs).map((value, index) => {
              return (
                <TabBody key={`animated-tab-panel-${index}`} index={index}>
                  {value}
                </TabBody>
              );
            })}
          </Box>
        </GridItem>
        <GridItem area={"footer"}>
          <Center>
            <Text>&copy; Russell Newton, 2026</Text>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
