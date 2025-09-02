import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Animation.module.scss";
import type { AnimationProps, AnimationType, EasingFunction } from "./types";

export const Animation: React.FC<AnimationProps> = ({
  children,
  type = "fade",
  duration = "normal",
  easing = "ease-out",
  delay = 0,
  direction = "in",
  trigger = "mount",
  threshold = 0.1,
  className = "",
  style,
  onAnimationStart,
  onAnimationEnd,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Animation timing values
  const durationMap = useMemo(() => ({
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  }), []);

  const easingMap: Record<EasingFunction, string> = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "ease-linear": "linear",
    "ease-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    "ease-elastic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  };

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    if (trigger === "scroll" && elementRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        },
        { threshold }
      );

      observerRef.current.observe(elementRef.current);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else if (trigger === "mount") {
      setIsVisible(true);
    }
  }, [trigger, threshold]);

  // Animation state management
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      onAnimationStart?.();

      const timer = setTimeout(() => {
        setIsAnimating(false);
        onAnimationEnd?.();
      }, parseInt(durationMap[duration]) + delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, delay, onAnimationStart, onAnimationEnd, durationMap]);

  // Generate animation classes
  const animationClasses = [
    styles.animation,
    styles[`type-${type}`],
    styles[`direction-${direction}`],
    styles[`duration-${duration}`],
    isVisible && styles.visible,
    isAnimating && styles.animating,
    className,
  ].filter(Boolean);

  // Generate inline styles for custom timing
  const animationStyles: React.CSSProperties = {
    transitionDuration: durationMap[duration],
    transitionTimingFunction: easingMap[easing],
    transitionDelay: `${delay}ms`,
    ...style,
  };

  return (
    <div
      ref={elementRef}
      className={animationClasses.join(" ")}
      style={animationStyles}
      {...props}
    >
      {children}
    </div>
  );
};

// Animation Hooks
export const useAnimation = (options: {
  type?: AnimationType;
  duration?: "fast" | "normal" | "slow" | "slower";
  easing?: EasingFunction;
  delay?: number;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = () => {
    setIsAnimating(true);
    const timer = setTimeout(
      () => {
        setIsAnimating(false);
      },
      parseInt(
        {
          fast: "150",
          normal: "300",
          slow: "500",
          slower: "700",
        }[options.duration || "normal"]
      ) + (options.delay || 0)
    );

    return () => clearTimeout(timer);
  };

  return { isAnimating, animate };
};

// Stagger Animation Hook
export const useStaggerAnimation = (
  count: number,
  staggerDelay: number = 100
) => {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    new Array(count).fill(false)
  );

  const startStagger = () => {
    animatedItems.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems((prev) => {
          const newItems = [...prev];
          newItems[index] = true;
          return newItems;
        });
      }, index * staggerDelay);
    });
  };

  return { animatedItems, startStagger };
};
