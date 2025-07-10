import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Shadows',
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

const shadows = [
  { name: 'None', value: 'none', class: 'shadow-none' },
  { name: 'Small', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', class: 'shadow-sm' },
  { name: 'Medium', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', class: 'shadow-md' },
  { name: 'Large', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', class: 'shadow-lg' },
  { name: 'Extra Large', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', class: 'shadow-xl' },
  { name: '2X Large', value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', class: 'shadow-2xl' },
];

export const ShadowScale: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Shadow Scale</h2>
        <p className="text-muted-foreground mb-8">
          Shadows provide depth and hierarchy. Use lighter shadows for subtle elevation and heavier shadows for prominent elements.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {shadows.map((shadow) => (
          <div key={shadow.name} className="text-center">
            <div 
              className={`w-24 h-24 bg-white rounded-lg border mx-auto mb-4 ${shadow.class}`}
            />
            <div className="space-y-1">
              <h3 className="font-medium">{shadow.name}</h3>
              <code className="text-xs text-muted-foreground block">{shadow.class}</code>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Usage Guidelines</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• <strong>sm:</strong> Subtle elements like cards and buttons</li>
          <li>• <strong>md:</strong> Standard cards and panels</li>
          <li>• <strong>lg:</strong> Dropdowns and popovers</li>
          <li>• <strong>xl:</strong> Modals and dialogs</li>
          <li>• <strong>2xl:</strong> High-priority overlays</li>
        </ul>
      </div>
    </div>
  ),
};