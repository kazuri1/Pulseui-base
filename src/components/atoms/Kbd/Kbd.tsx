import React from "react";
import { Text } from "../Text";
import styles from "./Kbd.module.scss";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTheme } from "../../../contexts/ThemeContext";

export interface KbdProps extends WithSxProps {
  /** The keyboard key text to display */
  children: React.ReactNode;
  /** Size variant of the keyboard key */
  size?: "sm" | "md" | "lg" | "xl";
}

export const Kbd: React.FC<KbdProps> = ({
  children,
  size = "md",
  variant = "default",
  className = "",
  sx,
  style,
}) => {
  const { isDark } = useTheme();
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const kbdClasses = combineClassNames(
    styles.kbd,
    styles[size],
    sxClassName
  );

  return (
    <kbd className={kbdClasses} style={sxStyle}>
      <Text
        variant={
          size === "sm"
            ? "xs"
            : size === "lg"
            ? "lg"
            : size === "xl"
            ? "xl"
            : "sm"
        }
        weight="semibold"
        className={styles.keyText}
      >
        {children}
      </Text>
    </kbd>
  );
};
