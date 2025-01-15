import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TypographyShowcase = () => {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Headings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Heading 1
            </h1>
            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
              Heading 2
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Heading 3
            </h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Heading 4
            </h4>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Paragraphs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the error of his ways and promised to rule with justice.
          </p>
          <p className="text-sm text-muted-foreground">
            This is a small paragraph with muted text.
          </p>
          <p className="text-xs text-muted-foreground">
            This is extra small text often used for captions or helper text.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lists</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ul>

          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

const meta = {
  title: "Theme/Typography",
  component: TypographyShowcase,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TypographyShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};