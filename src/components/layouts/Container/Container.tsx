import React from "react";
import styles from "./Container.module.scss";

export interface ContainerProps {
  /** Container content */
  children: React.ReactNode;
  /** If set, the container takes 100% width of its parent and `size` prop is ignored */
  fluid?: boolean;
  /** `max-width` of the container, value is not responsive - it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set */
  size?: number | "xs" | "sm" | "md" | "lg" | "xl";
  /** Centering strategy */
  strategy?: "block" | "grid";
  /** Additional CSS classes */
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  size = "md",
  strategy = "block",
  className = "",
}) => {
  const containerClasses = [
    styles.root,
    styles[`strategy-${strategy}`],
    fluid ? styles.fluid : styles[`size-${size}`],
    className,
  ].filter(Boolean);

  return <div className={containerClasses.join(" ")}>{children}</div>;
};
