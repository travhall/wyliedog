import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col gap-4">
          <a href="/" className="text-lg font-medium">Home</a>
          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none">Components</h4>
            <div className="flex flex-col gap-2 pl-2">
              <a href="/forms" className="text-sm">Forms</a>
              <a href="/data-display" className="text-sm">Data Display</a>
              <a href="/feedback" className="text-sm">Feedback</a>
              <a href="/navigation" className="text-sm">Navigation</a>
              <a href="/advanced" className="text-sm">Advanced</a>
            </div>
          </div>
          <a href="/about" className="text-lg font-medium">About</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}