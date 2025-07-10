import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Bell, Download, Plus, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const meta: Meta = {
  title: 'Templates & Examples/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const StatCard = ({ title, value, change, icon: Icon }: {
  title: string;
  value: string;
  change: string;
  icon: any;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">
        {change} from last month
      </p>
    </CardContent>
  </Card>
);

export const AnalyticsDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your business.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          icon={DollarSign}
        />
        <StatCard
          title="Active Users"
          value="2,350"
          change="+180.1%"
          icon={Users}
        />
        <StatCard
          title="Conversion Rate"
          value="12.5%"
          change="+19%"
          icon={Activity}
        />
        <StatCard
          title="Growth"
          value="+12.3%"
          change="+7%"
          icon={TrendingUp}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>
            Monthly revenue for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart component would go here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};