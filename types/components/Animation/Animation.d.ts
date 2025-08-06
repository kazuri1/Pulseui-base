import React from "react";
import type { AnimationProps, AnimationType, EasingFunction } from "./types";
export declare const Animation: React.FC<AnimationProps>;
export declare const useAnimation: (options: {
    type?: AnimationType;
    duration?: "fast" | "normal" | "slow" | "slower";
    easing?: EasingFunction;
    delay?: number;
}) => {
    isAnimating: boolean;
    animate: () => () => void;
};
export declare const useStaggerAnimation: (count: number, staggerDelay?: number) => {
    animatedItems: boolean[];
    startStagger: () => void;
};
