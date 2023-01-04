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
import { motion, useMotionValue } from "framer-motion";
import { HorizontalLR, VCenter } from "./components/SpacingTools";
import { CapsizedText } from "./components/CapsizedText";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/all";

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
    About: (
      <VCenter>
        <About/>
      </VCenter>
    ),
    Education: (
      <Box height="100%">
        <VCenter>
          <Education/>
        </VCenter>
        <Image
          src="images/graduation_blaze.svg"
          position="absolute"
          bottom="0px"
          height="7.5rem"
          display={{ "2xl": "block", "base": "none" }}
        />
      </Box>
    ),
    Projects: (
      <VCenter>
        <Projects/>
      </VCenter>
    ),
    Resume: (
      <VCenter>
        <Experience/>
      </VCenter>
    ),
    Contact: (
      <VCenter>
        <Contact/>
      </VCenter>
    ),
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
          x: direction > 0 ? "-100vw" : "100vw",
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
        <GridItem bg={useColorModeValue("blackAlpha.100", "blackAlpha.400")} area={"header"} px="1rem">
          <HorizontalLR height="100%">
            <VCenter>
              <CapsizedText capsizeOptions={{ capHeight: 18 }}>Russell Newton</CapsizedText>
            </VCenter>

            <HStack spacing="0.375em" height="100%">
              <CapsizedText capsizeOptions={{ capHeight: 21 }}>
                <Link
                  href="mailto:russell.newton01@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={23}
                >
                  <Icon as={SiGmail} color="brightBlue.200"/>
                </Link>
              </CapsizedText>
              <CapsizedText capsizeOptions={{ capHeight: 21 }}>
                <Link
                  href="https://www.linkedin.com/in/russellnewton01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={23}
                >
                  <Icon as={SiLinkedin} color="brightBlue.200"/>
                </Link>
              </CapsizedText>
              <CapsizedText capsizeOptions={{ capHeight: 21 }}>
                <Link
                  href="https://github.com/Russell-Newton"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize={23}
                >
                  <Icon as={SiGithub} color="brightBlue.200"/>
                </Link>
              </CapsizedText>
            </HStack>
          </HorizontalLR>
        </GridItem>
        <GridItem
          area={"tabs"}
        >
          <Tabs index={tabIndex} onChange={changeTab} size={{ base: "xs", sm: "sm", md: "md" }}>
            <TabList>
              {
                Object.keys(tabs).map((value: string) => (
                  <Tab key={value}>{value}</Tab>
                ))
              }
            </TabList>
          </Tabs>
        </GridItem>
        <GridItem area={"main"} h="100%" overflowY="auto" overflowX="hidden"
                  px={{ "base": "1rem", "md": "2rem", "lg": "6rem" }} py="1rem">
          <Box h="100%">
            {
              Object.values(tabs).map((value, index) => {
                return (
                  <motion.div
                    key={`animated-tab-panel-${index}`}
                    style={{ display: tabDisplays[index], height: "100%" }}
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
                    // drag="x"
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
        </GridItem>
        <GridItem area={"footer"}>
          <Center>
            <Text>&copy; Russell Newton, 2023</Text>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  )
}
