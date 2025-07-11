import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "@/components/ui/toggle";

const meta = {
  title: "Components/Inputs & Controls/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Toggle",
  },
};