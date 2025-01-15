import type { Meta, StoryObj } from "@storybook/react";

const Container = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`container ${className}`}>{children}</div>
);

const meta = {
  title: "Core/Container",
  component: Container,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="h-32 w-full rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
        Container Content
      </div>
    ),
  },
};