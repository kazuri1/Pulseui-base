import React from "react";
import styles from "./ComponentBox.module.scss";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";


export interface ComponentBoxProps extends WithSxProps {
  /** The component to display in the center */
  children: React.ReactNode;
  /** The title to display below the component */
  title: string;
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
  sx,
  style,
}) => {
  
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const componentClasses = combineClassNames(
    styles.componentBox,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    showBorder && styles.withBorder,
    sxClassName
  );

  return (
    <div className={componentClasses} style={sxStyle}>
      <div className={styles.componentArea}>{children}</div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
