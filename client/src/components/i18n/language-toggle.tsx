import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SUPPORTED_LANGUAGES, type LanguageCode } from "@/i18n";

interface Props {
  className?: string;
}

export default function LanguageToggle({ className }: Props) {
  const { i18n, t } = useTranslation();
  const active = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0] as LanguageCode;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`rounded-full border border-border/40 hover:bg-foreground/5 ${className ?? ""}`}
          aria-label={t("languageToggle.switchLabel")}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[170px]">
        {SUPPORTED_LANGUAGES.map((lang) => {
          const isActive = active === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              aria-current={isActive ? "true" : undefined}
              className="cursor-pointer"
            >
              <span className="flex-1">{lang.nativeLabel}</span>
              {isActive && <Check className="h-3.5 w-3.5 ml-2 text-primary" aria-hidden="true" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
