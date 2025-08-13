import React from "react";
import styles from "./Card.module.scss";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Image } from "../Image";
import { Text } from "../Text";
import type { SxProps } from "../../../styles/stylesApi";
import type { WithSxProps } from "../../../utils/sxUtils";
import { mergeSxWithStyles, combineClassNames } from "../../../utils/sxUtils";
import { useTheme } from "../../../contexts/ThemeContext";

export interface CardProps extends WithSxProps {
  /** Card title */
  title?: string;
  /** Whether to show the title */
  showTitle?: boolean;
  /** Badge text */
  badge?: string;
  /** Whether to show the badge */
  showBadge?: boolean;
  /** Badge variant */
  badgeVariant?:
    | "dot"
    | "filled"
    | "subtle"
    | "light"
    | "outline"
    | "white"
    | "default";
  /** Card description */
  description?: string;
  /** Whether to show the description */
  showDescription?: boolean;
  /** Button text */
  buttonText?: string;
  /** Whether to show the button */
  showButton?: boolean;
  /** Button variant */
  buttonVariant?:
    | "filled"
    | "subtle"
    | "light"
    | "outline"
    | "white"
    | "default";
  /** Button size */
  buttonSize?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Image source URL */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Image fit mode */
  imageFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  /** Image border radius */
  imageRadius?: number | string;
  /** Whether to show the image */
  showImage?: boolean;
  /** Card variant - 'default' or 'image-overlay' */
  variant?: "default" | "image-overlay";
  /** Custom content to render inside the card */
  children?: React.ReactNode;
  /** Click handler for the button */
  onButtonClick?: () => void;
  /** Click handler for the entire card */
  onClick?: () => void;
  /** Whether the card is clickable */
  clickable?: boolean;
  /** Whether the card is disabled */
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  showTitle = true,
  badge,
  showBadge = true,
  badgeVariant = "filled",
  description,
  showDescription = true,
  buttonText,
  showButton = true,
  buttonVariant = "filled",
  buttonSize = "md",
  imageSrc,
  imageAlt = "",
  imageFit = "cover",
  imageRadius = 0,
  showImage = true,
  variant = "default",
  children,
  onButtonClick,
  onClick,
  clickable = false,
  disabled = false,
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

  const cardClasses = combineClassNames(
    styles.card,
    variant === "image-overlay" && styles.imageOverlay,
    clickable && styles.clickable,
    disabled && styles.disabled,
    sxClassName
  );

  const handleCardClick = () => {
    if (!disabled && clickable && onClick) {
      onClick();
    }
  };

  const handleButtonClick = () => {
    if (!disabled && onButtonClick) {
      onButtonClick();
    }
  };

  // For image-overlay variant, set image radius to 0
  const finalImageRadius = variant === "image-overlay" ? 0 : imageRadius;

  return (
    <div
      className={cardClasses}
      onClick={handleCardClick}
      style={sxStyle}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      data-theme={isDark ? "dark" : "light"}
    >
      {/* Image Section */}
      {showImage && imageSrc && (
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fit={imageFit}
            radius={finalImageRadius}
            width="100%"
            height={variant === "image-overlay" ? "300px" : "200px"}
          />
        </div>
      )}

      {/* Content Section */}
      <div className={styles.content}>
        {/* For image-overlay variant, show title and description at bottom */}
        {variant === "image-overlay" ? (
          <>
            {/* Title */}
            {title && showTitle && (
              <Text variant="lg" weight="semibold" color="primary" as="h3">
                {title}
              </Text>
            )}
            {/* Description */}
            {description && showDescription && (
              <Text variant="sm" color="secondary" as="p">
                {description}
              </Text>
            )}
          </>
        ) : (
          <>
            {/* Title and Badge Row */}
            {((title && showTitle) || (badge && showBadge)) && (
              <div className={styles.header}>
                {title && showTitle && (
                  <Text variant="lg" weight="semibold" color="primary" as="h3">
                    {title}
                  </Text>
                )}
                {badge && showBadge && (
                  <Badge variant={badgeVariant} size="sm">
                    {badge}
                  </Badge>
                )}
              </div>
            )}

            {/* Description */}
            {description && showDescription && (
              <Text variant="sm" color="secondary" as="p">
                {description}
              </Text>
            )}

            {/* Custom Content */}
            {children && <div className={styles.customContent}>{children}</div>}

            {/* Button */}
            {buttonText && showButton && (
              <div className={styles.buttonContainer}>
                <Button
                  variant={buttonVariant}
                  size={buttonSize}
                  onClick={handleButtonClick}
                  disabled={disabled}
                >
                  {buttonText}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

Card.displayName = "Card";
