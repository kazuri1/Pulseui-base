import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/atoms/Button";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { SxPropsExample } from "./components/examples/SxPropsExample";

function AppContent() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-primary)",
        padding: "16px",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="https://vite.dev"
              target="_blank"
              style={{ opacity: 1, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <img
                src={viteLogo}
                style={{ height: "48px", width: "48px" }}
                alt="Vite logo"
              />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              style={{ opacity: 1, transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <img
                src={reactLogo}
                style={{
                  height: "48px",
                  width: "48px",
                  animation: "spin 2s linear infinite",
                }}
                alt="React logo"
              />
            </a>
          </div>

          {/* Theme Toggle */}
          <Button onClick={toggleTheme} variant="outline">
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </Button>
        </div>

        <h1
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Pulse UI Design System
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            marginBottom: "24px",
          }}
        >
          Native Pulse design system with dark mode support and SX Props
        </p>

        {/* SX Props Example */}
        <div style={{ marginBottom: "32px" }}>
          <SxPropsExample />
        </div>

        {/* Demo Section */}
        <div
          style={{
            padding: "24px",
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border-primary)",
            borderRadius: "8px",
            marginBottom: "24px",
          }}
        >
          <h2 style={{ fontSize: "1.875rem", marginBottom: "16px" }}>
            Interactive Demo
          </h2>
          <Button
            onClick={() => setCount((count) => count + 1)}
            variant="filled"
          >
            Count is {count}
          </Button>
          <p style={{ marginTop: "16px", color: "var(--color-text-muted)" }}>
            Edit{" "}
            <code
              style={{
                backgroundColor: "var(--color-surface-secondary)",
                padding: "4px 8px",
                borderRadius: "4px",
                fontSize: "0.875rem",
              }}
            >
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        {/* Component Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Buttons */}
          <div
            style={{
              padding: "24px",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border-primary)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
              Button Variants
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <Button variant="filled">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="subtle">Subtle</Button>
              <Button variant="light">Light</Button>
              <Button variant="white">White</Button>
              <Button variant="default">Default</Button>
            </div>
          </div>

          {/* Input */}
          <div
            style={{
              padding: "24px",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border-primary)",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
              Input Field
            </h3>
            <input
              type="text"
              placeholder="Enter your text here..."
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid var(--color-input-border)",
                borderRadius: "4px",
                backgroundColor: "var(--color-input-background)",
                color: "var(--color-input-text)",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "var(--color-input-border-focus)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "var(--color-input-border)")
              }
            />
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--color-text-muted)",
            marginTop: "32px",
          }}
        >
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider initialTheme="light">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
