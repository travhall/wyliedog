import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Feedback() {
  const { toast } = useToast();
  const [progress, setProgress] = useState(13);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "Pedro Duarte",
    username: "@peduarte"
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px] space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Feedback Components</h1>
          <p className="text-muted-foreground">
            Components for displaying feedback and status information to users.
          </p>
        </div>
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>
                Display important messages and notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  You can add components to your app using the cli.
                </AlertDescription>
              </Alert>
              
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>

              <Alert variant="default" className="border-green-500">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>

              <Alert variant="default" className="border-blue-500">
                <Info className="h-4 w-4 text-blue-500" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  A new software update is available.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Slide-out Sheet</CardTitle>
              <CardDescription>
                Display content in a slide-out panel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input 
                        id="name" 
                        value={formData.name} 
                        onChange={handleInputChange}
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input 
                        id="username" 
                        value={formData.username} 
                        onChange={handleInputChange}
                        className="col-span-3" 
                      />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button type="submit">Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
              <CardDescription>
                Show the progress of tasks and operations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="w-full" />
                <Button
                  onClick={() => {
                    setProgress(progress >= 100 ? 0 : progress + 10);
                  }}
                  className="mt-2"
                >
                  Increment Progress
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Determinate Progress</h3>
                <div className="space-y-2">
                  <Progress value={33} className="w-full" />
                  <Progress value={66} className="w-full" />
                  <Progress value={100} className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading States</CardTitle>
              <CardDescription>
                Indicate loading states and content placeholders.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {loading ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                    <Skeleton className="h-[125px] w-full" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary" />
                      <div className="space-y-2">
                        <div className="h-4 w-[250px] bg-primary" />
                        <div className="h-4 w-[200px] bg-primary" />
                      </div>
                    </div>
                    <div className="h-[125px] w-full bg-primary rounded-md" />
                  </div>
                )}
                <Button onClick={() => setLoading(!loading)}>
                  Toggle Loading State
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Toast Notifications</CardTitle>
              <CardDescription>
                Show temporary notifications and messages.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Success",
                      description: "Your action was completed successfully.",
                      className: "bg-green-500 text-white border-none",
                    });
                  }}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Success Toast
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Error",
                      description: "There was a problem with your request.",
                      variant: "destructive",
                    });
                  }}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Error Toast
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Information",
                      description: "Here's some information you should know.",
                      className: "bg-blue-500 text-white border-none",
                    });
                  }}
                >
                  <Info className="mr-2 h-4 w-4" />
                  Info Toast
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Scheduled: Catch up",
                      description: "Friday, February 10, 2024 at 5:57 PM",
                    });
                  }}
                >
                  <Terminal className="mr-2 h-4 w-4" />
                  Default Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}