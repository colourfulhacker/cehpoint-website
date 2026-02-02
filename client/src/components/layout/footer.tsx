import { Link } from "wouter"
import { Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Globe, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { WorldClock } from "@/components/ui/world-clock"

export default function Footer() {
  const serviceLinks = [
    { name: "Free Security Scheme", href: "/security-scheme" },
    { name: "Cyber Crime Investigation", href: "/services/cyber-crime-investigation" },
    { name: "E-commerce Development", href: "/services/ecommerce" },
    { name: "Edutech Solutions", href: "/services/edutech" },
    { name: "Fintech Applications", href: "/services/fintech" },
    { name: "AI Solutions", href: "/ai-solutions" },
  ]

  const companyLinks = [
    { name: "Portfolio", href: "https://portfolios.cehpoint.co.in/", external: true },
    { name: "Company Profile", href: "/company-profile" },
    { name: "24-Hour Demo", href: "/demo-delivery" },
    { name: "Careers", href: "/careers" },
    { name: "Official Tenders", href: "/tenders" },
    { name: "Get Quote", href: "/quotation" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ]

  const contactLinks = [
    {
      name: "contact@cehpoint.co.in",
      href: "mailto:contact@cehpoint.co.in",
      icon: Mail,
      label: "Email Us"
    },
    {
      name: "+91 33690 29331",
      href: "tel:+913369029331",
      icon: Phone,
      label: "Call Now"
    }
  ]

  const addresses = [
    {
      id: "US",
      country: "United States",
      flag: "🇺🇸",
      address: "5 Penn Plaza, 14th Floor, New York, NY 10001, US",
      timezone: "America/New_York"
    },
    {
      id: "UK",
      country: "United Kingdom",
      flag: "🇬🇧",
      address: "12 Steward Street, The Steward Building, London, E1 6FQ, Great Britain",
      timezone: "Europe/London"
    },
    {
      id: "DE",
      country: "Germany",
      flag: "🇩🇪",
      address: "Banking Circle S.A. - German Branch, Maximilianstraße 54, 80538 München",
      timezone: "Europe/Berlin"
    },
    {
      id: "AU",
      country: "Australia",
      flag: "🇦🇺",
      address: "Level 11/10 Carrington St, Sydney NSW 2000, Australia",
      timezone: "Australia/Sydney"
    },
    {
      id: "CA",
      country: "Canada",
      flag: "🇨🇦",
      address: "736 Meridian Road N.E, Calgary, Alberta, CA",
      timezone: "America/Edmonton"
    },
    {
      id: "IN",
      country: "India",
      flag: "🇮🇳",
      address: "Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur, West Bengal - 731303, India",
      timezone: "Asia/Kolkata"
    },
    {
      id: "AE",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      address: "1st Floor, Emaar Square, Building 6, Dubai, United Arab Emirates",
      timezone: "Asia/Dubai"
    }
  ]

  return (
    <footer className="relative border-t border-white/10 overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-[#020010] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(112,66,248,0.1),transparent_50%)] z-0" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="font-display font-bold text-3xl text-gradient" data-testid="footer-logo">
                Cehpoint
              </div>
            </div>

            <p className="text-foreground/70 text-sm leading-relaxed" data-testid="footer-description">
              Cehpoint is a modern IT and cybersecurity company committed to delivering secure, scalable, and
              intelligent technology solutions. Founded by ethical hackers and seasoned IT professionals.
            </p>

            <div className="space-y-4">
              <div className="flex space-x-3">
                <a
                  href="https://twitter.com/cehpoint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1"
                  data-testid="social-twitter"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href="https://linkedin.com/company/cehpoint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1"
                  data-testid="social-linkedin"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground" data-testid="footer-services-title">
                Services
              </h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                    data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground" data-testid="footer-company-title">
                Company
              </h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                      data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-200" />
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="group flex items-center space-x-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                      data-testid={`footer-company-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Converted to Match List Style */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground" data-testid="footer-contact-title">
                Get in Touch
              </h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>

            <ul className="space-y-4">
              {contactLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-start space-x-3 text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
                    data-testid={`footer-contact-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{item.label}</p>
                      <p className="opacity-80 font-mono text-xs">{item.name}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* City Navigation Links */}
        <div className="mt-16 pt-12 border-t border-border/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* International */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground">International</h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>
            <ul className="space-y-2">
              {[
                { name: "New York", href: "/location/new-york" },
                { name: "London", href: "/location/london" },
                { name: "Dubai (UAE)", href: "/location/dubai" },
                { name: "Munich (Germany)", href: "/location/munich" },
                { name: "Sydney (Australia)", href: "/location/sydney" },
                { name: "Calgary (Canada)", href: "/location/calgary" },
              ].map(city => (
                <li key={city.name}>
                  <Link href={city.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2 group-hover:bg-primary group-hover:scale-125 transition-all" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* India 1 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground">India (Metro)</h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>
            <ul className="space-y-2">
              {[
                { name: "Mumbai", href: "/location/mumbai" },
                { name: "Delhi NCR", href: "/location/delhi" },
                { name: "Bangalore", href: "/location/bangalore" },
                { name: "Hyderabad", href: "/location/hyderabad" },
                { name: "Chennai", href: "/location/chennai" },
                { name: "Kolkata", href: "/location/kolkata" },
              ].map(city => (
                <li key={city.name}>
                  <Link href={city.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2 group-hover:bg-primary group-hover:scale-125 transition-all" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* India 2 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground">India (Tech Hubs)</h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>
            <ul className="space-y-2">
              {[
                { name: "Pune", href: "/location/pune" },
                { name: "Ahmedabad", href: "/location/ahmedabad" },
                { name: "Jaipur", href: "/location/jaipur" },
                { name: "Indore", href: "/location/indore" },
                { name: "Kochi", href: "/location/kochi" },
                { name: "Chandigarh", href: "/location/chandigarh" },
              ].map(city => (
                <li key={city.name}>
                  <Link href={city.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2 group-hover:bg-primary group-hover:scale-125 transition-all" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* India 3 - Emerging */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-lg text-foreground">India (Emerging)</h4>
              <div className="w-8 h-1 bg-primary/50 rounded-full" />
            </div>
            <ul className="space-y-2">
              {[
                { name: "Lucknow", href: "/location/lucknow" },
                { name: "Bhubaneswar", href: "/location/bhubaneswar" },
                { name: "Coimbatore", href: "/location/coimbatore" },
                { name: "Visakhapatnam", href: "/location/visakhapatnam" },
                { name: "Nagpur", href: "/location/nagpur" },
                { name: "Bolpur (HQ)", href: "/location/bolpur" },
              ].map(city => (
                <li key={city.name}>
                  <Link href={city.href} className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2 group-hover:bg-primary group-hover:scale-125 transition-all" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Addresses Section */}
        <div className="mt-16 pt-12 border-t border-border/50 space-y-8">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-lg text-foreground">Global Presence</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full hover:bg-primary/10">
                  <Info className="h-4 w-4 text-foreground/70 hover:text-primary transition-colors" />
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-intense border-primary/20 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display font-bold text-gradient mb-4">
                    Global Digital-First Operations
                  </DialogTitle>
                  <DialogDescription className="text-base space-y-4 text-foreground/90">
                    <p>
                      Cehpoint operates as a legally registered global entity with virtual offices established for administrative, legal, and banking purposes.
                    </p>
                    <p>
                      Our distributed team of experts delivers world-class services to clients worldwide, transcending physical boundaries. While we are primarily a digital-first organization to ensure speed, efficiency, and global reach, we maintain full capability to execute complex projects remotely.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-xl space-y-2">
                      <h5 className="font-semibold text-primary">Key Operational Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70">
                        <li><span className="font-medium text-foreground">Global Reach:</span> We serve clients internationally without geographical limitations.</li>
                        <li><span className="font-medium text-foreground">Virtual Infrastructure:</span> Our legal addresses and virtual offices support our global banking and compliance needs.</li>
                        <li><span className="font-medium text-foreground">Remote Culture:</span> Our diverse, international team collaborates seamlessly across time zones.</li>
                        <li><span className="font-medium text-foreground">In-Person Meetings:</span> While we operate digitally, offline consultations can be arranged by appointment when necessary.</li>
                      </ul>
                    </div>
                    <p className="text-sm italic text-foreground/70">
                      We are committed to providing the same high standard of service, security, and professionalism, regardless of location.
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addresses.map((location) => (
              <div
                key={location.id}
                className="group p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300"
                data-testid={`footer-address-${location.id}`}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl pt-1 select-none">{location.flag}</div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      {location.country}
                    </p>
                    <address className="not-italic text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {location.address}
                    </address>
                    {location.timezone && (
                      <WorldClock timezone={location.timezone} label={location.country} />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-foreground/50 text-xs font-medium" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} Cehpoint. All rights reserved. &middot; The Point Where IT Innovation Meets Cybersecurity Excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}