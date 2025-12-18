import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "All Services", href: "/services" },
        { name: "IT Services", href: "/services#innovative-it-services" },
        { name: "Cyber Security", href: "/services/cyber-security" },
        { name: "E-commerce", href: "/services/ecommerce" },
        { name: "Edutech", href: "/services/edutech" },
        { name: "Fintech", href: "/services/fintech" },
      ]
    },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "Investor Connect", href: "/investor-connect" },
    { name: "Pricing", href: "/cost-estimator" },
    { name: "Incubation", href: "/incubation" },
    { name: "Demo Process", href: "/demo-delivery" },
    { name: "Get Quote", href: "/quotation" },
    { name: "Portfolio", href: "https://portfolios.cehpoint.co.in/", external: true },
    { name: "Leadership Search", href: "/leadership-search" },
    {
      name: "Careers",
      href: "/careers",
      children: [
        { name: "Full-time Jobs", href: "/careers" },
        { name: "Internship Program", href: "/interns" },
      ]
    },
  ];

  return (
    <nav className="fixed top-10 w-full z-40 glass" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" data-testid="logo-link">
              <div className="font-display font-bold text-2xl text-gradient hover:scale-105 transition-transform cursor-pointer">
                Cehpoint
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <Link
                      href={item.href}
                      className="flex items-center text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
                      data-testid={`${item.name.toLowerCase()}-dropdown`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-56 glass rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors whitespace-nowrap"
                          data-testid={`nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
                    data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
                    data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap"
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
              <Button className="btn-primary hover-glow magnetic-hover px-6 py-3 rounded-xl text-primary-foreground font-bold" data-testid="cta-get-quote">
                🚀 Get AI Quote
              </Button>
            </Link>

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4" data-testid="mobile-menu">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <div className="font-medium text-foreground px-2">{item.name}</div>
                      <div className="pl-4 space-y-2 border-l-2 border-primary/20 ml-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                            data-testid={`mobile-nav-child-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                      data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-foreground/80 hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
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
  );
}