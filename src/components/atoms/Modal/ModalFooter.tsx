import React from "react";
import styles from "./ModalFooter.module.scss";

import { Button } from "../Button";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface ModalFooterProps extends WithSxProps {
  /** Footer variant */
  variant?: "button-only" | "primary" | "destructive";
  /** Primary button text */
  primaryText?: string;
  /** Secondary button text */
  secondaryText?: string;
  /** Primary button click handler */
  onPrimaryClick?: () => void;
  /** Secondary button click handler */
  onSecondaryClick?: () => void;
  /** Whether the primary button is disabled */
  primaryDisabled?: boolean;
  /** Whether the secondary button is disabled */
  secondaryDisabled?: boolean;
  /** Whether the primary button is loading */
  primaryLoading?: boolean;
  /** Whether the secondary button is loading */
  secondaryLoading?: boolean;
  /** Custom primary button props */
  primaryButtonProps?: React.ComponentProps<typeof Button>;
  /** Custom secondary button props */
  secondaryButtonProps?: React.ComponentProps<typeof Button>;
  /** Footer content (for button-only variant) */
  children?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  variant = "primary",
  primaryText = "OK",
  secondaryText = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  primaryDisabled = false,
  secondaryDisabled = false,
  primaryButtonProps = {},
  secondaryButtonProps = {},
  children,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const footerClasses = combineClassNames(
    styles.modalFooter,
    styles[`variant-${variant}`],
    sxClassName
  );

  const renderButtonOnlyVariant = () => {
    return <div className={styles.content}>{children}</div>;
  };

  const renderPrimaryVariant = () => {
    return (
      <div className={styles.buttonGroup}>
        <Button
          variant="default"
          onClick={onSecondaryClick}
          disabled={secondaryDisabled}
          {...secondaryButtonProps}
        >
          {secondaryText}
        </Button>
        <Button
          variant="filled"
          onClick={onPrimaryClick}
          disabled={primaryDisabled}
          {...primaryButtonProps}
        >
          {primaryText}
        </Button>
      </div>
    );
  };

  const renderDestructiveVariant = () => {
    return (
      <div className={styles.buttonGroup}>
        <Button
          variant="default"
          onClick={onSecondaryClick}
          disabled={secondaryDisabled}
          {...secondaryButtonProps}
        >
          {secondaryText}
        </Button>
        <Button
          variant="filled"
          onClick={onPrimaryClick}
          disabled={primaryDisabled}
          className={styles.destructiveButton}
          {...primaryButtonProps}
        >
          {primaryText}
        </Button>
      </div>
    );
  };

  const renderContent = () => {
    switch (variant) {
      case "button-only":
        return renderButtonOnlyVariant();
      case "primary":
        return renderPrimaryVariant();
      case "destructive":
        return renderDestructiveVariant();
      default:
        return renderPrimaryVariant();
    }
  };

  return (
    <footer className={footerClasses} style={sxStyle}>
      {renderContent()}
    </footer>
  );
};
