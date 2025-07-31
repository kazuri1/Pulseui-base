import React from "react";
import styles from "./Group.module.scss";

export type GroupAlign =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";
export type GroupJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type MantineSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export interface GroupProps {
  /** Group content */
  children: React.ReactNode;
  /** Sets the `align-items` CSS property. Default: `center` */
  align?: GroupAlign;
  /** Controls the spacing between elements. Default: `md` */
  gap?: MantineSpacing | string;
  /** Sets the `justify-content` CSS property. Default: `flex-start` */
  justify?: GroupJustify;
  /** Whether to wrap items to the next line. Default: `true` */
  wrap?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Group: React.FC<GroupProps> = ({
  children,
  align = "center",
  gap = "md",
  justify = "flex-start",
  wrap = true,
  className = "",
}) => {
  const groupClasses = [
    styles.root,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`gap-${gap}`],
    !wrap && styles.nowrap,
    className,
  ].filter(Boolean);

  const groupStyle: React.CSSProperties = {
    "--group-gap":
      typeof gap === "string" && !["xs", "sm", "md", "lg", "xl"].includes(gap)
        ? gap
        : undefined,
  } as React.CSSProperties;

  return (
    <div className={groupClasses.join(" ")} style={groupStyle}>
      {children}
    </div>
  );
};
