import * as React from "react"
import { Box, Flex, Grid, GridItem, Portal, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {

  const contentRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <Grid
      templateAreas={`"header header"
                      "nav tabs"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows={"45px 42px 1fr 25px"}
      gridTemplateColumns={"min(100px, calc(12.5vw)) 1fr"}
      gap={0}
      h="100vh"
    >
      <GridItem bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem
        area={"tabs"}
      >
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Education</Tab>
            <Tab>Projects</Tab>
            <Tab>Experience</Tab>
            <Tab>Contact</Tab>
          </TabList>

          {/* This lets us only scroll the TabPanels content */}
          <Portal containerRef={contentRef}>
            <TabPanels alignContent="left">
              <TabPanel>
                <About/>
              </TabPanel>
              <TabPanel>
                <Education/>
              </TabPanel>
              <TabPanel>
                <Projects/>
              </TabPanel>
              <TabPanel>
                <Experience/>
              </TabPanel>
              <TabPanel>
                <Contact/>
              </TabPanel>
            </TabPanels>
          </Portal>
        </Tabs>
      </GridItem>
      <GridItem area={"main"} h="100%" overflowY="auto" px="5vw">
        <Flex h="100%" direction="column">
          <Spacer />
          <Box ref={contentRef} />
          <Spacer />
        </Flex>
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  )
}
