import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RadiusShowcase = () => {
  const radiusValues = [
    { name: "sm", value: "calc(var(--radius) - 4px)" },
    { name: "md", value: "calc(var(--radius) - 2px)" },
    { name: "lg", value: "var(--radius)" },
    { name: "full", value: "9999px" },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Border Radius</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {radiusValues.map(({ name, value }) => (
              <div key={name} className="space-y-3">
                <div 
                  className="h-24 w-24 bg-primary" 
                  style={{ borderRadius: value }}
                />
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta = {
  title: "Theme/Radius",
  component: RadiusShowcase,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadiusShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};