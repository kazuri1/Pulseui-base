import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/components/ThemeProvider";

// Mock theme context for Storybook only
const MockThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div style={{ padding: "20px" }}>{children}</div>;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MockThemeProvider>
        <Story />
      </MockThemeProvider>
    ),
  ],
};

export default preview;
