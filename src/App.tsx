import * as React from "react"
import { Grid, GridItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App = () => {

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows={"45px calc(100vh - 70px) 25px"}
      gridTemplateColumns={"min(100px, calc(12.5vw)) 1fr"}
      gap={0}
      minH="calc(100vh)"
      maxH="calc(100vh)"
      h="calc(100vh)"
    >
      <GridItem bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem bg="pink.300" area={"nav"}>
        Nav
      </GridItem>
      <GridItem
        area={"main"}
      >
        <Tabs>
          <TabList>
            <Tab>About</Tab>
            <Tab>Education</Tab>
            <Tab>Projects</Tab>
            <Tab>Experience</Tab>
            <Tab>Contact</Tab>
          </TabList>
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
        </Tabs>
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  )
}
