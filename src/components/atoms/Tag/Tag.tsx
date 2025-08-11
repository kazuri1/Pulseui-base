import React from "react";
import { Pill } from "../Pill";
import { Icon } from "../Icon";
import { Close, LocalHospital } from "@mui/icons-material";
import type { SvgIconComponent } from "@mui/icons-material";
import styles from "./Tag.module.scss";

export interface TagProps {
  /** The text content of the tag */
  children: React.ReactNode;
  /** Icon to display in the tag */
  icon?: SvgIconComponent;
  /** Size variant of the tag */
  size?: "sm" | "md" | "lg" | "xl";
  /** Color variant of the tag */
  variant?: "default" | "selected" | "mint" | "teal";
  /** Whether to show the close button */
  closable?: boolean;
  /** Close button click handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  icon = LocalHospital,
  size = "md",
  variant = "default",
  closable = false,
  onClose,
  className = "",
}) => {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <Pill
      size={size}
      className={`${styles.tag} ${styles[size]} ${styles[variant]} ${className}`}
    >
      <div className={styles.tagContent}>
        <Icon
          icon={icon}
          size={
            size === "sm"
              ? "xs"
              : size === "lg"
              ? "lg"
              : size === "xl"
              ? "xl"
              : "sm"
          }
          className={styles.tagIcon}
        />
        <span className={styles.tagText}>{children}</span>
        {closable && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Remove tag"
          >
            <Icon
              icon={Close}
              size={
                size === "sm"
                  ? "xs"
                  : size === "lg"
                  ? "lg"
                  : size === "xl"
                  ? "xl"
                  : "sm"
              }
            />
          </button>
        )}
      </div>
    </Pill>
  );
};
