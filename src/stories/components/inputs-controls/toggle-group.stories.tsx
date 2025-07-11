import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const meta = {
  title: "Components/Inputs & Controls/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "multiple",
    children: (
      <>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          I
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          S
        </ToggleGroupItem>
      </>
    ),
  },
};