import { chakra, forwardRef, ResponsiveValue, TextProps, useStyleConfig } from "@chakra-ui/react";

export type PartialCapsizeOptions = {
  capHeight: ResponsiveValue<number>;
  leading?: ResponsiveValue<number>;
} | {
  capHeight: ResponsiveValue<number>;
  lineGap: ResponsiveValue<number>;
} | {
  fontSize: ResponsiveValue<number>;
  leading?: ResponsiveValue<number>;
} | {
  fontSize: ResponsiveValue<number>;
  lineGap: ResponsiveValue<number>;
}

export interface CapsizedTextProps extends Omit<TextProps, "lineHeight" | "fontSize"> {
  capsizeOptions: PartialCapsizeOptions,
}

export const CapsizedText = forwardRef<CapsizedTextProps, "p">((props, ref) => {
  const { capsizeOptions, ...rest } = props;
  const styles = useStyleConfig("CapsizedText", { capsizeOptions });

  return (
    <chakra.p ref={ref} __css={styles} {...rest}/>
  )
})
