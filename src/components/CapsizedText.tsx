import { forwardRef, TextProps, chakra, useStyleConfig } from "@chakra-ui/react";

type PartialCapsizeOptions = {
    capHeight: number;
    leading?: number;
} | {
    capHeight: number;
    lineGap: number;
} | {
    fontSize: number;
    leading?: number;
} | {
    fontSize: number;
    lineGap: number;
}

export interface CapsizedTextProps extends Omit<TextProps, "lineHeight" | "fontSize"> {
  capsizeOptions: PartialCapsizeOptions,
}

export const CapsizedText = forwardRef<CapsizedTextProps, "p">((props, ref) => {
  const { capsizeOptions, ...rest} = props;
  const styles = useStyleConfig("CapsizedText", { capsizeOptions });

  return (
    <chakra.p ref={ref} __css={styles} {...rest}/>
  )
})
