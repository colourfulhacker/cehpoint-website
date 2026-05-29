import { Link, useLocation } from "wouter";
import { Home, LayoutGrid, Sparkles, Newspaper, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Tab {
  href: string;
  labelKey: string;
  icon: typeof Home;
  /** match the active state for this tab against the current path */
  match: (path: string) => boolean;
}

const TABS: Tab[] = [
  { href: "/", labelKey: "tabBar.home", icon: Home, match: (p) => p === "/" },
  { href: "/services", labelKey: "tabBar.services", icon: LayoutGrid, match: (p) => p.startsWith("/services") },
  { href: "/ai-solutions", labelKey: "tabBar.ai", icon: Sparkles, match: (p) => p.startsWith("/ai") },
  { href: "/insights", labelKey: "tabBar.insights", icon: Newspaper, match: (p) => p.startsWith("/insights") },
  { href: "/contact", labelKey: "tabBar.contact", icon: Phone, match: (p) => p.startsWith("/contact") },
];

/**
 * App-style bottom tab bar. Shown only on mobile/tablet (lg:hidden) — desktop
 * keeps the floating glass navbar. Respects the device safe-area inset so it
 * sits above the home indicator in installed/standalone mode.
 */
export default function MobileTabBar() {
  const [location] = useLocation();
  const { t } = useTranslation();

  return (
    <nav
      className="mobile-tab-bar lg:hidden fixed bottom-0 inset-x-0 z-40 glass-intense border-t border-border/60"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="flex items-stretch justify-around px-1">
        {TABS.map((tab) => {
          const active = tab.match(location);
          const Icon = tab.icon;
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 transition-colors active:scale-95 ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className={`flex items-center justify-center h-7 w-12 rounded-full transition-colors ${active ? "bg-primary/15" : ""}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={active ? 2.5 : 2} />
                </span>
                <span className="text-[10px] font-medium tracking-tight">{t(tab.labelKey)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
