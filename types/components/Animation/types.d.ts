import type { ReactNode, CSSProperties } from "react";
export type AnimationType = "fade" | "slide" | "scale" | "rotate" | "bounce" | "flip" | "zoom" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "flip-x" | "flip-y" | "pulse" | "shake" | "wiggle";
export type EasingFunction = "ease-in" | "ease-out" | "ease-in-out" | "ease-linear" | "ease-bounce" | "ease-elastic";
export type AnimationDirection = "in" | "out" | "in-out";
export type AnimationTrigger = "mount" | "scroll" | "hover" | "click";
export type AnimationDuration = "fast" | "normal" | "slow" | "slower";
export interface AnimationProps {
    children: ReactNode;
    type?: AnimationType;
    duration?: AnimationDuration;
    easing?: EasingFunction;
    delay?: number;
    direction?: AnimationDirection;
    trigger?: AnimationTrigger;
    threshold?: number;
    className?: string;
    style?: CSSProperties;
    onAnimationStart?: () => void;
    onAnimationEnd?: () => void;
}
export interface AnimationConfig {
    type: AnimationType;
    duration: AnimationDuration;
    easing: EasingFunction;
    delay: number;
    direction: AnimationDirection;
    trigger: AnimationTrigger;
    threshold: number;
}
export interface StaggerAnimationConfig {
    count: number;
    staggerDelay: number;
    baseAnimation: AnimationConfig;
}
export interface AnimationPreset {
    name: string;
    config: AnimationConfig;
}
export interface AnimationContextValue {
    registerAnimation: (id: string, config: AnimationConfig) => void;
    unregisterAnimation: (id: string) => void;
    triggerAnimation: (id: string) => void;
    isAnimating: (id: string) => boolean;
}
