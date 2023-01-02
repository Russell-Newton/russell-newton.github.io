import { extendTheme, StyleFunctionProps, type ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { TagTheme } from "./tag";
import { LinkTheme } from "./link";
import { HeadingTheme, CapsizedTextTheme } from "./text";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};
export default extendTheme({
  config,
  components: {
    Tag: TagTheme,
    Link: LinkTheme,
    Heading: HeadingTheme,
    CapsizedText: CapsizedTextTheme,
  },
  colors: {
    brightBlue: {
      50: '#e4e6ff',
      100: '#b2b6ff',
      200: '#8086ff',
      300: '#4d56fe',
      400: '#1c25fd',
      500: '#020ce3',
      600: '#0008b2',
      700: '#000580',
      800: '#00034f',
      900: '#000020',
    },
    brightBlueAlpha: {
      50: '#e4e6ff99',
      100: '#b2b6ff99',
      200: '#8086ff99',
      300: '#4d56fe99',
      400: '#1c25fd99',
      500: '#020ce399',
      600: '#0008b299',
      700: '#00058099',
      800: '#00034f99',
      900: '#00002099',
    }
  },
  fonts: {
    heading: `"League Spartan", sans-serif`,
    body: `"Roboto Slab", serif`,
    mono: `"Roboto Mono", monospace`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      '*::-webkit-scrollbar': {
        width: '1em',
      },
      '*::-webkit-scrollbar-track': {
        background: mode("blackAlpha.200", "whiteAlpha.200")(props),
      },
      '*::-webkit-scrollbar-thumb': {
        background: mode("blackAlpha.400", "whiteAlpha.300")(props),
      },
    })
  },
});
