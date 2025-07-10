import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Shadows',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const shadowTokens = [
  { name: 'shadow-none', value: 'none', description: 'No shadow' },
  { name: 'shadow-sm', value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', description: 'Subtle shadow for minimal elevation' },
  { name: 'shadow-md', value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', description: 'Standard shadow for cards and panels' },
  { name: 'shadow-lg', value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', description: 'Prominent shadow for dropdowns and modals' },
  { name: 'shadow-xl', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', description: 'Strong shadow for floating elements' },
  { name: 'shadow-2xl', value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', description: 'Maximum elevation for modals and overlays' },
];

export const ShadowScale: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Shadow Scale</h2>
        <p className="text-muted-foreground mb-6">
          Our shadow system provides consistent elevation levels across the design system.
          Each shadow level represents a different elevation in the interface hierarchy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shadowTokens.map((token) => (
          <div key={token.name} className="space-y-3">
            <div 
              className="h-24 w-full bg-background rounded-lg border flex items-center justify-center"
              style={{ boxShadow: token.value }}
            >
              <span className="text-sm font-medium text-muted-foreground">
                {token.name}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-sm">{token.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {token.description}
              </p>
              <code className="text-xs text-muted-foreground mt-1 block">
                {token.value}
              </code>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-3">Usage Guidelines</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><strong>shadow-none:</strong> Use for elements that should appear flat or when removing default shadows</li>
          <li><strong>shadow-sm:</strong> Subtle elevation for form inputs and small interactive elements</li>
          <li><strong>shadow-md:</strong> Standard elevation for cards, panels, and content containers</li>
          <li><strong>shadow-lg:</strong> Higher elevation for dropdown menus, tooltips, and floating panels</li>
          <li><strong>shadow-xl:</strong> Strong elevation for modal dialogs and prominent overlays</li>
          <li><strong>shadow-2xl:</strong> Maximum elevation for elements that need to appear above all other content</li>
        </ul>
      </div>
    </div>
  ),
};

export const ContextualExamples: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Shadows in Context</h2>
        <p className="text-muted-foreground mb-6">
          See how different shadow levels work together to create visual hierarchy.
        </p>
      </div>
      
      <div className="bg-muted/20 p-8 rounded-lg">
        {/* Page content with shadow-sm */}
        <div className="bg-background p-6 rounded-lg shadow-sm mb-6">
          <h3 className="font-semibold mb-2">Page Content (shadow-sm)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Main content areas use subtle shadows to separate from the background.
          </p>
          
          {/* Card with shadow-md */}
          <div className="bg-background p-4 rounded-lg shadow-md mb-4">
            <h4 className="font-medium mb-2">Card Content (shadow-md)</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Cards use medium shadows to stand out from page content.
            </p>
            
            {/* Button that could trigger dropdown with shadow-lg */}
            <div className="relative inline-block">
              <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm shadow-sm">
                Actions ▼
              </button>
              
              {/* Dropdown with shadow-lg */}
              <div className="absolute top-full left-0 mt-1 bg-background border rounded-md shadow-lg p-2 min-w-[120px]">
                <div className="text-xs text-muted-foreground mb-2">(shadow-lg)</div>
                <div className="space-y-1">
                  <div className="px-2 py-1 hover:bg-muted rounded text-sm cursor-pointer">Edit</div>
                  <div className="px-2 py-1 hover:bg-muted rounded text-sm cursor-pointer">Delete</div>
                  <div className="px-2 py-1 hover:bg-muted rounded text-sm cursor-pointer">Share</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modal overlay with shadow-2xl */}
          <div className="bg-background border rounded-lg shadow-2xl p-4 max-w-sm">
            <h4 className="font-medium mb-2">Modal Dialog (shadow-2xl)</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Modals use the strongest shadows to appear above all other content.
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm">Confirm</button>
              <button className="px-3 py-1 border rounded text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};