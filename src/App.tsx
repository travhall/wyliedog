import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Forms } from "@/pages/Forms";
import { DataDisplay } from "@/pages/DataDisplay";
import { Feedback } from "@/pages/Feedback";
import { Navigation } from "@/pages/Navigation";
import { Advanced } from "@/pages/Advanced";
import { Theme } from "@/pages/Theme";
import { Toaster } from "@/components/ui/toaster";

export function App() {
  const path = window.location.pathname;

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <MainLayout>
        {path === "/" && <Home />}
        {path === "/about" && <About />}
        {path === "/forms" && <Forms />}
        {path === "/data-display" && <DataDisplay />}
        {path === "/feedback" && <Feedback />}
        {path === "/navigation" && <Navigation />}
        {path === "/advanced" && <Advanced />}
        {path === "/theme" && <Theme />}
      </MainLayout>
      <Toaster />
    </ThemeProvider>
  );
}