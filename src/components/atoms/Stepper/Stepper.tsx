import React from "react";
import styles from "./Stepper.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { StepperItem, type StepperItemProps } from "./StepperItem";

export interface StepperStep {
  /** Unique identifier for the step */
  id: string;
  /** Content to display in the step icon (number or icon) */
  content: React.ReactNode;
  /** Label text for the step */
  label: string;
  /** Status of the step */
  status: "default" | "active" | "complete";
  /** Whether to show an asterisk for required fields */
  showAsterisk?: boolean;
}

export interface StepperProps extends WithSxProps {
  /** Array of steps to display */
  steps: StepperStep[];
  /** Size of the stepper (affects all steps) */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Border radius for step icons */
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Whether to show labels for all steps */
  showLabels?: boolean;
  /** Whether to show connecting lines between steps */
  showConnectors?: boolean;
  /** Unique identifier */
  id?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  size = "md",
  radius = "md",
  showLabels = true,
  showConnectors = true,
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

  const stepperClasses = combineClassNames(
    styles.stepper,
    styles[`size-${size}`],
    sxClassName
  );

  return (
    <div className={stepperClasses} style={sxStyle} id={id}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <StepperItem
            size={size}
            status={step.status}
            radius={radius}
            label={step.label}
            showLabel={showLabels}
            showAsterisk={step.showAsterisk}
          >
            {step.content}
          </StepperItem>
          {showConnectors && index < steps.length - 1 && (
            <div
              className={combineClassNames(
                styles.connector,
                step.status === "complete" && styles.connectorComplete
              )}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

Stepper.displayName = "Stepper";

export default Stepper; 