import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const path = window.location.pathname;

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={cn(
              path.startsWith("/forms") || 
              path.startsWith("/data-display") || 
              path.startsWith("/feedback") || 
              path.startsWith("/navigation") || 
              path.startsWith("/advanced") 
                ? "text-primary"
                : ""
            )}
          >
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
              <NavigationMenuLink asChild>
                <a 
                  href="/forms" 
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    path === "/forms" && "bg-accent"
                  )}
                >
                  <div className="text-sm font-medium leading-none">Forms</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Input components and form validation examples.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a 
                  href="/data-display" 
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    path === "/data-display" && "bg-accent"
                  )}
                >
                  <div className="text-sm font-medium leading-none">Data Display</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Tables, cards, and data visualization components.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a 
                  href="/feedback" 
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    path === "/feedback" && "bg-accent"
                  )}
                >
                  <div className="text-sm font-medium leading-none">Feedback</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Alerts, toasts, and progress indicators.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a 
                  href="/navigation" 
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    path === "/navigation" && "bg-accent"
                  )}
                >
                  <div className="text-sm font-medium leading-none">Navigation</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Breadcrumbs, command menu, and menu bar components.
                  </p>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a 
                  href="/advanced" 
                  className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    path === "/advanced" && "bg-accent"
                  )}
                >
                  <div className="text-sm font-medium leading-none">Advanced</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                    Calendar, hover card, and carousel components.
                  </p>
                </a>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              path === "/theme" && "bg-accent/50"
            )} 
            href="/theme"
          >
            Theme
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
              path === "/about" && "bg-accent/50"
            )} 
            href="/about"
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}