import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/ui/input";

const meta = {
  title: "Components/Inputs & Controls/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};