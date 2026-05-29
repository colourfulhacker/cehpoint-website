import { Link, useLocation } from "wouter";
import { Shield, ChevronRight, Lock, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InvestigationLayout({ children }: { children: React.ReactNode }) {
    const [location] = useLocation();

    const navItems = [
        { name: "Overview", href: "/services/cyber-crime-investigation" },
        { name: "Process", href: "/services/cyber-crime-investigation/process" },
        { name: "Methodology", href: "/services/cyber-crime-investigation/methodology" },
        { name: "Clients", href: "/services/cyber-crime-investigation/clients" },
        { name: "Pricing", href: "/services/cyber-crime-investigation/pricing" },
        { name: "Legal", href: "/services/cyber-crime-investigation/legal" },
    ];

    const currentItem = navItems.find((n) => n.href === location);
    const currentName = currentItem?.name || (location.endsWith("/request") ? "Request Investigation" : "Cyber Crime Investigation");

    return (
        <div className="min-h-screen bg-background">
            <div className="border-b border-border bg-card/70 backdrop-blur-md sticky top-[104px] z-30">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="pt-2">
                        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-foreground inline-flex items-center gap-1 transition-colors">
                                    <Home className="w-3 h-3" aria-hidden="true" />
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
                            <li>
                                <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                            </li>
                            <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
                            <li>
                                <Link href="/services/cyber-crime-investigation" className="hover:text-foreground transition-colors">Cyber Crime Investigation</Link>
                            </li>
                            {currentItem && currentItem.href !== "/services/cyber-crime-investigation" && (
                                <>
                                    <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
                                    <li aria-current="page" className="text-foreground">{currentName}</li>
                                </>
                            )}
                        </ol>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-center justify-between py-3">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <Shield className="w-5 h-5 text-red-500" aria-hidden="true" />
                            <span className="font-display font-medium text-sm tracking-wide text-foreground/80">
                                CCIS <span className="text-foreground/50 mx-2" aria-hidden="true">|</span> Cyber Crime Investigation Service
                            </span>
                        </div>

                        <nav aria-label="Section navigation" className="flex overflow-x-auto gap-1 -mx-4 px-4 md:mx-0 md:px-0">
                            {navItems.map((item) => {
                                const isActive = location === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={cn(
                                            "px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border border-transparent",
                                            isActive
                                                ? "bg-red-500/10 text-red-400 border-red-500/20"
                                                : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <div className="w-px h-6 bg-foreground/10 mx-2 hidden md:block" aria-hidden="true" />
                            <Link
                                href="/services/cyber-crime-investigation/request"
                                aria-current={location === "/services/cyber-crime-investigation/request" ? "page" : undefined}
                                className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer inline-flex items-center gap-2 border",
                                    location === "/services/cyber-crime-investigation/request"
                                        ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-900/20"
                                        : "bg-foreground/5 border-foreground/10 text-foreground hover:bg-foreground/10"
                                )}
                            >
                                <Lock className="w-3 h-3" aria-hidden="true" />
                                Request Investigation
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}
