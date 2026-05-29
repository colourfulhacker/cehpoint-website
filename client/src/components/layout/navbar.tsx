
import { Link, useLocation } from "wouter";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Bot } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme/theme-toggle";
import LanguageToggle from "@/components/i18n/language-toggle";
import { useTranslation } from "react-i18next";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  children?: {
    name: string;
    href: string;
    external?: boolean;
  }[];
}

export default function Navbar() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Body scroll lock + close on route change for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        const dropdown = dropdownRefs.current[openDropdown];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Close mobile menu when escape is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const navigation: NavItem[] = [
    {
      name: t("nav.services"),
      href: "/services",
      children: [
        { name: t("nav.allServices"), href: "/services" },
        { name: t("nav.freeSecurityScheme"), href: "/security-scheme" },
        { name: t("nav.itServices"), href: "/services#featured-services" },
        { name: t("nav.cyberSecurity"), href: "/services/cyber-security" },
        { name: t("nav.cyberInvestigation"), href: "/services/cyber-crime-investigation" },
        { name: t("nav.ecommerce"), href: "/services/ecommerce" },
        { name: t("nav.edutech"), href: "/services/edutech" },
        { name: t("nav.fintech"), href: "/services/fintech" },
        { name: t("nav.ruralDigitalization"), href: "/services/rural-digitalization" },
        { name: t("nav.gameDevelopment"), href: "/services/game-development" },
        { name: t("nav.businessAppCatalog"), href: "/services/business-app-catalog" },
      ]
    },
    { name: t("nav.aiSolutions"), href: "/ai-solutions" },
    { name: t("nav.investmentDesk"), href: "/cost-estimator" },
    { name: t("nav.training"), href: "/training" },
    {
      name: t("nav.company"),
      href: "#",
      children: [
        { name: t("nav.aboutUs"), href: "/about" },
        { name: t("nav.demoProcess"), href: "/demo-delivery" },
        { name: t("nav.companyProfile"), href: "/company-profile" },
        { name: t("nav.incubation"), href: "/incubation" },
        { name: t("nav.leadershipSearch"), href: "/leadership-search" },
        { name: t("nav.investorConnect"), href: "/investor-connect" },
        { name: t("nav.portfolio"), href: "https://portfolios.cehpoint.co.in/", external: true },
      ]
    },
    {
      name: t("nav.portals"),
      href: "#",
      children: [
        { name: t("nav.projectsPortal"), href: "https://projects.cehpoint.co.in/", external: true },
        { name: t("nav.developerDocs"), href: "https://developer-document.cehpoint.co.in/", external: true },
        { name: t("nav.proposalMaker"), href: "https://proposal-maker.cehpoint.co.in/", external: true },
        { name: t("nav.ccie"), href: "https://ccie.cehpoint.co.in/", external: true },
        { name: t("nav.cpis"), href: "https://cpis.cehpoint.co.in/", external: true },
        { name: t("nav.outreachAi"), href: "https://outreach-ai.cehpoint.co.in/", external: true },
        { name: t("nav.outreachPortal"), href: "https://outreach.cehpoint.co.in/", external: true },
        { name: t("nav.partnerNetwork"), href: "/partner-network" },
      ]
    },
    { name: t("nav.insights"), href: "/insights" },
    { name: t("nav.tenders"), href: "/tenders" },
    {
      name: t("nav.careers"),
      href: "/careers",
      children: [
        { name: t("nav.fullTimeJobs"), href: "/careers" },
        { name: t("nav.internshipProgram"), href: "/interns" },
        { name: t("nav.campusAmbassador"), href: "https://cehpoint-campus-ambassador-portal.cehpoint.co.in/", external: true },
        { name: t("nav.workPortal"), href: "https://works.cehpoint.co.in/", external: true },
      ]
    },
    { name: t("nav.contactUs"), href: "/contact" },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        {t("common.skipToContent")}
      </a>

      <nav className="fixed top-14 left-0 right-0 mx-auto w-[95%] max-w-7xl z-50 glass rounded-full px-2 shadow-2xl transition-all duration-300 border border-foreground/10" data-testid="navbar" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" data-testid="logo-link" aria-label="Cehpoint Home">
                <div className="font-display font-bold text-xl sm:text-2xl text-primary hover:scale-105 transition-transform cursor-pointer">
                  Cehpoint
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => {
                    if (item.children) {
                      dropdownRefs.current[item.name] = el;
                    }
                  }}
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleDropdown(item.name);
                          }
                        }}
                        className="flex items-center text-foreground/90 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 font-medium"
                        aria-expanded={openDropdown === item.name}
                        aria-haspopup="true"
                        data-testid={`${item.name.toLowerCase()}-dropdown`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.name ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div
                          className="absolute top-full left-0 mt-2 w-56 glass rounded-lg py-2 shadow-xl"
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          {item.children.map((child) => (
                            child.external ? (
                              <a
                                key={child.name}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors whitespace-nowrap focus:outline-none focus:bg-foreground/10"
                                onClick={() => setTimeout(() => setOpenDropdown(null), 150)}
                                role="menuitem"
                                data-testid={`nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {child.name}
                              </a>
                            ) : (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-colors whitespace-nowrap focus:outline-none focus:bg-foreground/10"
                                onClick={() => setOpenDropdown(null)}
                                role="menuitem"
                                data-testid={`nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {child.name}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/90 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 font-medium"
                      data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground/90 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1 font-medium"
                      data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <LanguageToggle />
              <ThemeToggle />
              {/* Desktop CTA - Hidden on Mobile/Tablet */}
              <div className="hidden lg:block">
                <Link
                  href="/quotation"
                  className={cn(buttonVariants({ size: "default" }), "btn-primary hover-glow magnetic-hover px-6 py-3 rounded-xl text-primary-foreground font-bold")}
                  data-testid="cta-get-quote"
                  aria-label={t("nav.getAiQuote")}
                >
                  <Bot className="w-5 h-5 mr-2" />
                  <span>{t("nav.getAiQuote")}</span>
                </Link>
              </div>

              <button
                className="lg:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md p-1 sm:p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t("common.closeMenu") : t("common.openMenu")}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                data-testid="mobile-menu-toggle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="lg:hidden glass rounded-lg mt-2 p-4 max-h-[calc(100dvh-120px)] overflow-y-auto relative z-50"
              data-testid="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-2">
                        <div className="font-medium text-foreground px-2">{item.name}</div>
                        <div className="pl-4 space-y-2 border-l-2 border-primary/20 ml-2">
                          {item.children.map((child) => (
                            child.external ? (
                              <a
                                key={child.name}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus:text-foreground focus:underline"
                                onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                                role="menuitem"
                                data-testid={`mobile-nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {child.name}
                              </a>
                            ) : (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block text-sm text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus:text-foreground focus:underline"
                                onClick={() => setIsMenuOpen(false)}
                                role="menuitem"
                                data-testid={`mobile-nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {child.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    ) : item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus:text-foreground focus:underline"
                        onClick={() => setTimeout(() => setIsMenuOpen(false), 150)}
                        role="menuitem"
                        data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus:text-foreground focus:underline"
                        onClick={() => setIsMenuOpen(false)}
                        role="menuitem"
                        data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Menu CTA */}
                <div className="pt-4 border-t border-primary/20">
                  <Link
                    href="/quotation"
                    className={cn(buttonVariants({ size: "default" }), "w-full btn-primary hover-glow rounded-xl font-bold")}
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="mobile-cta-get-quote"
                  >
                    <Bot className="w-5 h-5 mr-2" />
                    {t("nav.getAiQuote")}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}