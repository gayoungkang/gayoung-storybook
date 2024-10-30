import React from "react";
import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/styles/globalStyle";
import { theme } from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle theme={theme} />
      <Story />
    </>
  ),
];

export default preview;
