import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/getting-started/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../src/stories/foundations/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../src/stories/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../src/stories/patterns/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../src/stories/templates/**/*.@(mdx|stories.@(js|jsx|ts|tsx))",
    "../src/stories/resources/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
    };
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;