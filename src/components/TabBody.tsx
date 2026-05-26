import * as React from "react";
import { PropsWithChildren, useCallback, useEffect } from "react";
import { motion, useAnimate, useMotionValue } from "motion/react";
import { useTabContext } from "../contexts/TabContext";
import { PanInfo } from "motion-dom";
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
  }, [tabState, display, x, opacity, zIndex, index, width]);

  useEffect(() => {
    settle();
  }, [settle]);

  useEffect(() => {
    // If this isn't the animating tab, skip animation
    if (!isChangingTab || index !== tabState.animatingTab) {
      return;
    }

    if (tabState.isTabExiting) {
      // Exit to the side
      const animation = animate([
        [
          x,
          [x.get(), tabState.direction > 0 ? -width : width],
          { ease: "easeInOut", duration: 0.5 },
        ],
        [opacity, 0, { at: "<" }],
        [zIndex, 0, { at: "<" }],
      ]);
      animation.then(() => {
        display.set("none");
        setTabState((prevState) => ({
          ...prevState,
          animatingTab: prevState.currentTab,
          isTabExiting: false,
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
        [zIndex, 1, { at: "<" }],
      ]);
      animation.then(() => {
        setTabState((prevState) => ({
          ...prevState,
          animatingTab: null,
        }));
        setIsChangingTab(false);
      });
      return () => animation.stop();
    }
  }, [animate, tabState, setTabState, isChangingTab, setIsChangingTab, display, x, opacity, zIndex, index, width])

  return (
    <motion.div
      ref={scope}
      style={{ display, zIndex, x, opacity, height: "100%" }}
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