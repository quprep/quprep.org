import { Github, BookOpen, Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
  { label: "Platforms", href: "#platforms" },
  { label: "Quickstart", href: "#quickstart" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold gradient-text">
          QuPrep
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-border">
            <a
              href="https://docs.quprep.org"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Documentation"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/quprep/quprep"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 text-muted-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="text-muted-foreground p-1.5" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 pt-2 border-t border-border mt-1">
            <a href="https://docs.quprep.org" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground">Docs</a>
            <a href="https://github.com/quprep/quprep" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
