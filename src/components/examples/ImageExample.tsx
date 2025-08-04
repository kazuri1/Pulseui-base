import React from "react";
import { Image } from "../atoms/Image";

export const ImageExample: React.FC = () => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.log("Image failed to load:", event);
  };

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border-primary)",
        borderRadius: "8px",
        marginBottom: "24px",
      }}
    >
      <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
        Image Component
      </h3>

      {/* Basic Usage */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Basic Usage
        </h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Image
            src="/src/assets/Image/Image.jpg"
            alt="Sample Image"
            width={200}
            height={150}
          />
          <Image
            src="/src/assets/Image/Image.jpg"
            alt="Sample Image with custom styling"
            width={200}
            height={150}
            sx={{
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              border: "2px solid var(--color-border-primary)",
            }}
          />
        </div>
      </div>

      {/* Different Object Fit Modes */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Object Fit Modes
        </h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>
              Cover (default)
            </h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Cover fit"
              width={150}
              height={100}
              fit="cover"
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>Contain</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Contain fit"
              width={150}
              height={100}
              fit="contain"
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>Fill</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Fill fit"
              width={150}
              height={100}
              fit="fill"
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>None</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="None fit"
              width={150}
              height={100}
              fit="none"
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>
              Scale-down
            </h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Scale-down fit"
              width={150}
              height={100}
              fit="scale-down"
            />
          </div>
        </div>
      </div>

      {/* Border Radius Examples */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Border Radius
        </h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>No radius</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="No radius"
              width={120}
              height={120}
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>
              Small radius
            </h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Small radius"
              width={120}
              height={120}
              radius={8}
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>
              Large radius
            </h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Large radius"
              width={120}
              height={120}
              radius={16}
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>Circular</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Circular"
              width={120}
              height={120}
              radius="50%"
              fit="cover"
            />
          </div>
        </div>
      </div>

      {/* Different Sizes */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Different Sizes
        </h4>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>Small</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Small image"
              width={80}
              height={60}
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>Medium</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Medium image"
              width={160}
              height={120}
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>Large</h5>
            <Image
              src="/src/assets/Image/Image.jpg"
              alt="Large image"
              width={240}
              height={180}
            />
          </div>
        </div>
      </div>

      {/* Error Handling */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Error Handling
        </h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>
              With fallback
            </h5>
            <Image
              src="https://invalid-url-that-will-fail.jpg"
              fallbackSrc="/src/assets/Image/Image.jpg"
              alt="Image with fallback"
              width={200}
              height={150}
              onError={handleImageError}
            />
          </div>
          <div>
            <h5 style={{ fontSize: "1rem", marginBottom: "8px" }}>
              Without fallback
            </h5>
            <Image
              src="https://invalid-url-that-will-fail.jpg"
              alt="Image without fallback"
              width={200}
              height={150}
              onError={handleImageError}
            />
          </div>
        </div>
      </div>

      {/* Responsive Example */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Responsive Image
        </h4>
        <div style={{ maxWidth: "400px" }}>
          <Image
            src="/src/assets/Image/Image.jpg"
            alt="Responsive image"
            width="100%"
            height="auto"
            fit="cover"
            radius={8}
          />
        </div>
      </div>

      {/* Lazy Loading */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Lazy Loading
        </h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Image
            src="/src/assets/Image/Image.jpg"
            alt="Lazy loaded image"
            width={200}
            height={150}
            loading="lazy"
          />
          <Image
            src="/src/assets/Image/Image.jpg"
            alt="Eager loaded image"
            width={200}
            height={150}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
