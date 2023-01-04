import { defineStyleConfig, useBreakpointValue } from "@chakra-ui/react";
import { createStyleObject, FontMetrics } from '@capsizecss/core';
import robotoSlabMetrics from '@capsizecss/metrics/robotoSlab';
import { PartialCapsizeOptions } from "../components/CapsizedText";


export const HeadingTheme = defineStyleConfig({
  baseStyle: {
    letterSpacing: "wider"
  }
});

function createResponsiveStyles(capsizeOptions: PartialCapsizeOptions, fontMetrics: FontMetrics) {
  const evaluatedOptions: { [f: string]: number } = {}
  Object.entries(capsizeOptions).forEach(([field, value]) => {
    if (value && typeof value === "number") {
      //@ts-ignore
      evaluatedOptions[field] = useBreakpointValue([value,]);
    } else if (value) {
      //@ts-ignore
      evaluatedOptions[field] = useBreakpointValue(value);
    }
  })

  //@ts-ignore
  return createStyleObject({
    ...evaluatedOptions,
    fontMetrics
  })
}

export const CapsizedTextTheme = defineStyleConfig({
  baseStyle: ((props) => {
    const capsizeOptions: PartialCapsizeOptions = props.capsizeOptions;
    // const styles = createStyleObject({
    //   ...capsizeOptions,
    //   fontMetrics: robotoSlabMetrics,
    // })
    return createResponsiveStyles(capsizeOptions, robotoSlabMetrics)
  })
})
