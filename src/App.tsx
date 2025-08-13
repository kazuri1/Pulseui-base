import React, { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { SimpleTopNav } from "./components/atoms/SimpleTopNav/SimpleTopNav";
import { Button } from "./components/atoms/Button/Button";
import { Input } from "./components/atoms/Input/Input";
import { useTheme } from "./contexts/ThemeContext";

// Button variant options
const buttonVariants = [
  "filled",
  "subtle",
  "light",
  "outline",
  "white",
  "default",
] as const;

type ButtonVariant = (typeof buttonVariants)[number];

function AppContent() {
  const { themeName, setTheme } = useTheme();
  const [selectedVariant, setSelectedVariant] =
    useState<ButtonVariant>("filled");

  const navItems = [
    {
      id: "home",
      label: "Home",
      active: true,
      onClick: () => console.log("Home clicked"),
    },
    {
      id: "about",
      label: "About",
      onClick: () => console.log("About clicked"),
    },
    {
      id: "contact",
      label: "Contact",
      onClick: () => console.log("Contact clicked"),
    },
  ];

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Top Navigation */}
      <SimpleTopNav
        brandName="PulseUI"
        brandTitle="Component Library"
        items={navItems}
        versionSelector={{
          version: "1.6.0",
          versions: ["1.5.0", "1.6.0", "1.7.0"],
          onVersionChange: (version) =>
            console.log("Version changed to:", version),
          show: true,
        }}
      />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          gap: "32px",
        }}
      >
        {/* Theme Switcher */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "8px",
            border: "1px solid var(--color-border-secondary)",
          }}
        >
          <span
            style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}
          >
            Theme:
          </span>
          <button
            onClick={() => setTheme("default-light")}
            style={{
              padding: "8px 16px",
              backgroundColor:
                themeName === "default-light"
                  ? "var(--color-primary)"
                  : "var(--color-surface-tertiary)",
              color:
                themeName === "default-light"
                  ? "white"
                  : "var(--color-text-primary)",
              border: "1px solid var(--color-border-secondary)",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            ☀️ Light
          </button>
          <button
            onClick={() => setTheme("default-dark")}
            style={{
              padding: "8px 16px",
              backgroundColor:
                themeName === "default-dark"
                  ? "var(--color-primary)"
                  : "var(--color-surface-tertiary)",
              color:
                themeName === "default-dark"
                  ? "white"
                  : "var(--color-text-primary)",
              border: "1px solid var(--color-border-secondary)",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            🌙 Dark
          </button>
        </div>

        {/* Button Variant Selector */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            padding: "24px",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "12px",
            border: "1px solid var(--color-border-secondary)",
            minWidth: "300px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "1.2rem",
              color: "var(--color-text-primary)",
              textAlign: "center",
            }}
          >
            Button Variant Selector
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "100%",
              maxWidth: "250px",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                fontWeight: "500",
              }}
            >
              Select Variant:
            </label>
            <select
              value={selectedVariant}
              onChange={(e) =>
                setSelectedVariant(e.target.value as ButtonVariant)
              }
              style={{
                padding: "12px",
                border: "1px solid var(--color-border-secondary)",
                borderRadius: "6px",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-text-primary)",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {buttonVariants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Centered Button */}
          <div
            style={{
              marginTop: "16px",
              padding: "24px",
              border: "2px dashed var(--color-border-secondary)",
              borderRadius: "8px",
              backgroundColor: "var(--color-surface)",
              minWidth: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant={selectedVariant}
              size="lg"
              onClick={() => console.log(`${selectedVariant} button clicked!`)}
            >
              {selectedVariant.charAt(0).toUpperCase() +
                selectedVariant.slice(1)}{" "}
              Button
            </Button>
          </div>

          {/* Button Info */}
          <div
            style={{
              fontSize: "12px",
              color: "var(--color-text-secondary)",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Current variant: <strong>{selectedVariant}</strong>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "24px",
          textAlign: "center",
          borderTop: "1px solid var(--color-border-secondary)",
          color: "var(--color-text-secondary)",
          backgroundColor: "var(--color-surface-secondary)",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px" }}>
          PulseUI Dev Environment - Simple and Clean
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="default-light">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
