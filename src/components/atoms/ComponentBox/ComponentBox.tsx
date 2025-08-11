import React from "react";
import styles from "./ComponentBox.module.scss";

export interface ComponentBoxProps {
  /** The component to display in the center */
  children: React.ReactNode;
  /** The title to display below the component */
  title: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show a border around the component area */
  showBorder?: boolean;
  /** Background color variant for the component area */
  variant?: "default" | "surface" | "secondary";
  /** Size of the component box */
  size?: "sm" | "md" | "lg" | "xl";
}

export const ComponentBox: React.FC<ComponentBoxProps> = ({
  children,
  title,
  className = "",
  showBorder = true,
  variant = "default",
  size = "md",
}) => {
  const componentClasses = [
    styles.componentBox,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    showBorder && styles.withBorder,
    className,
  ].filter(Boolean);

  return (
    <div className={componentClasses.join(" ")}>
      <div className={styles.componentArea}>{children}</div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
