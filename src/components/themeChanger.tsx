"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import useHasMounted from "@/hooks/useHasMounted";

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  return (
    <Button
      aria-label="Alterar tema"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-4 right-4 p-2 bg-slate-100 hover:bg-slate-900 shadow-lg dark:bg-slate-900 dark:hover:bg-slate-100"
    >
      {theme === "dark" && hasMounted ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-yellow-400" />
      )}
    </Button>
  );
}
