import type { CSSProperties } from "react";

// Import types and functions from stylesApi
import type { SxProps } from "../styles/stylesApi";
import { processSxProps } from "../styles/stylesApi";

export interface WithSxProps {
  sx?: SxProps;
  className?: string;
  style?: CSSProperties;
}

export const mergeSxWithStyles = (
  sx?: SxProps,
  existingStyle?: CSSProperties,
  className?: string
): { style: CSSProperties; className: string } => {
  const sxStyles = sx ? processSxProps(sx) : {};
  const mergedStyle = { ...sxStyles, ...existingStyle };

  return {
    style: mergedStyle,
    className: className || "",
  };
};

export const combineClassNames = (
  ...classNames: (string | undefined | null | false)[]
): string => {
  return classNames.filter(Boolean).join(" ");
};
