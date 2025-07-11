import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Colors',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({ name, value, description }: { name: string; value: string; description: string }) => (
  <div className="flex items-center space-x-4 p-4 border rounded-lg">
    <div 
      className="w-12 h-12 rounded-lg border border-gray-200" 
      style={{ backgroundColor: value }}
    />
    <div>
      <div className="font-medium text-sm">{name}</div>
      <div className="text-xs text-gray-500">{value}</div>
      <div className="text-xs text-gray-400">{description}</div>
    </div>
  </div>
);

const ColorPalette = ({ title, colors }: { title: string; colors: Array<{ name: string; value: string; description: string }> }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  </div>
);

export const Primary: Story = {
  render: () => (
    <ColorPalette
      title="Primary Colors"
      colors={[
        { name: 'Primary 50', value: 'hsl(210, 100%, 97%)', description: 'Lightest primary background' },
        { name: 'Primary 100', value: 'hsl(210, 100%, 94%)', description: 'Light primary background' },
        { name: 'Primary 200', value: 'hsl(210, 100%, 87%)', description: 'Primary hover states' },
        { name: 'Primary 300', value: 'hsl(210, 100%, 78%)', description: 'Primary active states' },
        { name: 'Primary 400', value: 'hsl(210, 100%, 68%)', description: 'Secondary actions' },
        { name: 'Primary 500', value: 'hsl(210, 100%, 56%)', description: 'Primary buttons, key actions' },
        { name: 'Primary 600', value: 'hsl(210, 100%, 48%)', description: 'Primary button hover' },
        { name: 'Primary 700', value: 'hsl(210, 100%, 40%)', description: 'Primary button pressed' },
        { name: 'Primary 800', value: 'hsl(210, 100%, 32%)', description: 'Focus rings' },
        { name: 'Primary 900', value: 'hsl(210, 100%, 24%)', description: 'Primary text on light' },
      ]}
    />
  ),
};

export const Neutral: Story = {
  render: () => (
    <ColorPalette
      title="Neutral Colors"
      colors={[
        { name: 'Neutral 50', value: 'hsl(210, 40%, 98%)', description: 'Page backgrounds' },
        { name: 'Neutral 100', value: 'hsl(210, 40%, 96%)', description: 'Card backgrounds' },
        { name: 'Neutral 200', value: 'hsl(214, 32%, 91%)', description: 'Subtle borders' },
        { name: 'Neutral 300', value: 'hsl(213, 27%, 84%)', description: 'Strong borders' },
        { name: 'Neutral 400', value: 'hsl(215, 20%, 65%)', description: 'Disabled text' },
        { name: 'Neutral 500', value: 'hsl(215, 16%, 47%)', description: 'Placeholders' },
        { name: 'Neutral 600', value: 'hsl(215, 19%, 35%)', description: 'Secondary text' },
        { name: 'Neutral 700', value: 'hsl(215, 25%, 27%)', description: 'Primary text' },
        { name: 'Neutral 800', value: 'hsl(217, 33%, 17%)', description: 'Headings' },
        { name: 'Neutral 900', value: 'hsl(222, 84%, 5%)', description: 'High contrast text' },
      ]}
    />
  ),
};

export const Semantic: Story = {
  render: () => (
    <ColorPalette
      title="Semantic Colors"
      colors={[
        { name: 'Success', value: 'hsl(142, 76%, 36%)', description: 'Success messages, positive actions' },
        { name: 'Warning', value: 'hsl(43, 96%, 56%)', description: 'Warnings, attention needed' },
        { name: 'Error', value: 'hsl(0, 84%, 60%)', description: 'Error messages, destructive actions' },
        { name: 'Info', value: 'hsl(217, 91%, 60%)', description: 'Information messages' },
      ]}
    />
  ),
};