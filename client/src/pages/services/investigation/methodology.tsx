import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { ShieldCheck, Database, FileSearch, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function InvestigationMethodology() {
    const { t } = useTranslation();
    return (
        <InvestigationLayout>
            <SEO
                title="Investigation Methodology & Standards | Cehpoint"
                description="Our rigorous investigation framework, digital forensics standards, and intelligence correlation methodologies."
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" },
                    { name: "Methodology", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation/methodology" }
                ]}
            />
            <section className="pt-36 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold mb-6">{t("pages.invMethodology.heading")}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("pages.invMethodology.subheading")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <MethodCard
                        icon={ShieldCheck}
                        title={t("pages.invMethodology.framework.title")}
                        points={t("pages.invMethodology.framework.points", { returnObjects: true }) as string[]}
                    />
                    <MethodCard
                        icon={Database}
                        title={t("pages.invMethodology.forensics.title")}
                        points={t("pages.invMethodology.forensics.points", { returnObjects: true }) as string[]}
                    />
                    <MethodCard
                        icon={FileSearch}
                        title={t("pages.invMethodology.intelligence.title")}
                        points={t("pages.invMethodology.intelligence.points", { returnObjects: true }) as string[]}
                    />
                    <MethodCard
                        icon={Scale}
                        title={t("pages.invMethodology.legal.title")}
                        points={t("pages.invMethodology.legal.points", { returnObjects: true }) as string[]}
                    />
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-red-950/10 border border-red-500/20">
                    <h3 className="text-xl font-bold text-red-400 mb-4">{t("pages.invMethodology.disclaimer.title")}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {t("pages.invMethodology.disclaimer.body")}
                    </p>
                </div>
            </section>
        </InvestigationLayout>
    );
}

function MethodCard({ icon: Icon, title, points }: { icon: any, title: string, points: string[] }) {
    return (
        <div className="p-8 rounded-2xl glass border border-foreground/5 hover:border-red-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
            </div>
            <ul className="space-y-4">
                {points.map((p, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 shrink-0" />
                        {p}
                    </li>
                ))}
            </ul>
        </div>
    );
}
