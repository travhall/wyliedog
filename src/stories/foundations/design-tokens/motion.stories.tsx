import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const meta: Meta = {
  title: 'Foundations/Design Tokens/Motion',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

const durationTokens = [
  { name: 'duration-fast', value: '150ms', description: 'Quick interactions and micro-animations' },
  { name: 'duration-normal', value: '250ms', description: 'Standard transitions and state changes' },
  { name: 'duration-slow', value: '350ms', description: 'Emphasized transitions and complex animations' },
];

const easingTokens = [
  { name: 'ease-default', value: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'General purpose easing for most transitions' },
  { name: 'ease-in', value: 'cubic-bezier(0.4, 0, 1, 1)', description: 'Elements entering the screen or becoming visible' },
  { name: 'ease-out', value: 'cubic-bezier(0, 0, 0.2, 1)', description: 'Elements exiting the screen or disappearing' },
  { name: 'ease-in-out', value: 'cubic-bezier(0.4, 0, 0.2, 1)', description: 'Smooth transitions for continuous motion' },
];

export const TransitionDurations: Story = {
  render: () => {
    const [activeDemo, setActiveDemo] = useState<string | null>(null);
    
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Transition Durations</h2>
          <p className="text-muted-foreground mb-6">
            Consistent timing creates predictable and comfortable user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {durationTokens.map((token) => (
            <div key={token.name} className="space-y-4">
              <div>
                <h3 className="font-medium text-sm mb-1">{token.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{token.description}</p>
                <code className="text-xs text-muted-foreground">{token.value}</code>
              </div>
              
              <div className="h-32 border rounded-lg p-4 flex items-center justify-center">
                <div 
                  className={`w-8 h-8 bg-primary rounded transform transition-transform ${
                    activeDemo === token.name ? 'translate-x-16' : 'translate-x-0'
                  }`}
                  style={{
                    transitionDuration: token.value,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => setActiveDemo(activeDemo === token.name ? null : token.name)}
              >
                {activeDemo === token.name ? 'Reset' : 'Animate'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const EasingFunctions: Story = {
  render: () => {
    const [activeEasing, setActiveEasing] = useState<string | null>(null);
    
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Easing Functions</h2>
          <p className="text-muted-foreground mb-6">
            Different easing curves create natural feeling motion that guides user attention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {easingTokens.map((token) => (
            <div key={token.name} className="space-y-4">
              <div>
                <h3 className="font-medium text-sm mb-1">{token.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{token.description}</p>
                <code className="text-xs text-muted-foreground">{token.value}</code>
              </div>
              
              <div className="h-32 border rounded-lg p-4 flex items-center justify-center">
                <div 
                  className={`w-8 h-8 bg-primary rounded transform transition-transform duration-300 ${
                    activeEasing === token.name ? 'translate-x-16' : 'translate-x-0'
                  }`}
                  style={{
                    transitionTimingFunction: token.value
                  }}
                />
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => setActiveEasing(activeEasing === token.name ? null : token.name)}
              >
                {activeEasing === token.name ? 'Reset' : 'Animate'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CommonPatterns: Story = {
  render: () => {
    const [showCard, setShowCard] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [buttonState, setButtonState] = useState<'normal' | 'loading'>('normal');
    
    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Common Animation Patterns</h2>
          <p className="text-muted-foreground mb-6">
            Examples of how motion tokens work together in real interface patterns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fade in/out pattern */}
          <div className="space-y-4">
            <h3 className="font-medium">Fade In/Out</h3>
            <p className="text-sm text-muted-foreground">duration-normal + ease-default</p>
            
            <div className="h-32 border rounded-lg p-4 flex items-center justify-center relative overflow-hidden">
              <div 
                className={`absolute inset-4 bg-primary/10 rounded transition-opacity duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  showCard ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="p-4">
                  <div className="text-sm font-medium">Card Content</div>
                  <div className="text-xs text-muted-foreground">Fading in smoothly</div>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => setShowCard(!showCard)}
            >
              Toggle Card
            </Button>
          </div>
          
          {/* Scale animation */}
          <div className="space-y-4">
            <h3 className="font-medium">Scale Animation</h3>
            <p className="text-sm text-muted-foreground">duration-fast + ease-out</p>
            
            <div className="h-32 border rounded-lg p-4 flex items-center justify-center">
              <div 
                className={`w-16 h-16 bg-primary rounded transition-transform duration-150 ease-[cubic-bezier(0,0,0.2,1)] ${
                  showModal ? 'scale-100' : 'scale-0'
                }`}
              />
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => setShowModal(!showModal)}
            >
              Toggle Modal
            </Button>
          </div>
          
          {/* Loading state */}
          <div className="space-y-4">
            <h3 className="font-medium">Loading State</h3>
            <p className="text-sm text-muted-foreground">duration-slow + ease-in-out</p>
            
            <div className="h-32 border rounded-lg p-4 flex items-center justify-center">
              <Button 
                variant={buttonState === 'loading' ? 'secondary' : 'default'}
                disabled={buttonState === 'loading'}
                className="transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                {buttonState === 'loading' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Loading...
                  </div>
                ) : (
                  'Click Me'
                )}
              </Button>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => {
                setButtonState('loading');
                setTimeout(() => setButtonState('normal'), 2000);
              }}
              disabled={buttonState === 'loading'}
            >
              Trigger Loading
            </Button>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-muted/20 rounded-lg">
          <h3 className="font-medium mb-2">Motion Guidelines</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Use <strong>fast</strong> durations for micro-interactions (hover, focus, click feedback)</li>
            <li>• Use <strong>normal</strong> durations for most state changes and content transitions</li>
            <li>• Use <strong>slow</strong> durations for complex animations and emphasized state changes</li>
            <li>• Choose <strong>ease-out</strong> for elements entering the view</li>
            <li>• Choose <strong>ease-in</strong> for elements exiting the view</li>
            <li>• Use <strong>ease-default</strong> for general purpose transitions</li>
          </ul>
        </div>
      </div>
    );
  },
};