import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const DarkModeDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Dark Mode Toggle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p>Current theme: {theme}</p>
            <div className="flex gap-2">
              <Button 
                variant={theme === 'light' ? 'default' : 'outline'} 
                onClick={() => setTheme('light')}
              >
                Light
              </Button>
              <Button 
                variant={theme === 'dark' ? 'default' : 'outline'} 
                onClick={() => setTheme('dark')}
              >
                Dark
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta = {
  title: "Theme/Dark Mode",
  component: DarkModeDemo,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DarkModeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};