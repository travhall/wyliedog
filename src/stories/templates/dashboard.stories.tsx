import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
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

const RecentActivity = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
      <CardDescription>Latest updates from your team</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        { user: 'Alice Johnson', action: 'completed task "Update homepage"', time: '2 minutes ago', avatar: 'AJ' },
        { user: 'Bob Smith', action: 'added new customer "Acme Corp"', time: '5 minutes ago', avatar: 'BS' },
        { user: 'Carol Williams', action: 'generated monthly report', time: '12 minutes ago', avatar: 'CW' },
        { user: 'David Brown', action: 'updated project timeline', time: '1 hour ago', avatar: 'DB' },
      ].map((activity, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{activity.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium">{activity.user}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </CardContent>
  </Card>
);

const ProjectProgress = () => (
  <Card>
    <CardHeader>
      <CardTitle>Project Progress</CardTitle>
      <CardDescription>Current status of active projects</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {[
        { name: 'Website Redesign', progress: 75, status: 'On Track' },
        { name: 'Mobile App', progress: 45, status: 'Behind' },
        { name: 'API Integration', progress: 90, status: 'Ahead' },
        { name: 'Database Migration', progress: 20, status: 'On Track' },
      ].map((project, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">{project.name}</p>
              <Badge 
                variant={project.status === 'On Track' ? 'default' : project.status === 'Ahead' ? 'secondary' : 'destructive'}
                className="text-xs"
              >
                {project.status}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">{project.progress}%</div>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
      ))}
    </CardContent>
  </Card>
);

export const AnalyticsDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
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

      {/* Stats Grid */}
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts Section */}
        <div className="lg:col-span-2 space-y-6">
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
          
          <ProjectProgress />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <RecentActivity />
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Create New Project
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Invite Team Member
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
};

export const ProjectDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Project Dashboard</h1>
            <p className="text-muted-foreground">Manage and track your team's projects</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Active Projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Team Members</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Tasks Due</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">Completion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Website Redesign', status: 'In Progress', progress: 75, team: 5, dueDate: '2024-01-15' },
            { name: 'Mobile App Development', status: 'Planning', progress: 25, team: 3, dueDate: '2024-02-28' },
            { name: 'API Documentation', status: 'Review', progress: 90, team: 2, dueDate: '2024-01-10' },
            { name: 'Database Migration', status: 'In Progress', progress: 45, team: 4, dueDate: '2024-01-30' },
            { name: 'User Testing', status: 'Completed', progress: 100, team: 6, dueDate: '2023-12-20' },
            { name: 'Security Audit', status: 'Planning', progress: 10, team: 2, dueDate: '2024-03-15' },
          ].map((project, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge 
                    variant={
                      project.status === 'Completed' ? 'default' :
                      project.status === 'In Progress' ? 'secondary' :
                      project.status === 'Review' ? 'outline' : 'secondary'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>Due: {project.dueDate}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.team} members</span>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
};