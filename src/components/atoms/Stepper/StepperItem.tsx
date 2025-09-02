import React from "react";
import styles from "./StepperItem.module.scss";
// import type { SxProps } from "../../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { StepperIcon } from "./StepperIcon";

export interface StepperItemProps extends WithSxProps {
  /** Size of the stepper item (affects both icon and label) */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Whether to show the label */
  showLabel?: boolean;
  /** Whether to show an asterisk (*) after the label */
  showAsterisk?: boolean;
  /** The label text */
  label?: string;
  /** Status of the step icon */
  status?: "default" | "active" | "complete";
  /** Border radius of the icon */
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Content inside the icon (number or icon) */
  children?: React.ReactNode;
  /** Unique identifier */
  id?: string;
}

export const StepperItem: React.FC<StepperItemProps> = ({
  size = "md",
  showLabel = true,
  showAsterisk = false,
  label = "Label",
  status = "default",
  radius = "md",
  children,
  id,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const itemClasses = combineClassNames(
    styles.stepperItem,
    styles[`size-${size}`],
    sxClassName
  );

  return (
    <div className={itemClasses} style={sxStyle} id={id}>
      <StepperIcon
        status={status}
        size={size}
        radius={radius}
      >
        {children}
      </StepperIcon>
      {showLabel && (
        <span className={styles.label}>
          {label}
          {showAsterisk && <span className={styles.asterisk}>*</span>}
        </span>
      )}
    </div>
  );
};

StepperItem.displayName = "StepperItem";

export default StepperItem; 