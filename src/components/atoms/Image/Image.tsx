import React, { useState } from "react";
import styles from "./Image.module.scss";
import { Icon } from "../Icon";
import { Image as ImageIcon, BrokenImage } from "../Icon/IconSet";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";

export type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

export interface ImageProps extends WithSxProps {
  /** Image url */
  src: string;
  /** Image url used as a fallback if the image cannot be loaded */
  fallbackSrc?: string;
  /** Controls `object-fit` style */
  fit?: ObjectFit;
  /** Called when image fails to load */
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /** Key of `theme.radius` or any valid CSS value to set `border-radius` */
  radius?: number | string;
  /** Alt text for accessibility */
  alt?: string;
  /** Width of the image */
  width?: number | string;
  /** Height of the image */
  height?: number | string;
  /** Whether the image should be lazy loaded */
  loading?: "lazy" | "eager";
}

export const Image: React.FC<ImageProps> = ({
  src,
  fallbackSrc,
  fit = "cover",
  onError,
  radius = 0,
  alt = "",
  width,
  height,
  loading = "eager",
  className = "",
  sx,
  style,
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const { style: sxStyle, className: sxClassName } = mergeSxWithStyles(
    sx,
    style,
    className
  );

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
    }

    if (onError) {
      onError(event);
    }
  };

  const imageClasses = combineClassNames(styles.image, sxClassName);

  const imageStyle: React.CSSProperties = {
    objectFit: fit,
    borderRadius: typeof radius === "number" ? `${radius}px` : radius,
    width: width,
    height: height,
    ...sxStyle,
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={imageClasses}
      style={imageStyle}
      onError={handleError}
      loading={loading}
    />
  );
};

Image.displayName = "Image";
