import React from "react";
import { Text } from "../Text";
import styles from "./Kbd.module.scss";

export interface KbdProps {
  /** The keyboard key text to display */
  children: React.ReactNode;
  /** Size variant of the keyboard key */
  size?: "sm" | "md" | "lg" | "xl";
  /** Additional CSS classes */
  className?: string;
}

export const Kbd: React.FC<KbdProps> = ({
  children,
  size = "md",
  className = "",
}) => {
  return (
    <kbd className={`${styles.kbd} ${styles[size]} ${className}`}>
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
