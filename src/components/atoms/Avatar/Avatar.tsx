import React from "react";
import { Icon } from "../Icon";
import { Person } from "../Icon/IconSet";
import mypic from "../../../assets/mypic.jpg";
import styles from "./Avatar.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface AvatarProps extends WithSxProps {
  /** Avatar type */
  type?: "initial" | "icon" | "image";
  /** Avatar size */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Initials for initial type */
  initials?: string;
  /** Icon for icon type */
  icon?: React.ComponentType<any>;
  /** Image source for image type */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Background color variant */
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "muted";
  /** Click handler */
  onClick?: () => void;
  /** Whether the avatar is interactive */
  interactive?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  type = "initial",
  size = "md",
  initials = "AV",
  icon = Person,
  src,
  alt,
  variant = "primary",
  className = "",
  onClick,
  interactive = false,
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const avatarClasses = combineClassNames(
    styles.avatar,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    interactive && styles.interactive,
    sxClassName
  );

  const renderContent = () => {
    switch (type) {
      case "initial":
        return (
          <span className={styles.initials}>
            {initials.slice(0, 2).toUpperCase()}
          </span>
        );
      case "icon":
        return (
          <div className={styles.iconWrapper}>
            <Icon icon={icon as any} size={getIconSize(size)} color="inherit" />
          </div>
        );
      case "image":
        return (
          <img
            src={src || mypic}
            alt={alt || "Avatar"}
            className={styles.image}
            onError={(e) => {
              // Fallback to mypic if image fails to load
              const target = e.target as HTMLImageElement;
              if (target.src !== mypic) {
                target.src = mypic;
              } else {
                // If mypic also fails, fallback to initials
                target.style.display = "none";
                const fallback = target.parentElement?.querySelector(
                  `.${styles.initials}`
                ) as HTMLElement;
                if (fallback) {
                  fallback.style.display = "flex";
                }
              }
            }}
          />
        );
      default:
        return null;
    }
  };

  const getIconSize = (avatarSize: string) => {
    switch (avatarSize) {
      case "xs":
        return "xs";
      case "sm":
        return "sm";
      case "md":
        return "md";
      case "lg":
        return "lg";
      case "xl":
        return "xl";
      default:
        return "md";
    }
  };

  return (
    <div
      className={avatarClasses}
      onClick={interactive ? onClick : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      style={sxStyle}
    >
      {renderContent()}
      {/* Fallback initials for image type */}
      {type === "image" && (
        <span className={`${styles.initials} ${styles.fallback}`}>
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
};
