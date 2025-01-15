import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ColorContrastDemo = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Color Contrast Examples</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid gap-4">
            <div className="bg-primary p-4 rounded-lg">
              <p className="text-primary-foreground">Primary with contrast text</p>
            </div>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-secondary-foreground">Secondary with contrast text</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">Muted with contrast text</p>
            </div>
            <div className="bg-accent p-4 rounded-lg">
              <p className="text-accent-foreground">Accent with contrast text</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Interactive Elements</h3>
            <div className="flex gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta = {
  title: "Theme/Color Contrast",
  component: ColorContrastDemo,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorContrastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};