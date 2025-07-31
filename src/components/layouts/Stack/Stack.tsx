import React from "react";
import styles from "./Stack.module.scss";

export type StackAlign =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";
export type StackJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type MantineSpacing = "xs" | "sm" | "md" | "lg" | "xl";

export interface StackProps {
  /** Stack content */
  children: React.ReactNode;
  /** Sets the `align-items` CSS property. Default: `stretch` */
  align?: StackAlign;
  /** Controls the spacing between elements. Default: `md` */
  gap?: MantineSpacing | string;
  /** Sets the `justify-content` CSS property. Default: `flex-start` */
  justify?: StackJustify;
  /** Additional CSS classes */
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  children,
  align = "stretch",
  gap = "md",
  justify = "flex-start",
  className = "",
}) => {
  const stackClasses = [
    styles.root,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`gap-${gap}`],
    className,
  ].filter(Boolean);

  const stackStyle: React.CSSProperties = {
    "--stack-gap":
      typeof gap === "string" && !["xs", "sm", "md", "lg", "xl"].includes(gap)
        ? gap
        : undefined,
  } as React.CSSProperties;

  return (
    <div className={stackClasses.join(" ")} style={stackStyle}>
      {children}
    </div>
  );
};
