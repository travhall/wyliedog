import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  className: string;
  label: string;
  value: string;
}

const ColorSwatch = ({ className, label, value }: ColorSwatchProps) => (
  <div className="space-y-1.5">
    <div className={cn("h-16 w-full rounded-md", className)} />
    <div className="text-sm">
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">{value}</p>
    </div>
  </div>
);

const ColorSystem = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Brand Colors</CardTitle>
          <CardDescription>Primary and secondary brand color palettes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Primary Brand</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <ColorSwatch className="bg-brand-primary-50" label="50" value="hsl(var(--brand-primary-50))" />
              <ColorSwatch className="bg-brand-primary-100" label="100" value="hsl(var(--brand-primary-100))" />
              <ColorSwatch className="bg-brand-primary-200" label="200" value="hsl(var(--brand-primary-200))" />
              <ColorSwatch className="bg-brand-primary-300" label="300" value="hsl(var(--brand-primary-300))" />
              <ColorSwatch className="bg-brand-primary-400" label="400" value="hsl(var(--brand-primary-400))" />
              <ColorSwatch className="bg-brand-primary-500" label="500" value="hsl(var(--brand-primary-500))" />
              <ColorSwatch className="bg-brand-primary-600" label="600" value="hsl(var(--brand-primary-600))" />
              <ColorSwatch className="bg-brand-primary-700" label="700" value="hsl(var(--brand-primary-700))" />
              <ColorSwatch className="bg-brand-primary-800" label="800" value="hsl(var(--brand-primary-800))" />
              <ColorSwatch className="bg-brand-primary-900" label="900" value="hsl(var(--brand-primary-900))" />
              <ColorSwatch className="bg-brand-primary-950" label="950" value="hsl(var(--brand-primary-950))" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Secondary Brand</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <ColorSwatch className="bg-brand-secondary-50" label="50" value="hsl(var(--brand-secondary-50))" />
              <ColorSwatch className="bg-brand-secondary-100" label="100" value="hsl(var(--brand-secondary-100))" />
              <ColorSwatch className="bg-brand-secondary-200" label="200" value="hsl(var(--brand-secondary-200))" />
              <ColorSwatch className="bg-brand-secondary-300" label="300" value="hsl(var(--brand-secondary-300))" />
              <ColorSwatch className="bg-brand-secondary-400" label="400" value="hsl(var(--brand-secondary-400))" />
              <ColorSwatch className="bg-brand-secondary-500" label="500" value="hsl(var(--brand-secondary-500))" />
              <ColorSwatch className="bg-brand-secondary-600" label="600" value="hsl(var(--brand-secondary-600))" />
              <ColorSwatch className="bg-brand-secondary-700" label="700" value="hsl(var(--brand-secondary-700))" />
              <ColorSwatch className="bg-brand-secondary-800" label="800" value="hsl(var(--brand-secondary-800))" />
              <ColorSwatch className="bg-brand-secondary-900" label="900" value="hsl(var(--brand-secondary-900))" />
              <ColorSwatch className="bg-brand-secondary-950" label="950" value="hsl(var(--brand-secondary-950))" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Semantic Colors</CardTitle>
          <CardDescription>Contextual colors for different UI elements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <ColorSwatch className="bg-background" label="Background" value="var(--background)" />
            <ColorSwatch className="bg-foreground" label="Foreground" value="var(--foreground)" />
            <ColorSwatch className="bg-card" label="Card" value="var(--card)" />
            <ColorSwatch className="bg-card-foreground" label="Card Foreground" value="var(--card-foreground)" />
            <ColorSwatch className="bg-muted" label="Muted" value="var(--muted)" />
            <ColorSwatch className="bg-muted-foreground" label="Muted Foreground" value="var(--muted-foreground)" />
            <ColorSwatch className="bg-accent" label="Accent" value="var(--accent)" />
            <ColorSwatch className="bg-accent-foreground" label="Accent Foreground" value="var(--accent-foreground)" />
            <ColorSwatch className="bg-destructive" label="Destructive" value="var(--destructive)" />
            <ColorSwatch className="bg-destructive-foreground" label="Destructive Foreground" value="var(--destructive-foreground)" />
            <ColorSwatch className="bg-border" label="Border" value="var(--border)" />
            <ColorSwatch className="bg-input" label="Input" value="var(--input)" />
            <ColorSwatch className="bg-ring" label="Ring" value="var(--ring)" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const meta = {
  title: "Theme/Colors",
  component: ColorSystem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};