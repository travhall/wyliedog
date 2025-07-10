import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Inputs & Controls/File Upload',
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <h3 className="font-medium text-sm mb-1">File Upload Component</h3>
        <p className="text-muted-foreground text-xs mb-3">
          Drag and drop file upload with progress indicators and validation
        </p>
      </div>
      <div className="bg-muted/50 rounded p-3 text-xs text-muted-foreground">
        Coming in a future release
      </div>
    </div>
  ),
};