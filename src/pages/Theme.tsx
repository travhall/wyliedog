import { useTheme } from "@/components/theme-provider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ColorSwatch({ className, label, value }: { className: string; label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <div className={cn("h-16 w-full rounded-md", className)} />
      <div className="text-sm">
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

export function Theme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[800px] space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Theme System</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            Current theme: <Badge variant="secondary">{theme}</Badge>
          </div>
        </div>

        <Tabs defaultValue="colors" className="space-y-8">
          <TabsList>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="radius">Radius</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Brand Colors</CardTitle>
                <CardDescription>Primary and secondary brand color palettes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Primary Brand</h3>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((weight) => (
                      <ColorSwatch 
                        key={weight}
                        className={`bg-brand-primary-${weight}`} 
                        label={weight.toString()} 
                        value={`hsl(var(--brand-primary-${weight}))`} 
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Secondary Brand</h3>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((weight) => (
                      <ColorSwatch 
                        key={weight}
                        className={`bg-brand-secondary-${weight}`} 
                        label={weight.toString()} 
                        value={`hsl(var(--brand-secondary-${weight}))`} 
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semantic Colors</CardTitle>
                <CardDescription>Contextual colors for different UI elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <ColorSwatch className="bg-background" label="Background" value="var(--background)" />
                  <ColorSwatch className="bg-foreground" label="Foreground" value="var(--foreground)" />
                  <ColorSwatch className="bg-card" label="Card" value="var(--card)" />
                  <ColorSwatch className="bg-card-foreground" label="Card Foreground" value="var(--card-foreground)" />
                  <ColorSwatch className="bg-muted" label="Muted" value="var(--muted)" />
                  <ColorSwatch className="bg-muted-foreground" label="Muted Foreground" value="var(--muted-foreground)" />
                  <ColorSwatch className="bg-accent" label="Accent" value="var(--accent)" />
                  <ColorSwatch className="bg-accent-foreground" label="Accent Foreground" value="var(--accent-foreground)" />
                  <ColorSwatch className="bg-destructive" label="Destructive" value="var(--destructive)" />
                  <ColorSwatch className="bg-destructive-foreground" label="Destructive Foreground" value="var(--destructive-foreground)" />
                  <ColorSwatch className="bg-border" label="Border" value="var(--border)" />
                  <ColorSwatch className="bg-input" label="Input" value="var(--input)" />
                  <ColorSwatch className="bg-ring" label="Ring" value="var(--ring)" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dark Mode</CardTitle>
                <CardDescription>Toggle between light and dark themes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button 
                    variant={theme === 'light' ? 'default' : 'outline'} 
                    onClick={() => setTheme('light')}
                  >
                    Light
                  </Button>
                  <Button 
                    variant={theme === 'dark' ? 'default' : 'outline'} 
                    onClick={() => setTheme('dark')}
                  >
                    Dark
                  </Button>
                  <Button 
                    variant={theme === 'system' ? 'default' : 'outline'} 
                    onClick={() => setTheme('system')}
                  >
                    System
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Headings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Heading 1
                  </h1>
                  <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                    Heading 2
                  </h2>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Heading 3
                  </h3>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Heading 4
                  </h4>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paragraphs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The king, seeing how much happier his subjects were, realized the error of his ways and promised to rule with justice.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a small paragraph with muted text.
                </p>
                <p className="text-xs text-muted-foreground">
                  This is extra small text often used for captions or helper text.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lists</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>

                <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>Consistent spacing values for margins and padding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[0.5, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((space) => (
                    <div key={space} className="flex items-center gap-4">
                      <div className="w-16">
                        <span className="text-sm font-medium">{space}</span>
                      </div>
                      <div className="flex-1">
                        <div 
                          className="h-4 bg-primary rounded" 
                          style={{ width: `${space}rem` }} 
                        />
                      </div>
                      <div className="w-20">
                        <span className="text-sm text-muted-foreground">{space}rem</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="radius" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
                <CardDescription>Border radius values for different components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "sm", value: "calc(var(--radius) - 4px)" },
                    { name: "md", value: "calc(var(--radius) - 2px)" },
                    { name: "lg", value: "var(--radius)" },
                    { name: "full", value: "9999px" },
                  ].map(({ name, value }) => (
                    <div key={name} className="space-y-3">
                      <div 
                        className="h-24 w-24 bg-primary" 
                        style={{ borderRadius: value }}
                      />
                      <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-muted-foreground">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}