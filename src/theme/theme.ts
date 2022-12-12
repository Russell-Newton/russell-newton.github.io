import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};
export default extendTheme({
  config,
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
    }
  },
  styles: {
    global: {
      '*::-webkit-scrollbar': {
        width: '1em',
      },
      '*::-webkit-scrollbar-track': {
        background: mode("blackAlpha.200", "blackAlpha.500"),
      },
      '*::-webkit-scrollbar-thumb': {
        background: mode("blackAlpha.400", "whiteAlpha.300"),
      },
    }
  },
});
