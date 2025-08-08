import React from "react";
import styles from "./SingleTab.module.scss";
import classNames from "classnames";
import { Icon } from "../Icon";
import {
  InfoOutlined,
  Home,
  Settings,
  Person,
  Search,
  NotificationsNone,
  MailOutline,
  HelpOutline,
  ErrorOutline,
  Warning,
  CheckCircle,
  FavoriteBorder,
  BookmarkBorder,
  FlagOutlined,
  LockOutlined,
} from "../Icon/IconSet";
import type { SvgIconComponent } from "@mui/icons-material";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export interface SingleTabProps extends WithSxProps {
  /** Tab text content */
  children?: React.ReactNode;
  /** Tab variant style */
  variant?: "default" | "pill";
  /** Tab position */
  position?: "top" | "bottom" | "left" | "right";
  /** Tab state */
  state?: "default" | "selected" | "hover" | "disabled";
  /** Left icon */
  leftIcon?: SvgIconComponent | string | boolean;
  /** Right icon */
  rightIcon?: SvgIconComponent | string | boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Click handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const SingleTab: React.FC<SingleTabProps> = ({
  children,
  variant = "default",
  position = "top",
  state = "default",
  leftIcon = false,
  rightIcon = false,
  placeholder = "Tab title",
  onClick,
  disabled = false,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const tabClasses = combineClassNames(
    styles.tab,
    styles[`variant-${variant}`],
    styles[`position-${position}`],
    styles[`state-${state}`],
    sxClassName
  );

  // Map string values to icon components
  const getLeftIcon = () => {
    if (leftIcon === false) {
      return null;
    }
    if (leftIcon === true) {
      return InfoOutlined; // Default outline info icon
    }
    if (typeof leftIcon === "string") {
      if (leftIcon === "none") {
        return null;
      }
      const iconMap: Record<string, SvgIconComponent> = {
        info: InfoOutlined,
        home: Home,
        settings: Settings,
        person: Person,
        search: Search,
        notifications: NotificationsNone,
        mail: MailOutline,
        help: HelpOutline,
        error: ErrorOutline,
        warning: Warning,
        check: CheckCircle,
        favorite: FavoriteBorder,
        bookmark: BookmarkBorder,
        flag: FlagOutlined,
        lock: LockOutlined,
        // Add more icon mappings as needed
      };
      return iconMap[leftIcon] || InfoOutlined;
    }
    return leftIcon;
  };

  const getRightIcon = () => {
    if (rightIcon === false) {
      return null;
    }
    if (rightIcon === true) {
      return InfoOutlined; // Default outline info icon
    }
    if (typeof rightIcon === "string") {
      if (rightIcon === "none") {
        return null;
      }
      const iconMap: Record<string, SvgIconComponent> = {
        info: InfoOutlined,
        home: Home,
        settings: Settings,
        person: Person,
        search: Search,
        notifications: NotificationsNone,
        mail: MailOutline,
        help: HelpOutline,
        error: ErrorOutline,
        warning: Warning,
        check: CheckCircle,
        favorite: FavoriteBorder,
        bookmark: BookmarkBorder,
        flag: FlagOutlined,
        lock: LockOutlined,
        // Add more icon mappings as needed
      };
      return iconMap[rightIcon] || InfoOutlined;
    }
    return rightIcon;
  };

  const leftIconComponent = getLeftIcon();
  const rightIconComponent = getRightIcon();

  const content = children || placeholder;

  return (
    <button
      type="button"
      className={tabClasses}
      onClick={onClick}
      disabled={disabled || state === "disabled"}
      style={sxStyle}
    >
      {leftIconComponent && (
        <Icon
          icon={leftIconComponent}
          size="sm"
          color="inherit"
          className={styles.leftIcon}
        />
      )}
      <span className={styles.content}>{content}</span>
      {rightIconComponent && (
        <Icon
          icon={rightIconComponent}
          size="sm"
          color="inherit"
          className={styles.rightIcon}
        />
      )}
    </button>
  );
};
