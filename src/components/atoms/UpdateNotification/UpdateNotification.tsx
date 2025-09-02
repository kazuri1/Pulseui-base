import React from "react";
import { Card } from "../Card";
import { Text } from "../Text";
import { Button } from "../Button";
import styles from "./UpdateNotification.module.scss";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";


export interface UpdateNotificationProps extends WithSxProps {
  /** Notification title */
  title?: string;
  /** Notification message */
  message?: string;
  /** Skip button text */
  skipText?: string;
  /** Download button text */
  downloadText?: string;
  /** Skip button click handler */
  onSkip?: () => void;
  /** Download button click handler */
  onDownload?: () => void;
}

export const UpdateNotification: React.FC<UpdateNotificationProps> = ({
  title = "Updates Available",
  message = "A new version is available. Please upgrade for the best experience.",
  skipText = "Skip",
  downloadText = "Download",
  onSkip,
  onDownload,
  className = "",
  sx,
  style,
}) => {
  
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const updateNotificationClasses = combineClassNames(
    styles.updateNotification,
    sxClassName
  );

  return (
    <Card className={updateNotificationClasses} sx={sx} style={sxStyle}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <Text variant="lg" weight="semibold" className={styles.title}>
            {title}
          </Text>
          <Text variant="md" color="secondary" className={styles.message}>
            {message}
          </Text>
        </div>

        <div className={styles.actions}>
          <Button
            variant="outline"
            size="sm"
            onClick={onSkip}
            className={styles.skipButton}
          >
            {skipText}
          </Button>

          <Button
            variant="filled"
            size="sm"
            onClick={onDownload}
            className={styles.downloadButton}
          >
            {downloadText}
          </Button>
        </div>
      </div>
    </Card>
  );
};
