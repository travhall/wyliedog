import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "../src/index.css";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      current: "light",
      darkClass: "dark",
      lightClass: "light",
      classTarget: "html",
      stylePreview: true,
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    layout: "centered",
  },

  decorators: [
    (Story, context) => (
      <ThemeProvider
        defaultTheme={context.globals.theme}
        storageKey="storybook-theme"
      >
        <div
          className={`min-h-[350px] w-full p-8 bg-background text-foreground ${context.globals.theme}`}
        >
          <Story />
        </div>
        <Toaster />
      </ThemeProvider>
    ),
  ],

  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
        showName: true,
        dynamicTitle: true,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
