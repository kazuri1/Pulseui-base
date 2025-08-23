import React, { useState, useCallback, useEffect } from "react";
import styles from "./Carousel.module.scss";
import { combineClassNames } from "../../../utils/sxUtils";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export interface CarouselProps {
  children: React.ReactNode[];
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  id?: string;
  /** Whether to wrap each slide in a Card component */
  useCards?: boolean;
  /** Card title for each slide (only used when useCards is true) */
  cardTitles?: string[];
  /** Card descriptions for each slide (only used when useCards is true) */
  cardDescriptions?: string[];
  /** Card images for each slide (only used when useCards is true) */
  cardImages?: string[];
  /** Whether to show only images (hide card content) */
  imageOnly?: boolean;
  /** Whether to use compact spacing between slides */
  compact?: boolean;
  /** Size of the carousel for different display contexts */
  size?: "sm" | "md" | "lg" | "xl" | "display";
  /** Accessibility label for the carousel */
  ariaLabel?: string;
  /** Whether to enable keyboard navigation */
  enableKeyboard?: boolean;
  /** Auto-play interval in milliseconds (0 to disable) */
  autoPlay?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  showDots = true,
  showArrows = true,
  className = "",
  id,
  useCards = true,
  cardTitles = [],
  cardDescriptions = [],
  cardImages = [],
  imageOnly = true,
  compact = true,
  size = "md",
  ariaLabel = "Image carousel",
  enableKeyboard = true,
  autoPlay = 0,
}) => {
  const [current, setCurrent] = useState(0);
  const total = React.Children.count(children);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      setCurrent(index);
    },
    [total]
  );

  const goToNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goToPrevious = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "Home":
          event.preventDefault();
          goTo(0);
          break;
        case "End":
          event.preventDefault();
          goTo(total - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [enableKeyboard, goToNext, goToPrevious, goTo, total]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay <= 0 || total <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlay);

    return () => clearInterval(interval);
  }, [autoPlay, total, goToNext]);

  const trackStyle = {
    transform: `translateX(-${current * 100}%)`,
  };

  const wrapperClasses = combineClassNames(
    styles.carousel,
    compact && styles.compact,
    size && styles[`size-${size}`],
    className
  );

  const renderSlide = (child: React.ReactNode, index: number) => {
    if (useCards) {
      const title = cardTitles[index] || `Slide ${index + 1}`;
      const description = cardDescriptions[index] || "";
      const image = cardImages[index] || "";

      return (
        <div
          className={combineClassNames(
            styles.slide,
            compact && styles.compactSlide
          )}
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${total}`}
          aria-hidden={index !== current}
        >
          <Card
            title={imageOnly ? "" : title}
            description={imageOnly ? "" : description}
            imageSrc={image}
            showImage={!!image}
            showButton={false}
            showBadge={false}
            showTitle={!imageOnly}
            showDescription={!imageOnly}
            className={combineClassNames(
              styles.carouselCard,
              compact && styles.compactCard
            )}
          >
            {!imageOnly && child}
          </Card>
        </div>
      );
    }

    return (
      <div
        className={combineClassNames(
          styles.slide,
          compact && styles.compactSlide
        )}
        key={index}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${total}`}
        aria-hidden={index !== current}
      >
        {child}
      </div>
    );
  };

  return (
    <div
      className={wrapperClasses}
      id={id}
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      aria-live="polite"
      aria-atomic="false"
    >
      {/* Slides */}
      <div
        className={styles.track}
        style={trackStyle}
        role="presentation"
        aria-hidden="true"
      >
        {React.Children.map(children, renderSlide)}
      </div>

      {/* Arrows */}
      {showArrows && total > 1 && (
        <>
          <Button
            className={combineClassNames(styles.arrow, styles.left)}
            onClick={goToPrevious}
            aria-label={`Previous slide. Current slide ${
              current + 1
            } of ${total}`}
            variant="outline"
            size="sm"
            aria-controls={id}
          >
            ‹
          </Button>
          <Button
            className={combineClassNames(styles.arrow, styles.right)}
            onClick={goToNext}
            aria-label={`Next slide. Current slide ${current + 1} of ${total}`}
            variant="outline"
            size="sm"
            aria-controls={id}
          >
            ›
          </Button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div
          className={styles.dots}
          role="tablist"
          aria-label="Slide navigation"
        >
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              className={combineClassNames(
                styles.dot,
                i === current && styles.active
              )}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1} of ${total}`}
              aria-selected={i === current}
              role="tab"
              aria-controls={id}
              type="button"
            />
          ))}
        </div>
      )}

      {/* Screen reader status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {`Slide ${current + 1} of ${total}`}
      </div>
    </div>
  );
};
