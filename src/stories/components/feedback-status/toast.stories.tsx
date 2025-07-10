import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const meta = {
  title: "Components/Feedback & Status/Toast",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();
    
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};