import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";

const meta = {
  title: "Components/Feedback & Status/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: "w-[60%]",
  },
};