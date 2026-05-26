import * as React from "react";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import { motion, useAnimate, useMotionValue, Variants } from "motion/react";
import { useTabContext } from "../contexts/TabContext";
import { Box } from "@chakra-ui/react";
import { AnimationDefinition, PanInfo } from "motion-dom";
import { useWindowSize } from "../tools/windowSize";

interface TabProps {
  index: number;
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const TabBody: React.FC<PropsWithChildren<TabProps>> = ({ children, index }) => {
  const {
    tabState,
    setTabState,
    isChangingTab,
    setIsChangingTab,
    changeTab,
  } = useTabContext();

  const [scope, animate] = useAnimate();
  const display = useMotionValue<string>(index === tabState.currentTab ? "inherit" : "none");
  const x = useMotionValue<number>(0);
  const opacity = useMotionValue<number>(index === tabState.currentTab ? 1 : 0);
  const zIndex = useMotionValue<number>(index === tabState.currentTab ? 1 : 0);
  const { width } = useWindowSize();

  const settle = useCallback(() => {
    if (index === tabState.currentTab && tabState.animatingTab === null) {
      display.set("inherit");
      x.set(0);
      opacity.set(1);
      zIndex.set(1);
      return;
    }
    // Hide tabs not being animated and not being shown
    if (index !== tabState.animatingTab && index !== tabState.currentTab) {
      display.set("none");
      x.set(
        index === tabState.currentTab
          ? 0
          : index > tabState.currentTab
          ? width
          : -width
      );
      opacity.set(0);
      zIndex.set(0);
      return;
    }
  }, [tabState]);

  useEffect(() => {
    settle();
  }, [width]);

  useEffect(() => {
    // settle();
    // If this isn't the animating tab, skip animation
    if (!isChangingTab || index !== tabState.animatingTab) {
      return;
    }

    console.log(
      index,
      tabState.currentTab,
      tabState.isTabExiting,
      tabState.animatingTab,
      tabState.direction,
      isChangingTab
    );

    if (tabState.isTabExiting) {
      // Exit to the side
      const animation = animate([
        // [display, "inherit"],
        [x, [x.get(), tabState.direction > 0 ? -width : width], { ease: "easeInOut", duration: 0.5 }],
        [opacity, 0, { at: "<" }],
        [zIndex, 0, { at: "<" }]
        // [display, "none", { at: "<1", duration: 0 }],
      ]);
      animation.then(() => {
        display.set("none");
        setTabState((prevState) => ({
          ...prevState,
          animatingTab: prevState.currentTab,
          // direction: 0,
          isTabExiting: false
        }));
      });
      return () => animation.stop();
    } else {
      // Enter from the side
      display.set("inherit");
      x.set(tabState.direction < 0 ? -width : width);
      const animation = animate([
        [x, 0, { ease: "easeInOut" }],
        [opacity, 1, { at: "<" }],
        [zIndex, 1, { at: "<" }]
      ]);
      animation.then(() => {
        setTabState((prevState) => ({
          ...prevState,
          animatingTab: null
        }));
        setIsChangingTab(false);
      });
      // const displayAnim = animate(display, "inherit");
      // const xAnim = animate(x, 0);
      // const opacityAnim = animate(opacity, 1);
      // const zIndexAnim = animate(zIndex, 1);
      return () => animation.stop();
    }
  }, [animate, tabState.animatingTab, setTabState, setIsChangingTab])

  const MotionBox = motion.create(Box);

  /**
   * Swipe-able tabs based on Image Gallery sandbox:
   * https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/Example.tsx
   */
  // const variants: Variants = {
  //   base: useCallback(() => {
  //     return {
  //       x: index > animatingTab ? "100vw" : "-100vw",
  //       opacity: 0,
  //       zIndex: 0,
  //       display: "none",
  //     };
  //   }, [animatingTab, index]),
  //   center: useCallback(() => {
  //     if (index === currentTab && !tabExiting) {
  //       return {
  //         x: 0,
  //         opacity: 1,
  //         zIndex: 1,
  //         display: "inherit",
  //       };
  //     }
  //
  //     return {};
  //   }, [currentTab, tabExiting, index]),
  //   out: useCallback(() => {
  //     if (index === animatingTab && tabExiting) {
  //       return {
  //         x: direction > 0 ? "-100vw" : "100vw",
  //         opacity: 0,
  //         display: "inherit",
  //         transitionEnd: {
  //           display: "none",
  //         },
  //       };
  //     }
  //     return {};
  //   }, [animatingTab, tabExiting, index, direction]),
  //   // combo: (custom: TabCustom) => {
  //   //   let { index } = custom;
  //   //
  //   //   type OutType = {
  //   //     x: number | string,
  //   //     opacity: number,
  //   //     zIndex: number,
  //   //     display?: string,
  //   //     transitionEnd?: object
  //   //   }
  //   //
  //   //   let out: OutType = {
  //   //     x: index > animatingTab ? "100vw" : "-100vw",
  //   //     opacity: 0,
  //   //     zIndex: 0,
  //   //     display: "none",
  //   //   };
  //   //   if (index === animatingTab && tabExiting) {
  //   //     out = {
  //   //       x: direction > 0 ? "-100vw" : "100vw",
  //   //       opacity: 0,
  //   //       zIndex: 0,
  //   //       display: "inherit",
  //   //       transitionEnd: {
  //   //         display: "none",
  //   //       }
  //   //     };
  //   //   }
  //   //   if (index === tabIndex && !tabExiting) {
  //   //     out = {
  //   //       x: 0,
  //   //       opacity: 1,
  //   //       zIndex: 1,
  //   //       display: "inherit",
  //   //     };
  //   //   }
  //   //
  //   //   return out;
  //   // },
  // };

  return (
    <motion.div
      style={{ display, zIndex, x, opacity, height: "100%" }}
      // variants={variants}
      // animate={Object.keys(variants)}
      // animate={["base", "out", "center"]}
      // transition={{
      //   // x: { type: "spring", stiffness: 300, damping: 30 },
      //   x: { ease: "easeInOut" },
      //   opacity: { duration: 0.3 },
      // }}
      drag="x"
      dragMomentum={false}
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={(
        _: MouseEvent | TouchEvent | PointerEvent,
        { offset, velocity }: PanInfo
      ) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          changeTab(tabState.currentTab + 1);
        } else if (swipe > swipeConfidenceThreshold) {
          changeTab(tabState.currentTab - 1);
        }
      }}
    >
      {children}
    </motion.div>
  );
}