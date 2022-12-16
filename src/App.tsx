import * as React from "react"
import { Box, Flex, Grid, GridItem, Spacer, Tab, TabList, Tabs } from "@chakra-ui/react"
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion, useMotionValue } from "framer-motion";

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const App = () => {

  const tabs = {
    About: (<About/>),
    Education: (<Education/>),
    Projects: (<Projects/>),
    Experience: (<Experience/>),
    Contact: (<Contact/>),
  }

  const tabDisplays = [
    useMotionValue("none"),
    useMotionValue("none"),
    useMotionValue("none"),
    useMotionValue("none"),
    useMotionValue("none"),
  ]

  const [tabIndex, setTabIndex] = React.useState(0);
  const [animatingTab, setAnimatingTab] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const [tabExiting, setTabExiting] = React.useState(false);

  type TabCustom = { index: number };

  /**
   * Swipe-able tabs based on Image Gallery sandbox:
   * https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx
   */
  const variants = {
    /* For whatever reason, drag complete triggers base, center, and out each for a frame
    base: (custom: TabCustom) => {
      let { index } = custom;
      return {
        x: index > animatingTab ? "100vw" : "-100vw",
        opacity: 0,
        zIndex: 0,
        display: "none"
      };
    },
    center: (custom: TabCustom) => {
      let { index } = custom;
      if (index === tabIndex && !tabExiting) {
        return {
          x: 0,
          opacity: 1,
          zIndex: 1,
          display: "inherit",
        };
      }

      return {};
    },
    out: (custom: TabCustom) => {
      let { index } = custom;
      if (index === animatingTab && tabExiting) {
        return {
          x: direction > 0 ? "-100vw": "100vw",
          opacity: 0,
          display: "inherit",
          transitionEnd: {
            display: "none",
          }
        }
      }
      return {};
    },
    */
    combo: (custom: TabCustom) => {
      let { index } = custom;

      type OutType = {
        x: number | string,
        opacity: number,
        zIndex: number,
        display?: string,
        transitionEnd?: object
      }

      let out: OutType = {
        x: index > animatingTab ? "100vw" : "-100vw",
        opacity: 0,
        zIndex: 0,
        display: "none",
      };
      if (index === animatingTab && tabExiting) {
        out = {
          x: direction > 0 ? "-100vw": "100vw",
          opacity: 0,
          zIndex: 0,
          display: "inherit",
          transitionEnd: {
            display: "none",
          }
        };
      }
      if (index === tabIndex && !tabExiting) {
        out = {
          x: 0,
          opacity: 1,
          zIndex: 1,
          display: "inherit",
        };
      }

      return out;
    },
  };

  const changeTab = (index: number) => {
    if (index < 0 || index >= Object.keys(tabs).length) {
      return;
    }
    setTabExiting(true);
    setDirection(index - tabIndex);
    setTabIndex(index);
  }

  return (
    <Box>
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
          <Tabs index={tabIndex} onChange={changeTab}>
            <TabList>
              {
                Object.keys(tabs).map((value: string) => (
                  <Tab key={value}>{value}</Tab>
                ))
              }
            </TabList>
          </Tabs>
        </GridItem>
        <GridItem area={"main"} h="100%" overflowY="auto" overflowX="hidden" px="5vw">
          <Flex h="100%" direction="column">
            <Spacer/>
            <Box>
              {
                Object.values(tabs).map((value, index) => {
                  return (
                    <motion.div
                      key={`animated-tab-panel-${index}`}
                      style={{ display: tabDisplays[index] }}
                      custom={{ index }}
                      variants={variants}
                      animate={["combo"]}
                      // animate={["base", "out", "center"]}
                      transition={{
                        // x: { type: "spring", stiffness: 300, damping: 30 },
                        x: { ease: "easeInOut" },
                        opacity: { duration: 0.3 }
                      }}
                      onAnimationComplete={_definition => {
                        if (index === animatingTab && tabDisplays[index].get() === "none") {
                          setTabExiting(false);
                          setAnimatingTab(tabIndex);
                        }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                          changeTab(tabIndex + 1);
                        } else if (swipe > swipeConfidenceThreshold) {
                          changeTab(tabIndex - 1);
                        }
                      }}
                    >
                      {value}
                    </motion.div>
                  )
                })
              }
            </Box>
            <Spacer/>
          </Flex>
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </Box>
  )
}
