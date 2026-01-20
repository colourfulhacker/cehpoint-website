import { Link, useLocation } from "wouter";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});

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
      name: "Services",
      href: "/services",
      children: [
        { name: "All Services", href: "/services" },
        { name: "Free Security Scheme", href: "/security-scheme" },
        { name: "IT Services", href: "/services#innovative-it-services" },
        { name: "Cyber Security", href: "/services/cyber-security" },
        { name: "Cyber Crime Investigation", href: "/services/cyber-crime-investigation" },
        { name: "E-commerce", href: "/services/ecommerce" },
        { name: "Edutech", href: "/services/edutech" },
        { name: "Fintech", href: "/services/fintech" },
        { name: "Business App Catalog", href: "/services/business-app-catalog" },
      ]
    },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Investment Desk", href: "/cost-estimator" },
    { name: "Training", href: "/training" },
    {
      name: "Founder's Hub",
      href: "#",
      children: [
        { name: "Demo Process", href: "/demo-delivery" },
        { name: "Company Profile", href: "/company-profile" },
        { name: "Incubation", href: "/incubation" },
        { name: "Leadership Search", href: "/leadership-search" },
        { name: "Investor Connect", href: "/investor-connect" },
        { name: "Portfolio", href: "https://portfolios.cehpoint.co.in/", external: true },
      ]
    },
    {
      name: "Employees Corner",
      href: "#",
      children: [
        { name: "Projects Portal", href: "https://projects.cehpoint.co.in/", external: true },
        { name: "Developer Docs", href: "https://developer-document.cehpoint.co.in/", external: true },
        { name: "Proposal Maker", href: "https://proposal-maker.cehpoint.co.in/", external: true },
        { name: "CCIE Portal", href: "https://ccie.cehpoint.co.in/", external: true },
        { name: "CPIS Portal", href: "http://cpis.cehpoint.co.in/", external: true },
        { name: "Outreach AI", href: "http://outreach-ai.cehpoint.co.in/", external: true },
        { name: "Outreach Portal", href: "https://outreach.cehpoint.co.in/", external: true },
      ]
    },
    {
      name: "Careers",
      href: "/careers",
      children: [
        { name: "Full-time Jobs", href: "/careers" },
        { name: "Internship Program", href: "/interns" },
        { name: "Campus Ambassador", href: "https://cehpoint-campus-ambassador-portal.cehpoint.co.in/", external: true },
      ]
    },
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
        Skip to main content
      </a>

      <nav className="fixed top-10 w-full z-40 glass" data-testid="navbar" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" data-testid="logo-link" aria-label="Cehpoint Home">
                <div className="font-display font-bold text-2xl text-gradient hover:scale-105 transition-transform cursor-pointer">
                  Cehpoint
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
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
                        className="flex items-center text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
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
                                className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors whitespace-nowrap focus:outline-none focus:bg-secondary/50"
                                onClick={() => setOpenDropdown(null)}
                                role="menuitem"
                                data-testid={`nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {child.name}
                              </a>
                            ) : (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors whitespace-nowrap focus:outline-none focus:bg-secondary/50"
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
                      className="text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                      data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </a>
                  ) : item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className="text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                      data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                      data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/quotation">
                <Button
                  className="btn-primary hover-glow magnetic-hover px-6 py-3 rounded-xl text-primary-foreground font-bold"
                  data-testid="cta-get-quote"
                  aria-label="Get AI Quote - Request a proposal"
                >
                  🚀 Get AI Quote
                </Button>
              </Link>

              <button
                className="lg:hidden text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-md p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                data-testid="mobile-menu-toggle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden glass rounded-lg mt-2 p-4 max-h-[calc(100vh-120px)] overflow-y-auto relative z-50"
              data-testid="mobile-menu"
              role="menu"
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
                                onClick={() => setIsMenuOpen(false)}
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
                        onClick={() => setIsMenuOpen(false)}
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
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}