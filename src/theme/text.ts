import { defineStyleConfig } from "@chakra-ui/react";
import { createStyleObject } from '@capsizecss/core';
import robotoSlabMetrics from '@capsizecss/metrics/robotoSlab';


export const HeadingTheme = defineStyleConfig({
  baseStyle: {
    letterSpacing: "wider"
  }
});

export const CapsizedTextTheme = defineStyleConfig({
  baseStyle: ((props) => {
    const styles = createStyleObject({
      ...props.capsizeOptions,
      fontMetrics: robotoSlabMetrics,
    })
    return {
      ...styles
    }
  })
})
