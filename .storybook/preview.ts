import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        state: "open",
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
