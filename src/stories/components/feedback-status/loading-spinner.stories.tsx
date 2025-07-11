import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Components/Feedback & Status/Loading Spinner',
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const ComingSoon: Story = {
  render: () => (
    <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center max-w-md">
      <div className="mb-4">
        <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
          <svg className="w-6 h-6 text-muted-foreground animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h3 className="font-medium text-sm mb-1">Loading Spinner Component</h3>
        <p className="text-muted-foreground text-xs mb-3">
          Various loading indicators and spinners for different contexts
        </p>
      </div>
      <div className="bg-muted/50 rounded p-3 text-xs text-muted-foreground">
        Coming in a future release
      </div>
    </div>
  ),
};