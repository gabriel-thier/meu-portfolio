import { Link } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="container py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer">
              Portfolio
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            <a 
              href="#work" 
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
