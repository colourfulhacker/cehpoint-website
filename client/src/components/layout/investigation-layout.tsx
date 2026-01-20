import { Link, useLocation } from "wouter";
import { Shield, ChevronRight, Lock } from "lucide-react";
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

    return (
        <div className="min-h-screen bg-background">
            {/* Platform Header */}
            <div className="border-b border-white/5 bg-black/40 backdrop-blur-md sticky top-[104px] z-30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between py-3">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <Shield className="w-5 h-5 text-red-500" />
                            <span className="font-display font-medium text-sm tracking-wide text-white/80">
                                CCIS <span className="text-white/30 mx-2">|</span> Cyber Crime Investigation Service
                            </span>
                        </div>

                        <nav className="flex overflow-x-auto gap-1 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                            {navItems.map((item) => (
                                <Link key={item.href} href={item.href}>
                                    <div className={cn(
                                        "px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer border border-transparent",
                                        location === item.href
                                            ? "bg-red-500/10 text-red-400 border-red-500/20"
                                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                                    )}>
                                        {item.name}
                                    </div>
                                </Link>
                            ))}
                            <div className="w-px h-6 bg-white/10 mx-2 hidden md:block" />
                            <Link href="/services/cyber-crime-investigation/request">
                                <div className={cn(
                                    "px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border",
                                    location === "/services/cyber-crime-investigation/request"
                                        ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-900/20"
                                        : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                                )}>
                                    <Lock className="w-3 h-3" />
                                    Request Investigation
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}
