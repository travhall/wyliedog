import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const SpacingExample = ({ size, value, usage }: { size: string; value: string; usage: string }) => (
  <div className="flex items-center space-x-4 p-4 border rounded-lg">
    <div className="flex items-center space-x-4">
      <div 
        className="bg-blue-500" 
        style={{ width: value, height: '24px' }}
      />
      <div>
        <div className="font-medium text-sm">{size}</div>
        <div className="text-xs text-gray-500">{value}</div>
        <div className="text-xs text-gray-400">{usage}</div>
      </div>
    </div>
  </div>
);

export const SpacingScale: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Spacing Scale</h2>
      <div className="space-y-4">
        <SpacingExample size="0" value="0px" usage="No spacing" />
        <SpacingExample size="px" value="1px" usage="Pixel-perfect adjustments" />
        <SpacingExample size="0.5" value="2px" usage="Minimal spacing" />
        <SpacingExample size="1" value="4px" usage="Tiny spacers" />
        <SpacingExample size="2" value="8px" usage="Compact UI elements" />
        <SpacingExample size="3" value="12px" usage="Form elements spacing" />
        <SpacingExample size="4" value="16px" usage="Standard spacing" />
        <SpacingExample size="5" value="20px" usage="Medium spacing" />
        <SpacingExample size="6" value="24px" usage="Section spacing" />
        <SpacingExample size="8" value="32px" usage="Large section spacing" />
        <SpacingExample size="10" value="40px" usage="Extra large spacing" />
        <SpacingExample size="12" value="48px" usage="Content blocks" />
        <SpacingExample size="16" value="64px" usage="Major sections" />
        <SpacingExample size="20" value="80px" usage="Page sections" />
        <SpacingExample size="24" value="96px" usage="Large page sections" />
      </div>
    </div>
  ),
};

const PaddingExample = ({ label, className }: { label: string; className: string }) => (
  <div className="space-y-2">
    <div className="text-sm font-medium">{label}</div>
    <div className="border-2 border-dashed border-gray-300">
      <div className={`bg-blue-100 ${className}`}>
        <div className="bg-blue-500 text-white text-sm p-2">Content</div>
      </div>
    </div>
    <div className="text-xs text-gray-400 font-mono">{className}</div>
  </div>
);

export const PaddingExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Padding Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PaddingExample label="Small" className="p-2" />
        <PaddingExample label="Medium" className="p-4" />
        <PaddingExample label="Large" className="p-6" />
        <PaddingExample label="X-Large" className="p-8" />
        <PaddingExample label="Horizontal Only" className="px-4" />
        <PaddingExample label="Vertical Only" className="py-4" />
      </div>
    </div>
  ),
};

const MarginExample = ({ label, className }: { label: string; className: string }) => (
  <div className="space-y-2">
    <div className="text-sm font-medium">{label}</div>
    <div className="border-2 border-dashed border-gray-300 p-4">
      <div className={`bg-blue-500 text-white text-sm p-2 ${className}`}>
        Content with margin
      </div>
      <div className="bg-gray-200 text-gray-800 text-sm p-2">
        Adjacent content
      </div>
    </div>
    <div className="text-xs text-gray-400 font-mono">{className}</div>
  </div>
);

export const MarginExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Margin Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MarginExample label="Small" className="mb-2" />
        <MarginExample label="Medium" className="mb-4" />
        <MarginExample label="Large" className="mb-6" />
        <MarginExample label="X-Large" className="mb-8" />
        <MarginExample label="Horizontal" className="mx-4" />
        <MarginExample label="Top & Bottom" className="my-4" />
      </div>
    </div>
  ),
};