import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const TypographyExample = ({ 
  label, 
  className, 
  children = 'The quick brown fox jumps over the lazy dog' 
}: { 
  label: string; 
  className: string; 
  children?: string;
}) => (
  <div className="space-y-2 p-4 border rounded-lg">
    <div className="text-sm font-medium text-gray-600">{label}</div>
    <div className={className}>{children}</div>
    <div className="text-xs text-gray-400 font-mono">{className}</div>
  </div>
);

export const FontScale: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Font Scale</h2>
      <div className="grid gap-4">
        <TypographyExample label="Heading 1" className="text-4xl font-bold" />
        <TypographyExample label="Heading 2" className="text-3xl font-bold" />
        <TypographyExample label="Heading 3" className="text-2xl font-bold" />
        <TypographyExample label="Heading 4" className="text-xl font-semibold" />
        <TypographyExample label="Heading 5" className="text-lg font-medium" />
        <TypographyExample label="Heading 6" className="text-base font-medium" />
        <TypographyExample label="Body Large" className="text-lg" />
        <TypographyExample label="Body" className="text-base" />
        <TypographyExample label="Body Small" className="text-sm" />
        <TypographyExample label="Caption" className="text-xs text-gray-600" />
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Font Weights</h2>
      <div className="grid gap-4">
        <TypographyExample label="Light (300)" className="text-lg font-light" />
        <TypographyExample label="Normal (400)" className="text-lg font-normal" />
        <TypographyExample label="Medium (500)" className="text-lg font-medium" />
        <TypographyExample label="Semibold (600)" className="text-lg font-semibold" />
        <TypographyExample label="Bold (700)" className="text-lg font-bold" />
      </div>
    </div>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Line Heights</h2>
      <div className="grid gap-4">
        <TypographyExample 
          label="Tight (1.25)" 
          className="text-base leading-tight" 
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
        <TypographyExample 
          label="Normal (1.5)" 
          className="text-base leading-normal" 
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
        <TypographyExample 
          label="Relaxed (1.625)" 
          className="text-base leading-relaxed" 
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
        <TypographyExample 
          label="Loose (2)" 
          className="text-base leading-loose" 
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        />
      </div>
    </div>
  ),
};