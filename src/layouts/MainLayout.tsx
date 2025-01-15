import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MobileNav } from "@/components/shared/MobileNav";
import { DesktopNav } from "@/components/shared/DesktopNav";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const path = window.location.pathname;

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <MobileNav />
            <a 
              href="/" 
              className={cn(
                "text-lg font-semibold",
                path === "/" && "text-primary"
              )}
            >
              UI Kit
            </a>
            <DesktopNav />
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with React + Vite. The source code is available on{" "}
            <a 
              href="https://github.com" 
              className="font-medium underline underline-offset-4 hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}