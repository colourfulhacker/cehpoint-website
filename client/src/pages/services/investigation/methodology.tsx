import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import { ShieldCheck, Database, FileSearch, Scale } from "lucide-react";

export default function InvestigationMethodology() {
    return (
        <InvestigationLayout>
            <SEO
                title="Investigation Methodology & Standards | Cehpoint"
                description="Our rigorous investigation framework, digital forensics standards, and intelligence correlation methodologies."
            />
            <section className="pt-36 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold mb-6">Methodology & Standards</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A rigorous framework designed for enterprises, law firms, and government entities requiring absolute technical precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <MethodCard
                        icon={ShieldCheck}
                        title="1. Investigation Framework"
                        points={[
                            "Incident-driven response model",
                            "Evidence-first hypothesis testing",
                            "Zero-assumption analysis logic",
                            "Rapid triage & containment support"
                        ]}
                    />
                    <MethodCard
                        icon={Database}
                        title="2. Digital Forensics Standards"
                        points={[
                            "Bit-stream forensic imaging (E01/DD)",
                            "MD5/SHA-256 Hash verification",
                            "Write-blocker protected acquisition",
                            "Evidence integrity validation logs"
                        ]}
                    />
                    <MethodCard
                        icon={FileSearch}
                        title="3. Intelligence Correlation"
                        points={[
                            "OSINT + Dark Web data fusion",
                            "Cross-platform behavioral mapping",
                            "Financial trail reconstruction",
                            "Crypto-asset hop analysis"
                        ]}
                    />
                    <MethodCard
                        icon={Scale}
                        title="4. Legal & Compliance"
                        points={[
                            "Strict Chain of Custody documentation",
                            "Jurisdiction-aware data handling",
                            "Admissibility-focused reporting",
                            "Non-disclosure & seal protocols"
                        ]}
                    />
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-red-950/10 border border-red-500/20">
                    <h3 className="text-xl font-bold text-red-400 mb-4">Official Disclaimer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Cehpoint is a private digital forensics and cyber intelligence agency. We provide technical investigation support and evidence analysis. While our reports are legally admissible, we do not possess law enforcement powers (arrest/seizure) unless operating under specific government contract. All legal actions must be driven by the client's counsel or relevant authorities based on our technical findings.
                    </p>
                </div>
            </section>
        </InvestigationLayout>
    );
}

function MethodCard({ icon: Icon, title, points }: { icon: any, title: string, points: string[] }) {
    return (
        <div className="p-8 rounded-2xl glass border border-white/5 hover:border-red-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <ul className="space-y-4">
                {points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2 shrink-0" />
                        {p}
                    </li>
                ))}
            </ul>
        </div>
    );
}
