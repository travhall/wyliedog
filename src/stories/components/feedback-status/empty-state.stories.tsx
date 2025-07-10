import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Feedback & Status/Empty State',
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const ComingSoon: Story = {
  render: () => (
    <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center max-w-md">
      <div className="mb-4">
        <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 className="font-medium text-sm mb-1">Empty State Component</h3>
        <p className="text-muted-foreground text-xs mb-3">
          Helpful empty states with illustrations and clear calls to action
        </p>
      </div>
      <div className="bg-muted/50 rounded p-3 text-xs text-muted-foreground">
        Coming in a future release
      </div>
    </div>
  ),
};