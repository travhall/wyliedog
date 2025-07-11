import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Calendar, 
  Link as LinkIcon, 
  Mail, 
  Phone,
  Edit,
  Share,
  MoreHorizontal,
  Star,
  Users,
  Award,
  TrendingUp,
  Activity,
  GitBranch,
  FileText
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const meta: Meta = {
  title: 'Templates/Profile Page',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const activityData = [
  { id: 1, action: 'Updated project "Design System"', time: '2 hours ago', type: 'update' },
  { id: 2, action: 'Completed task "Component Documentation"', time: '4 hours ago', type: 'complete' },
  { id: 3, action: 'Started working on "User Authentication"', time: '1 day ago', type: 'start' },
  { id: 4, action: 'Joined team "Frontend Development"', time: '3 days ago', type: 'join' },
  { id: 5, action: 'Created new repository "React Components"', time: '1 week ago', type: 'create' },
];

const projectsData = [
  { 
    id: 1, 
    name: 'Design System', 
    description: 'A comprehensive design system for React applications',
    status: 'active',
    progress: 85,
    team: 4,
    lastUpdate: '2 hours ago'
  },
  {
    id: 2,
    name: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    status: 'completed',
    progress: 100,
    team: 6,
    lastUpdate: '1 week ago'
  },
  {
    id: 3,
    name: 'Mobile App UI',
    description: 'Cross-platform mobile application interface',
    status: 'paused',
    progress: 45,
    team: 3,
    lastUpdate: '2 weeks ago'
  },
];

const skillsData = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'UI/UX Design', level: 78 },
  { name: 'Node.js', level: 70 },
  { name: 'GraphQL', level: 65 },
];

export const ProfilePageTemplate: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isFollowing, setIsFollowing] = useState(false);
    
    return (
      <div className="min-h-screen bg-muted/20">
        {/* Cover & Profile Header */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 h-48">
          <div className="max-w-6xl mx-auto px-6 h-full flex items-end pb-6">
            <div className="flex items-end gap-6">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <Badge variant="secondary">Pro Member</Badge>
                </div>
                <p className="text-lg text-muted-foreground mb-2">
                  Senior Product Designer & Frontend Developer
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined March 2022
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    johndoe.design
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 pb-2">
                <Button 
                  variant={isFollowing ? 'outline' : 'default'}
                  onClick={() => setIsFollowing(!isFollowing)}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
                <Button variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Share className="mr-2 h-4 w-4" />
                      Share Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      Report User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-background border-b">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2.4k</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">892</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(48 reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Passionate product designer and frontend developer with 8+ years of experience 
                    creating beautiful, functional user experiences. Love working with React, TypeScript, 
                    and design systems.
                  </p>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>john@example.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <LinkIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-primary">johndoe.design</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillsData.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-yellow-500" />
                      <div>
                        <div className="font-medium text-sm">Top Contributor</div>
                        <div className="text-xs text-muted-foreground">Earned 2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-green-500" />
                      <div>
                        <div className="font-medium text-sm">Rising Star</div>
                        <div className="text-xs text-muted-foreground">Earned 2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-8 w-8 text-blue-500" />
                      <div>
                        <div className="font-medium text-sm">Team Player</div>
                        <div className="text-xs text-muted-foreground">Earned 2023</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  {/* Recent Projects */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Projects</CardTitle>
                      <CardDescription>Latest work and contributions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {projectsData.slice(0, 2).map((project) => (
                          <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-medium">{project.name}</h4>
                                <Badge 
                                  variant={project.status === 'active' ? 'default' : 
                                          project.status === 'completed' ? 'secondary' : 'outline'}
                                >
                                  {project.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {project.description}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span>{project.progress}% complete</span>
                                <span>{project.team} team members</span>
                                <span>Updated {project.lastUpdate}</span>
                              </div>
                            </div>
                            <Progress value={project.progress} className="w-20 ml-4" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Activity Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Activity Summary</CardTitle>
                      <CardDescription>Recent activity and contributions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {activityData.slice(0, 3).map((activity) => (
                          <div key={activity.id} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                              <Activity className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Projects Tab */}
                <TabsContent value="projects" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">All Projects</h3>
                    <Button size="sm">
                      <GitBranch className="h-4 w-4 mr-2" />
                      New Project
                    </Button>
                  </div>
                  
                  <div className="grid gap-4">
                    {projectsData.map((project) => (
                      <Card key={project.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-medium">{project.name}</h4>
                                <Badge 
                                  variant={project.status === 'active' ? 'default' : 
                                          project.status === 'completed' ? 'secondary' : 'outline'}
                                >
                                  {project.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {project.description}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} />
                          </div>
                          
                          <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {project.team} members
                            </div>
                            <span>Updated {project.lastUpdate}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                {/* Activity Tab */}
                <TabsContent value="activity" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Activity Feed</h3>
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {activityData.map((activity, index) => (
                          <div key={activity.id} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Activity className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm">{activity.action}</p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                            {index < activityData.length - 1 && (
                              <div className="absolute left-10 mt-8 w-px h-6 bg-border" style={{ marginLeft: '-16px' }} />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  },
};