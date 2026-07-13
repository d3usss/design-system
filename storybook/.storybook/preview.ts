import type { Preview } from "@storybook/web-components-vite";
// @ts-expect-error Storybook preview config allows side-effect CSS imports.
import "../src/themes/odr-global.css";

import { themes } from "storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
    a11y: {
      test: "error",
    },
    layout: "centered",
  },
};

export default preview;
