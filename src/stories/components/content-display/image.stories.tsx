import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Components/Content Display/Image',
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-medium text-sm mb-1">Image Component</h3>
        <p className="text-muted-foreground text-xs mb-3">
          Responsive image component with lazy loading and optimization
        </p>
      </div>
      <div className="bg-muted/50 rounded p-3 text-xs text-muted-foreground">
        Coming in a future release
      </div>
    </div>
  ),
};