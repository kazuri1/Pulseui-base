import React from "react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: "light",
      list: [
        { name: "light", class: "light", color: "#ffffff" },
        { name: "dark", class: "dark", color: "#141414" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "16px",
          backgroundColor: "transparent",
          color: "var(--color-text-primary)",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
