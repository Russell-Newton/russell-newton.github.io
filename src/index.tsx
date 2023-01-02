import "@fontsource/league-spartan"
import "@fontsource/roboto-mono"
import "@fontsource/roboto-slab"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import theme from "./theme/theme";
import { IconContext } from "react-icons"


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ColorModeScript/>
    <ChakraProvider theme={theme}>
      <IconContext.Provider value={{ style: { verticalAlign: 'baseline' } }}>
        <App/>
      </IconContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
)

