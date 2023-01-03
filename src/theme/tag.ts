import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(tagAnatomy.keys);

const dynamic = definePartsStyle((props) => ({
  container: {
    bg: props.colorScheme,
    color: mode("whiteAlpha.900", "whiteAlpha.900")(props),
    borderRadius: "full",
  }
}));

export const TagTheme = defineMultiStyleConfig({
  variants: {
    dynamic: dynamic,
  }
})
