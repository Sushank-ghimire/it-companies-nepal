"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  ThemeAnimationType,
  useModeAnimation,
} from "react-theme-switch-animation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.CIRCLE,
  });

  const handleThemeChange = (nextTheme: "light" | "dark" | "system") => {
    if (nextTheme === "system") {
      setTheme("system");
      return;
    }

    if (theme !== nextTheme) {
      if (isDarkMode) setTheme("light");
      else setTheme("dark");
      toggleSwitchTheme();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          ref={ref}
          variant="ghost"
          size="icon"
          className="size-9 rounded-full text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label="Change theme"
        >
          <Sun className="size-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <Moon className="absolute size-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          onClick={() => handleThemeChange("light")}
          className="cursor-pointer"
        >
          <Sun className="mr-2 size-4" />
          <span>Light</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => handleThemeChange("dark")}
          className="cursor-pointer"
        >
          <Moon className="mr-2 size-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
