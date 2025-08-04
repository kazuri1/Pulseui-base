import React, { useState } from "react";
import { Radio } from "../atoms/Radio";

export const RadioExample: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>("light");
  const [selectedSize, setSelectedSize] = useState<string>("md");
  const [selectedNotification, setSelectedNotification] =
    useState<string>("all");

  return (
    <div style={{ padding: "24px", maxWidth: "600px" }}>
      <h2 style={{ marginBottom: "24px", color: "var(--color-gray-9)" }}>
        Radio Component Examples
      </h2>

      {/* Basic Usage */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          Basic Usage
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Radio label="Unchecked radio button" />
          <Radio label="Checked radio button" checked={true} />
          <Radio label="Radio without label" showLabel={false} />
        </div>
      </section>

      {/* Size Variants */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          Size Variants
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Radio label="Extra Small" size="xs" />
          <Radio label="Small" size="sm" />
          <Radio label="Medium (default)" size="md" />
          <Radio label="Large" size="lg" />
          <Radio label="Extra Large" size="xl" />
        </div>
      </section>

      {/* Label Positions */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          Label Positions
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Radio label="Label on the right (default)" labelPosition="right" />
          <Radio label="Label on the left" labelPosition="left" />
        </div>
      </section>

      {/* States */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          States
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Radio label="Default state" state="default" />
          <Radio label="Disabled state" state="disabled" />
          <Radio label="Error state" state="error" />
          <Radio label="Disabled checked" checked={true} state="disabled" />
          <Radio label="Error checked" checked={true} state="error" />
        </div>
      </section>

      {/* Interactive Examples */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          Interactive Examples
        </h3>

        {/* Theme Selection */}
        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ marginBottom: "12px", color: "var(--color-gray-7)" }}>
            Theme Selection
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Radio
              label="Light Theme"
              name="theme"
              value="light"
              checked={selectedTheme === "light"}
              onChange={() => setSelectedTheme("light")}
            />
            <Radio
              label="Dark Theme"
              name="theme"
              value="dark"
              checked={selectedTheme === "dark"}
              onChange={() => setSelectedTheme("dark")}
            />
            <Radio
              label="Auto (System)"
              name="theme"
              value="auto"
              checked={selectedTheme === "auto"}
              onChange={() => setSelectedTheme("auto")}
            />
          </div>
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "var(--color-gray-6)",
            }}
          >
            Selected theme: <strong>{selectedTheme}</strong>
          </p>
        </div>

        {/* Component Size */}
        <div style={{ marginBottom: "24px" }}>
          <h4 style={{ marginBottom: "12px", color: "var(--color-gray-7)" }}>
            Component Size
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Radio
              label="Extra Small"
              name="size"
              value="xs"
              size="xs"
              checked={selectedSize === "xs"}
              onChange={() => setSelectedSize("xs")}
            />
            <Radio
              label="Small"
              name="size"
              value="sm"
              size="sm"
              checked={selectedSize === "sm"}
              onChange={() => setSelectedSize("sm")}
            />
            <Radio
              label="Medium"
              name="size"
              value="md"
              size="md"
              checked={selectedSize === "md"}
              onChange={() => setSelectedSize("md")}
            />
            <Radio
              label="Large"
              name="size"
              value="lg"
              size="lg"
              checked={selectedSize === "lg"}
              onChange={() => setSelectedSize("lg")}
            />
            <Radio
              label="Extra Large"
              name="size"
              value="xl"
              size="xl"
              checked={selectedSize === "xl"}
              onChange={() => setSelectedSize("xl")}
            />
          </div>
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "var(--color-gray-6)",
            }}
          >
            Selected size: <strong>{selectedSize}</strong>
          </p>
        </div>

        {/* Notification Preferences */}
        <div>
          <h4 style={{ marginBottom: "12px", color: "var(--color-gray-7)" }}>
            Notification Preferences
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Radio
              label="All Notifications"
              name="notifications"
              value="all"
              checked={selectedNotification === "all"}
              onChange={() => setSelectedNotification("all")}
            />
            <Radio
              label="Important Only"
              name="notifications"
              value="important"
              checked={selectedNotification === "important"}
              onChange={() => setSelectedNotification("important")}
            />
            <Radio
              label="None"
              name="notifications"
              value="none"
              checked={selectedNotification === "none"}
              onChange={() => setSelectedNotification("none")}
            />
          </div>
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "var(--color-gray-6)",
            }}
          >
            Notification setting: <strong>{selectedNotification}</strong>
          </p>
        </div>
      </section>

      {/* Mixed States Example */}
      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          Mixed States Example
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Radio label="Normal radio" checked={false} />
          <Radio label="Checked radio" checked={true} />
          <Radio label="Disabled radio" state="disabled" />
          <Radio
            label="Disabled checked radio"
            checked={true}
            state="disabled"
          />
          <Radio label="Error radio" state="error" />
          <Radio label="Error checked radio" checked={true} state="error" />
        </div>
      </section>

      {/* Different Sizes with States */}
      <section>
        <h3 style={{ marginBottom: "16px", color: "var(--color-gray-8)" }}>
          Different Sizes with States
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h4 style={{ marginBottom: "8px", color: "var(--color-gray-7)" }}>
              Extra Small
            </h4>
            <div style={{ display: "flex", gap: "16px" }}>
              <Radio label="Default" size="xs" />
              <Radio label="Checked" size="xs" checked={true} />
              <Radio label="Disabled" size="xs" state="disabled" />
              <Radio label="Error" size="xs" state="error" />
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px", color: "var(--color-gray-7)" }}>
              Small
            </h4>
            <div style={{ display: "flex", gap: "16px" }}>
              <Radio label="Default" size="sm" />
              <Radio label="Checked" size="sm" checked={true} />
              <Radio label="Disabled" size="sm" state="disabled" />
              <Radio label="Error" size="sm" state="error" />
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px", color: "var(--color-gray-7)" }}>
              Medium
            </h4>
            <div style={{ display: "flex", gap: "16px" }}>
              <Radio label="Default" size="md" />
              <Radio label="Checked" size="md" checked={true} />
              <Radio label="Disabled" size="md" state="disabled" />
              <Radio label="Error" size="md" state="error" />
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px", color: "var(--color-gray-7)" }}>
              Large
            </h4>
            <div style={{ display: "flex", gap: "16px" }}>
              <Radio label="Default" size="lg" />
              <Radio label="Checked" size="lg" checked={true} />
              <Radio label="Disabled" size="lg" state="disabled" />
              <Radio label="Error" size="lg" state="error" />
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: "8px", color: "var(--color-gray-7)" }}>
              Extra Large
            </h4>
            <div style={{ display: "flex", gap: "16px" }}>
              <Radio label="Default" size="xl" />
              <Radio label="Checked" size="xl" checked={true} />
              <Radio label="Disabled" size="xl" state="disabled" />
              <Radio label="Error" size="xl" state="error" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
