import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Components/Inputs & Controls/Search Input',
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="font-medium text-sm mb-1">Search Input Component</h3>
        <p className="text-muted-foreground text-xs mb-3">
          Enhanced search input with autocomplete, filters, and keyboard shortcuts
        </p>
      </div>
      <div className="bg-muted/50 rounded p-3 text-xs text-muted-foreground">
        Coming in a future release
      </div>
    </div>
  ),
};