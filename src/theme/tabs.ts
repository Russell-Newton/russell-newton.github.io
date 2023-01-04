import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define custom sizes
const sizes = {
  xs: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      fontSize: 'sm',
      px: '2',
      py: '1',
    },
  }),
};

// export the component theme
export const TabsTheme = defineMultiStyleConfig({ sizes });
