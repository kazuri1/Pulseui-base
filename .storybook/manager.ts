import { addons } from "@storybook/manager-api";
import theme from './theme.tsx';

addons.setConfig({
  theme: {
    ...theme,
    brandTitle: 'PulseUI',
    brandUrl: '/',
    brandImage: './pulseuibaselight.png',
  },
  toolbar: {
    "storybook/background": { hidden: true },
    "storybook/outline": { hidden: true },
    "storybook/measure": { hidden: true },
    "storybook/grid": { hidden: true },
  },
});
