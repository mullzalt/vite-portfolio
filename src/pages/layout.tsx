import { Footer } from "@/components/footer";
import { Outlet } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import { Link as NavLink, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";

const DURATION = 500;

function ScrollLink({ label = "", to = "" }) {
  return (
    <Link
      activeClass="text-primary underline decoration-2 underline-offset-2 decoration-primary"
      className="text-muted-foreground text-lg cursor-pointer hover:text-primary/80 hover:text-bold"
      to={to}
      spy
      smooth
      duration={DURATION}
    >
      {label}
    </Link>
  );
}

export function Layout({ isRoot = true }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="relative min-h-screen flex flex-col">
        <div className="sticky top-0 bg-background/80 backdrop-blur-lg z-50 w-full px-8 flex items-center gap-4 py-2">
          {isRoot ? (
            <button
              onClick={() => {
                animateScroll.scrollToTop();
              }}
              className="hidden sm:block"
            >
              <img src={logo} className="w-[64px]" />
            </button>
          ) : (
            <NavLink to="/" className="hidden sm:block">
              <img src={logo} className="w-[64px]" />
            </NavLink>
          )}
          {isRoot ? (
            <div className="flex gap-4 items-center grow sm:justify-center">
              <ScrollLink label="Projects" to="projects" />
              <ScrollLink label="About Me" to="abouts" />
              <ScrollLink label="Contact" to="contact" />
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex grow justify-end">
            <ModeToggle />
          </div>
        </div>
        <div className="container py-8 gap-16 flex flex-col relative">
          <Outlet />
        </div>
        <Footer />
      </main>
    </ThemeProvider>
  );
}
