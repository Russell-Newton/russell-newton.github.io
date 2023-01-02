import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  textDecoration: "none",
  _hover: {
    color: "brightBlue.200",
    textDecoration: "none",
  }
})

export const LinkTheme = defineStyleConfig({
  baseStyle,
})
