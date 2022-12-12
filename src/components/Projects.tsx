import { Box, Text, useColorModeValue, useToken } from "@chakra-ui/react";
import { Theme } from "react-activity-calendar";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import * as React from "react";

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
      <Text>Projects Section</Text>

      <GitHubCalendar
        username="Russell-Newton"
        fontSize={16}
        theme={calendarTheme}
        // hideColorLegend
      >
        <ReactTooltip delayShow={50} html/>
      </GitHubCalendar>
    </Box>
  );
}
