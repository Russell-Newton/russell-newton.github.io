import { Box, BoxProps, Flex, FlexProps, Spacer } from "@chakra-ui/react";
import * as React from "react";

export const VCenter = (props: BoxProps) => {
  return (
    <Flex direction="column">
      <Spacer/>
      <Box {...props}>
        {props.children}
      </Box>
      <Spacer/>
    </Flex>
  )
}

export const HorizontalLR = (props: Omit<FlexProps, "w" | "direction">) => {
  const children = React.Children.toArray(props.children);
  return (
    <Flex {...props}>
      {children[0]}
      <Spacer/>
      {children[1]}
    </Flex>
  );
}