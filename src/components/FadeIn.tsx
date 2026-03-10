"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import useIsMobile from "@/hooks/useIsMobile";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const directionMap = (
  direction: "bottom" | "top" | "left" | "right",
  shouldReduceMotion: boolean,
) => {
  return {
    bottom: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
      visible: { opacity: 1, y: 0 },
    },
    top: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -24 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -24 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 24 },
      visible: { opacity: 1, x: 0 },
    },
  };
};

export function FadeIn({
  delay = 0,
  direction = "bottom",
  mobileDirection,
  inViewPort = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number;
  direction?: "bottom" | "top" | "left" | "right";
  mobileDirection?: "bottom" | "top" | "left" | "right";
  inViewPort?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);
  const isMobile = useIsMobile();
  isMobile ? (delay = 0) : (delay = delay);

  // Prevent SSR hydration mismatches: server can't know viewport width.
  // We render using `direction` for SSR + first client render, then after mount
  // we can safely switch to `mobileDirection` when applicable.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const effectiveDirection =
    mounted && isMobile && mobileDirection !== undefined
      ? mobileDirection
      : direction;

  const variants = directionMap(
    effectiveDirection,
    shouldReduceMotion ?? false,
  );

  // If a `mobileDirection` is provided, defer running the in-view animation until
  // after mount so the first animation uses the correct direction.
  const enableInViewAnimation = mounted || mobileDirection === undefined;

  return (
    <>
      {inViewPort ? (
        <motion.div
          key={`${effectiveDirection}-${enableInViewAnimation ? "ready" : "defer"}`}
          variants={{
            hidden: variants[effectiveDirection]?.hidden,
            visible: variants[effectiveDirection]?.visible,
          }}
          transition={{ duration: 0.5, delay: delay }}
          {...(isInStaggerGroup
            ? {}
            : enableInViewAnimation
              ? {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { amount: "some", once: true },
                }
              : {
                  // Render without triggering an animation on the very first client render
                  // when mobileDirection might change after mount.
                  initial: false,
                })}
          {...props}
        />
      ) : (
        <motion.div
          key={`${effectiveDirection}-${enableInViewAnimation ? "ready" : "defer"}`}
          variants={{
            hidden: variants[effectiveDirection]?.hidden,
            visible: variants[effectiveDirection]?.visible,
          }}
          transition={{ duration: 0.5, delay: delay }}
          {...(isInStaggerGroup
            ? {}
            : enableInViewAnimation
              ? {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport,
                }
              : {
                  // Render without triggering an animation on the very first client render
                  // when mobileDirection might change after mount.
                  initial: false,
                })}
          {...props}
        />
      )}
    </>
  );
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
