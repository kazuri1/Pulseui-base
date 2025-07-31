import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: themes.light,
  toolbar: {
    "storybook/background": { hidden: true },
    "storybook/outline": { hidden: true },
    "storybook/measure": { hidden: true },
    "storybook/grid": { hidden: true },
  },
});
