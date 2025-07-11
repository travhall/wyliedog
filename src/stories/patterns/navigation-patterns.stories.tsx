import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Home, 
  Users, 
  Settings, 
  HelpCircle, 
  Menu,
  X,
  Search,
  Bell,
  User,
  ChevronDown,
  Dashboard,
  FileText,
  BarChart3
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const meta: Meta = {
  title: 'Patterns/Navigation Patterns',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: Users, label: 'Users', href: '/users', badge: '12' },
  { icon: FileText, label: 'Documents', href: '/documents' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

export const AppNavigation: Story = {
  render: () => {
    const [activeItem, setActiveItem] = useState('Dashboard');
    
    return (
      <div className="h-screen flex">
        {/* Sidebar */}
        <div className="w-64 bg-background border-r flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-lg">Wylie Dog</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.label;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge variant={isActive ? 'secondary' : 'outline'} className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>
          
          {/* User Section */}
          <div className="p-4 border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">john@example.com</div>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="h-16 border-b bg-background flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">{activeItem}</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 w-80"
                />
              </div>
              
              {/* Notifications */}
              <Button variant="ghost" size="icon">
                <Bell className="h-4 w-4" />
              </Button>
              
              {/* User Avatar */}
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>
          
          {/* Page Content */}
          <main className="flex-1 p-6 bg-muted/20">
            <div className="bg-background rounded-lg border p-8 text-center">
              <h2 className="text-2xl font-bold mb-2">{activeItem} Content</h2>
              <p className="text-muted-foreground">
                This is where the {activeItem.toLowerCase()} content would be displayed.
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  },
};

export const MobileNavigation: Story = {
  render: () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Dashboard');
    
    return (
      <div className="h-screen bg-background">
        {/* Mobile Header */}
        <header className="h-16 border-b bg-background flex items-center justify-between px-4 lg:hidden">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">W</span>
              </div>
              <span className="font-semibold">Wylie Dog</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed left-0 top-0 h-full w-64 bg-background border-r shadow-lg">
              {/* Logo */}
              <div className="p-6 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">W</span>
                  </div>
                  <span className="font-semibold text-lg">Wylie Dog</span>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="p-4">
                <div className="space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.label;
                    
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          setActiveItem(item.label);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <Badge variant={isActive ? 'secondary' : 'outline'}>
                            {item.badge}
                          </Badge>
                        )}
                      </button>
                    );
                  })}
                </div>
              </nav>
              
              {/* User Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
                <div className="flex items-center gap-3 p-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">john@example.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Content */}
        <main className="p-4">
          <div className="bg-background rounded-lg border p-6 text-center">
            <h2 className="text-xl font-bold mb-2">{activeItem}</h2>
            <p className="text-muted-foreground text-sm">
              Mobile-optimized navigation with overlay sidebar
            </p>
          </div>
        </main>
        
        {/* Bottom Navigation (Alternative Mobile Pattern) */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-2 lg:hidden">
          <div className="flex justify-around">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;
              
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveItem(item.label)}
                  className={`flex flex-col items-center gap-1 p-2 rounded transition-colors ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <div className="relative">
                    <Icon className="h-5 w-5" />
                    {item.badge && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-2 -right-2 h-4 w-4 p-0 text-xs flex items-center justify-center"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};