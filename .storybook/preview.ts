import type { Preview } from "@storybook/react";
import "../src/styles.css";
import "./index.css";
const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: "Light",
          class: ["light"],
          default: true,
        },
        {
          name: "Dark",
          class: ["dark"],
        },
      ],
    },
  },
};

export default preview;
