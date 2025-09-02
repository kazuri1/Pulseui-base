import React from "react";
import styles from "./Group.module.scss";
// import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

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
export type Spacing = "xs" | "sm" | "md" | "lg" | "xl";

export interface GroupProps extends WithSxProps {
  /** Group content */
  children: React.ReactNode;
  /** Sets the `align-items` CSS property. Default: `center` */
  align?: GroupAlign;
  /** Controls the spacing between elements. Default: `md` */
  gap?: Spacing | string;
  /** Sets the `justify-content` CSS property. Default: `flex-start` */
  justify?: GroupJustify;
  /** Whether to wrap items to the next line. Default: `true` */
  wrap?: boolean;
}

export const Group: React.FC<GroupProps> = ({
  children,
  align = "center",
  gap = "md",
  justify = "flex-start",
  wrap = true,
  className = "",
  sx,
  style,
}) => {
  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const groupClasses = combineClassNames(
    styles.root,
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`gap-${gap}`],
    !wrap && styles.nowrap,
    sxClassName
  );

  const groupStyle: React.CSSProperties = {
    "--group-gap":
      typeof gap === "string" && !["xs", "sm", "md", "lg", "xl"].includes(gap)
        ? gap
        : undefined,
    ...sxStyle,
  } as React.CSSProperties;

  return (
    <div className={groupClasses} style={groupStyle}>
      {children}
    </div>
  );
};
