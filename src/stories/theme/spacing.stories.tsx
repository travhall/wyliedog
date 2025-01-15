import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SpacingShowcase = () => {
  const spacingValues = [
    { name: "px", value: "1px" },
    { name: "0.5", value: "0.125rem" },
    { name: "1", value: "0.25rem" },
    { name: "2", value: "0.5rem" },
    { name: "3", value: "0.75rem" },
    { name: "4", value: "1rem" },
    { name: "5", value: "1.25rem" },
    { name: "6", value: "1.5rem" },
    { name: "8", value: "2rem" },
    { name: "10", value: "2.5rem" },
    { name: "12", value: "3rem" },
    { name: "16", value: "4rem" },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Spacing Scale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {spacingValues.map(({ name, value }) => (
              <div key={name} className="flex items-center gap-4">
                <div className="w-16">
                  <span className="text-sm font-medium">{name}</span>
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-primary rounded" style={{ width: value }} />
                </div>
                <div className="w-20">
                  <span className="text-sm text-muted-foreground">{value}</span>
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
  title: "Theme/Spacing",
  component: SpacingShowcase,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpacingShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};