import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import { Building2, Landmark, Gavel, User, Globe } from "lucide-react";

export default function InvestigationClients() {
    return (
        <InvestigationLayout>
            <SEO
                title="Who We Serve - Investigation Clients | Cehpoint"
                description="Specialized cyber investigation services for Corporates, Government, Law Firms, and Individuals."
            />
            <section className="pt-32 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold mb-6">Who We Serve</h1>
                    <p className="text-xl text-muted-foreground">
                        Specialized investigation protocols tailored for distinct client categories.
                    </p>
                </div>

                <div className="space-y-8">
                    <ClientSection
                        icon={Building2}
                        title="Corporates & Enterprises"
                        desc="For organizations facing internal fraud, data theft, business email compromise (BEC), or ransomware."
                        features={["Discreet internal investigations", "Employee misconduct analysis", "Trade secret leakage tracing"]}
                    />
                    <ClientSection
                        icon={Landmark}
                        title="Government & PSUs"
                        desc="Technical intelligence support for state agencies, defense contractors, and public sector units."
                        features={["National security aligned protocols", "Large-scale log analysis", "Cross-border intelligence"]}
                    />
                    <ClientSection
                        icon={Gavel}
                        title="Law Firms & Legal Teams"
                        desc="Forensic support for litigation, e-discovery, and technical evidence validation."
                        features={["Expert witness testimony", "E-Discovery processing", "Opposing counsel report critique"]}
                    />
                    <ClientSection
                        icon={User}
                        title="Individuals & HNIs"
                        desc="Private services for victims of crypto theft, sextortion, blackmail, and stalking."
                        features={["Absolute privacy guarantee", "Personal device securing", "Harassment tracing"]}
                    />
                    <ClientSection
                        icon={Globe}
                        title="International Clients"
                        desc="Cross-border investigations for foreign entities requiring on-ground intelligence in India or digital tracing globally."
                        features={["Time-zone aligned updates", "International legal alignment", "Remote forensic acquisition"]}
                    />
                </div>
            </section>
        </InvestigationLayout>
    );
}

function ClientSection({ icon: Icon, title, desc, features }: { icon: any, title: string, desc: string, features: string[] }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl glass border border-white/5 hover:bg-white/[0.02] transition-all">
            <div className="shrink-0">
                <div className="p-4 bg-white/5 rounded-2xl">
                    <Icon className="w-10 h-10 text-white/50" />
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{desc}</p>
                <div className="flex flex-wrap gap-3">
                    {features.map((f, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
