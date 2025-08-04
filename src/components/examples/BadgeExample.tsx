import React from "react";
import { Badge } from "../atoms/Badge";
import { Add, Close, Search, Settings } from "../atoms/Icon/IconSet";

export const BadgeExample: React.FC = () => {
  const handleBadgeClick = (message: string) => {
    console.log(`Badge clicked: ${message}`);
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
        Badge Component
      </h3>

      {/* All Variants */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          All Variants
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge variant="dot">DOT</Badge>
          <Badge variant="filled">FILLED</Badge>
          <Badge variant="subtle">SUBTLE</Badge>
          <Badge variant="light">LIGHT</Badge>
          <Badge variant="outline">OUTLINE</Badge>
          <Badge variant="white">WHITE</Badge>
          <Badge variant="default">DEFAULT</Badge>
        </div>
      </div>

      {/* All Sizes */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          All Sizes
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge size="xs">XS</Badge>
          <Badge size="sm">SM</Badge>
          <Badge size="md">MD</Badge>
          <Badge size="lg">LG</Badge>
          <Badge size="xl">XL</Badge>
        </div>
      </div>

      {/* With Icons */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          With Icons
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge leftIcon={Add}>ADD</Badge>
          <Badge rightIcon={Close}>REMOVE</Badge>
          <Badge leftIcon={Search} rightIcon={Settings}>SEARCH</Badge>
          <Badge variant="dot" leftIcon={Add}>DOT WITH ICON</Badge>
        </div>
      </div>

      {/* Interactive Badges */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          Interactive Badges
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge onClick={() => handleBadgeClick("Primary clicked")} variant="filled">
            CLICKABLE
          </Badge>
          <Badge onClick={() => handleBadgeClick("Remove clicked")} rightIcon={Close}>
            REMOVE
          </Badge>
          <Badge onClick={() => handleBadgeClick("Add clicked")} leftIcon={Add} variant="outline">
            ADD
          </Badge>
        </div>
      </div>

      {/* States */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          States
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge variant="filled" state="default">DEFAULT</Badge>
          <Badge variant="filled" state="hover">HOVER</Badge>
          <Badge variant="filled" state="disabled">DISABLED</Badge>
          <Badge disabled>DISABLED</Badge>
        </div>
      </div>

      {/* All Sizes with Dot Variant */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          All Sizes with Dot Variant
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge variant="dot" size="xs">XS</Badge>
          <Badge variant="dot" size="sm">SM</Badge>
          <Badge variant="dot" size="md">MD</Badge>
          <Badge variant="dot" size="lg">LG</Badge>
          <Badge variant="dot" size="xl">XL</Badge>
        </div>
      </div>

      {/* All Variants with Icons */}
      <div style={{ marginBottom: "24px" }}>
        <h4 style={{ fontSize: "1.125rem", marginBottom: "12px" }}>
          All Variants with Icons
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <Badge variant="dot" leftIcon={Add}>DOT</Badge>
          <Badge variant="filled" leftIcon={Search}>FILLED</Badge>
          <Badge variant="subtle" rightIcon={Settings}>SUBTLE</Badge>
          <Badge variant="light" leftIcon={Add} rightIcon={Close}>LIGHT</Badge>
          <Badge variant="outline" leftIcon={Search}>OUTLINE</Badge>
          <Badge variant="white" rightIcon={Settings}>WHITE</Badge>
          <Badge variant="default" leftIcon={Add} rightIcon={Close}>DEFAULT</Badge>
        </div>
      </div>
    </div>
  );
}; 