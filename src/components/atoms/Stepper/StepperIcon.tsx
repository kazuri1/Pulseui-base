import React from "react";
import styles from "./StepperIcon.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface StepperIconProps extends WithSxProps {
  /** Status of the step icon */
  status?: "default" | "active" | "complete";
  /** Size of the icon */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Border radius of the icon */
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Content inside the icon (number or icon) */
  children?: React.ReactNode;
  /** Unique identifier */
  id?: string;
}

export const StepperIcon: React.FC<StepperIconProps> = ({
  status = "default",
  size = "md",
  radius = "md",
  children,
  id,
  className = "",
  sx,
  style,
}) => {
  // Compute radius style
  const radiusValue =
    typeof radius === "number" ? `${radius}px` : `var(--radius-${radius})`;

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    { ...style, borderRadius: radiusValue },
    className
  );

  const iconClasses = combineClassNames(
    styles.stepperIcon,
    styles[`size-${size}`],
    styles[`status-${status}`],
    sxClassName
  );

  return (
    <span
      className={iconClasses}
      style={sxStyle}
      id={id}
      aria-current={status === "active" ? "step" : undefined}
      tabIndex={-1}
    >
      {children}
    </span>
  );
};

StepperIcon.displayName = "StepperIcon";

export default StepperIcon;
