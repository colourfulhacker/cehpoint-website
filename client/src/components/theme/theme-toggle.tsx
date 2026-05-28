import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export default function ThemeToggle({ className }: Props) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const Icon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`rounded-full border border-border/40 hover:bg-foreground/5 ${className ?? ""}`}
          aria-label={`Switch theme. Current: ${theme}`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        <DropdownMenuItem onClick={() => setTheme("light")} aria-current={theme === "light" ? "true" : undefined}>
          <Sun className="h-4 w-4 mr-2" aria-hidden="true" />
          Light
          {theme === "light" && <span className="ml-auto text-xs text-primary">●</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} aria-current={theme === "dark" ? "true" : undefined}>
          <Moon className="h-4 w-4 mr-2" aria-hidden="true" />
          Dark
          {theme === "dark" && <span className="ml-auto text-xs text-primary">●</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} aria-current={theme === "system" ? "true" : undefined}>
          <Monitor className="h-4 w-4 mr-2" aria-hidden="true" />
          System
          {theme === "system" && <span className="ml-auto text-xs text-primary">●</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
