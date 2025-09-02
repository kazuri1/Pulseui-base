import React from "react";
import styles from "./Stack.module.scss";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

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
export type Spacing = "xs" | "sm" | "md" | "lg" | "xl";

export interface StackProps extends WithSxProps {
  /** Stack content */
  children: React.ReactNode;
  /** Sets the `align-items` CSS property. Default: `stretch` */
  align?: StackAlign;
  /** Controls the spacing between elements. Default: `md` */
  gap?: Spacing | string;
  /** Sets the `justify-content` CSS property. Default: `flex-start` */
  justify?: StackJustify;
}

export const Stack: React.FC<StackProps> = ({
  children,
  align = "stretch",
  gap = "md",
  justify = "flex-start",
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const stackClasses = combineClassNames(
    styles.root,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`gap-${gap}`],
    sxClassName
  );

  const stackStyle: React.CSSProperties = {
    "--stack-gap":
      typeof gap === "string" && !["xs", "sm", "md", "lg", "xl"].includes(gap)
        ? gap
        : undefined,
    ...sxStyle,
  } as React.CSSProperties;

  return (
    <div className={stackClasses} style={stackStyle}>
      {children}
    </div>
  );
};
