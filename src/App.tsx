import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/atoms/Button";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("default");

  const themes = [
    { id: "default", name: "Pulse", color: "#339af0" },
    { id: "medash", name: "Medash", color: "#1971c2" },
    { id: "fitcore", name: "FitCore", color: "#fd7e14" },
    { id: "labsync", name: "LabSync", color: "#7950f2" },
  ];

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-body text-body p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <a
              href="https://vite.dev"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="hover:opacity-75 transition-opacity"
            >
              <img
                src={reactLogo}
                className="h-12 w-12 animate-spin"
                alt="React logo"
              />
            </a>
          </div>

          {/* Theme Switcher */}
          <div className="flex gap-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => toggleTheme(t.id)}
                className={`px-sm py-xs rounded-md text-xs font-medium transition-colors ${
                  theme === t.id
                    ? "bg-primary-600 text-white"
                    : "bg-surface-200 text-text-secondary hover:bg-surface-300"
                }`}
                style={{ "--tw-ring-color": t.color } as React.CSSProperties}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        <h1 className="text-4xl text-center mb-6">Pulse UI Design System</h1>
        <p className="text-center text-muted mb-6">
          Native Pulse design system with multi-brand support
        </p>

        {/* Demo Section */}
        <div className="pulse-card p-6 mb-6">
          <h2 className="text-3xl mb-4">Interactive Demo</h2>
          <Button
            onClick={() => setCount((count) => count + 1)}
            variant="filled"
          >
            Count is {count}
          </Button>
          <p className="mt-4 text-muted">
            Edit{" "}
            <code className="bg-surface-200 px-2 py-1 rounded text-sm">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        {/* Component Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Buttons */}
          <div className="pulse-card p-6">
            <h3 className="text-2xl mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-2">
              <button className="pulse-button-primary px-4 py-2">
                Primary
              </button>
              <button className="pulse-button-secondary px-4 py-2">
                Secondary
              </button>
              <button className="pulse-button-outline px-4 py-2">
                Outline
              </button>
              <button className="pulse-button-ghost px-4 py-2">Ghost</button>
              <button className="pulse-button-danger px-4 py-2">Danger</button>
            </div>
          </div>

          {/* Input */}
          <div className="pulse-card p-6">
            <h3 className="text-2xl mb-4">Input Field</h3>
            <input
              type="text"
              placeholder="Enter your text here..."
              className="pulse-input w-full"
            />
          </div>
        </div>

        {/* Brand Showcase */}
        <div className="mt-6">
          <h2 className="text-3xl mb-4">Brand Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {themes.map((t) => (
              <div key={t.id} className="pulse-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <h4 className="text-xl">{t.name}</h4>
                </div>
                <p className="text-sm text-muted mb-2">
                  {t.id === "default" &&
                    "Pulse native theme with blue primary colors"}
                  {t.id === "medash" &&
                    "MedTech brand with medical blue colors"}
                  {t.id === "fitcore" &&
                    "FitnessTech brand with energetic orange colors"}
                  {t.id === "labsync" &&
                    "LabSync brand with scientific purple colors"}
                </p>
                <button
                  onClick={() => toggleTheme(t.id)}
                  className="pulse-button-primary px-2 py-1 text-xs"
                >
                  Apply Theme
                </button>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted mt-lg">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
