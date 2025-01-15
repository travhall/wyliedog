import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code2, Palette, Shield, Sparkles, Zap } from "lucide-react";

export function Home() {
  const features = [
    {
      title: "Accessible",
      description: "ARIA-compliant components following WAI-ARIA guidelines.",
      icon: Shield,
    },
    {
      title: "Customizable",
      description: "Tailwind CSS powered design tokens and theme variables.",
      icon: Palette,
    },
    {
      title: "Developer Experience",
      description: "TypeScript support with detailed props documentation.",
      icon: Code2,
    },
    {
      title: "Fast",
      description: "Optimized for performance with zero runtime overhead.",
      icon: Zap,
    },
    {
      title: "Interactive",
      description: "Rich interactions and animations out of the box.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-4">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
            Beautiful, accessible components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            A professionally designed component library that you can copy and paste into your apps.
            Accessible. Customizable. Open Source.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Components
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32 border-t">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Start Building Today
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore our collection of components and start building beautiful applications.
            Every component is designed to work seamlessly together.
          </p>
          <Button size="lg" className="mt-4">
            Browse Components
          </Button>
        </div>
      </section>
    </>
  );
}