import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Motion',
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

const durations = [
  { name: 'Fast', value: '150ms', description: 'Quick interactions and micro-animations' },
  { name: 'Normal', value: '250ms', description: 'Standard transitions and state changes' },
  { name: 'Slow', value: '350ms', description: 'Emphasized transitions and complex animations' },
];

const easings = [
  { name: 'Default', value: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'General purpose easing' },
  { name: 'In', value: 'cubic-bezier(0.4, 0, 1, 1)', description: 'Elements entering the screen' },
  { name: 'Out', value: 'cubic-bezier(0, 0, 0.2, 1)', description: 'Elements exiting the screen' },
  { name: 'In-Out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth bidirectional transitions' },
];

export const MotionSystem: Story = {
  render: () => {
    const [isAnimated, setIsAnimated] = useState(false);
    
    return (
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Motion & Transitions</h2>
          <p className="text-muted-foreground mb-8">
            Consistent motion creates a cohesive experience and provides visual feedback for user interactions.
          </p>
        </div>
        
        {/* Duration Scale */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Duration Scale</h3>
          <div className="space-y-4">
            {durations.map((duration) => (
              <div key={duration.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{duration.name}</h4>
                  <p className="text-sm text-muted-foreground">{duration.description}</p>
                </div>
                <code className="text-sm bg-muted px-2 py-1 rounded">{duration.value}</code>
              </div>
            ))}
          </div>
        </div>
        
        {/* Easing Functions */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Easing Functions</h3>
          <div className="space-y-4">
            {easings.map((easing) => (
              <div key={easing.name} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{easing.name}</h4>
                  <p className="text-sm text-muted-foreground">{easing.description}</p>
                </div>
                <code className="text-sm bg-muted px-2 py-1 rounded">{easing.value}</code>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animation Example */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Animation Example</h3>
          <div className="flex items-center gap-4">
            <Button onClick={() => setIsAnimated(!isAnimated)}>
              Toggle Animation
            </Button>
            <div 
              className={`w-16 h-16 bg-primary rounded-lg transition-all duration-300 ease-in-out ${
                isAnimated ? 'translate-x-20 rotate-45 scale-110' : 'translate-x-0 rotate-0 scale-100'
              }`}
            />
          </div>
        </div>
        
        {/* Principles */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Motion Principles</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Purposeful:</strong> Every animation should have a clear function</li>
            <li>• <strong>Responsive:</strong> Provide immediate feedback to user actions</li>
            <li>• <strong>Natural:</strong> Follow real-world physics and expectations</li>
            <li>• <strong>Consistent:</strong> Use the same duration and easing for similar interactions</li>
            <li>• <strong>Respectful:</strong> Honor user preferences for reduced motion</li>
          </ul>
        </div>
      </div>
    );
  },
};