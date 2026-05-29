import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "cehpoint-install-dismissed";

/**
 * Lightweight "Add to Home Screen" prompt. Appears only when the browser
 * fires `beforeinstallprompt` (Android/desktop Chromium) and the user hasn't
 * dismissed it. iOS Safari has no such event, so nothing is shown there.
 */
export default function InstallPrompt() {
  const { t } = useTranslation();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Already installed (standalone) — never show.
    if (window.matchMedia("(display-mode: standalone)").matches) return;
    try {
      if (localStorage.getItem(DISMISS_KEY) === "1") return;
    } catch { /* noop */ }

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const onInstalled = () => {
      setVisible(false);
      setDeferred(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch { /* noop */ }
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-3 z-[60] bottom-[calc(5.25rem+env(safe-area-inset-bottom))] lg:bottom-[calc(1rem+env(safe-area-inset-bottom))] mx-auto max-w-md glass-intense rounded-2xl border border-border shadow-2xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4"
      role="dialog"
      aria-label={t("pwa.installTitle")}
    >
      <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary">
        <Download className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-sm leading-tight">{t("pwa.installTitle")}</p>
        <p className="text-xs text-muted-foreground leading-snug">{t("pwa.installBody")}</p>
      </div>
      <button
        onClick={install}
        className="shrink-0 btn-primary rounded-full px-4 py-2 text-sm font-semibold text-white"
      >
        {t("pwa.installCta")}
      </button>
      <button
        onClick={dismiss}
        aria-label={t("common.closeMenu")}
        className="shrink-0 text-muted-foreground hover:text-foreground p-1 rounded-full transition-colors"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
