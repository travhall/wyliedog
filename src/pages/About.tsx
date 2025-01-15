import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Brush, Code, Github, Heart, Lightbulb, Users } from "lucide-react";

export function About() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?&w=128&h=128&q=70&crop=faces&fit=crop",
      initials: "SC",
    },
    {
      name: "Alex Rivera",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&w=128&h=128&q=70&crop=faces&fit=crop",
      initials: "AR",
    },
    {
      name: "Maya Patel",
      role: "UX Researcher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?&w=128&h=128&q=70&crop=faces&fit=crop",
      initials: "MP",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Built with Care",
      description: "Every component is crafted with attention to detail and love for great user experiences.",
    },
    {
      icon: Code,
      title: "Developer First",
      description: "Designed with developers in mind, offering a great development experience out of the box.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Developed in the open, shaped by the community's needs and contributions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving with the latest web technologies and design patterns.",
    },
    {
      icon: Brush,
      title: "Design Excellence",
      description: "Focused on creating beautiful, consistent, and accessible interfaces.",
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Freely available for everyone to use, modify, and contribute to.",
    },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px] space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our UI Kit</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We're building the future of web development with beautiful, accessible, and customizable components.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>Building better interfaces for everyone</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in creating beautiful, accessible, and performant user interfaces that help developers build better applications faster. Our components are built with React, Radix UI, and Tailwind CSS to ensure the best developer experience while maintaining high standards of accessibility and customization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
              <CardDescription>Built with modern tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Radix UI</Badge>
                <Badge variant="secondary">Lucide Icons</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>The principles that guide our work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meet the Team</CardTitle>
            <CardDescription>The people behind the project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-8">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center gap-2">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}