import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="sticker group inline-flex h-11 w-11 items-center justify-center border-2 border-foreground bg-background text-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-transform group-hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
};
