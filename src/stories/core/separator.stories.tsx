import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Core/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div className="w-[300px] space-y-1">
        <div className="text-sm font-medium">Navigation</div>
        <Story />
        <div className="text-sm text-muted-foreground">
          List of navigation items
        </div>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <div className="flex h-5 items-center space-x-4">
        <div>Blog</div>
        <Story />
        <div>Docs</div>
        <Story />
        <div>Source</div>
      </div>
    ),
  ],
};