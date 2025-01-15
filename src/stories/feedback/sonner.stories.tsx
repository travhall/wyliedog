import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SonnerDemo = () => {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      }}
    >
      Show Toast
    </Button>
  );
};

const meta = {
  title: "Feedback/Sonner",
  component: SonnerDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SonnerDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};