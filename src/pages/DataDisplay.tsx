import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  CircleIcon,
  XCircleIcon,
  StopCircleIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tasks = [
  {
    id: 1,
    title: "Update user dashboard",
    status: "completed",
    priority: "high",
    assignee: {
      name: "Alex Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=70&crop=faces&fit=crop",
      initials: "AK"
    }
  },
  {
    id: 2,
    title: "Implement search functionality",
    status: "pending",
    priority: "medium",
    assignee: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=70&crop=faces&fit=crop",
      initials: "SC"
    }
  },
  {
    id: 3,
    title: "Fix navigation bug",
    status: "failed",
    priority: "high",
    assignee: {
      name: "Mike Ross",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=70&crop=faces&fit=crop",
      initials: "MR"
    }
  }
];

const stats = [
  {
    name: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up"
  },
  {
    name: "Active Users",
    value: "2,234",
    change: "+15.3%",
    trend: "up"
  },
  {
    name: "Bounce Rate",
    value: "24.57%",
    change: "-5.4%",
    trend: "down"
  }
];

function getStatusIcon(status: string) {
  switch (status) {
    case "completed":
      return <CheckCircle2Icon className="h-4 w-4 text-green-500" />;
    case "pending":
      return <StopCircleIcon className="h-4 w-4 text-yellow-500" />;
    case "failed":
      return <XCircleIcon className="h-4 w-4 text-red-500" />;
    default:
      return <CircleIcon className="h-4 w-4" />;
  }
}

function getTrendIcon(trend: string) {
  switch (trend) {
    case "up":
      return <ArrowUpIcon className="h-4 w-4 text-green-500" />;
    case "down":
      return <ArrowDownIcon className="h-4 w-4 text-red-500" />;
    default:
      return <ArrowRightIcon className="h-4 w-4" />;
  }
}

export function DataDisplay() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[1200px] space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Data Display Components</h1>
          <p className="text-muted-foreground">
            A collection of components for displaying data in various formats.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                {getTrendIcon(stat.trend)}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="table" className="space-y-4">
          <TabsList>
            <TabsTrigger value="table">Table View</TabsTrigger>
            <TabsTrigger value="cards">Card View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="table">
            <Card>
              <CardHeader>
                <CardTitle>Task List</CardTitle>
                <CardDescription>A list of tasks and their current status.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Task</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assignee</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tasks.map((task) => (
                      <TableRow key={task.id}>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(task.status)}
                            <span className="capitalize">{task.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={task.priority === "high" ? "destructive" : "secondary"}>
                            {task.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                              <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                            </Avatar>
                            <span>{task.assignee.name}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task) => (
                <Card key={task.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={task.priority === "high" ? "destructive" : "secondary"}>
                        {task.priority}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(task.status)}
                        <span className="capitalize text-sm">{task.status}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg mt-2">{task.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                        <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{task.assignee.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Collapsible Content</CardTitle>
            <CardDescription>Click the button to toggle content visibility.</CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible className="space-y-2">
              <div className="flex items-center justify-between space-x-4">
                <h4 className="text-sm font-semibold">
                  View Details
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronDownIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  Additional details and information can be shown here when expanded.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scrollable Content</CardTitle>
            <CardDescription>Content in a scrollable container with custom scrollbar.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4">
                {Array.from({ length: 50 }).map((_, i, a) => (
                  <div key={i} className="text-sm">
                    Scrollable item {a.length - i}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}