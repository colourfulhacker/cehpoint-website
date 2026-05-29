import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Building2, Landmark, Gavel, User, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function InvestigationClients() {
    const { t } = useTranslation();
    return (
        <InvestigationLayout>
            <SEO
                title="Who We Serve - Investigation Clients | Cehpoint"
                description="Specialized cyber investigation services for Corporates, Government, Law Firms, and Individuals."
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" },
                    { name: "Clients", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation/clients" }
                ]}
            />
            <section className="pt-36 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-display font-bold mb-6">{t("pages.invClients.heading")}</h1>
                    <p className="text-xl text-muted-foreground">
                        {t("pages.invClients.subheading")}
                    </p>
                </div>

                <div className="space-y-8">
                    <ClientSection
                        icon={Building2}
                        title={t("pages.invClients.corporate.title")}
                        desc={t("pages.invClients.corporate.desc")}
                        features={t("pages.invClients.corporate.features", { returnObjects: true }) as string[]}
                    />
                    <ClientSection
                        icon={Landmark}
                        title={t("pages.invClients.government.title")}
                        desc={t("pages.invClients.government.desc")}
                        features={t("pages.invClients.government.features", { returnObjects: true }) as string[]}
                    />
                    <ClientSection
                        icon={Gavel}
                        title={t("pages.invClients.legal.title")}
                        desc={t("pages.invClients.legal.desc")}
                        features={t("pages.invClients.legal.features", { returnObjects: true }) as string[]}
                    />
                    <ClientSection
                        icon={User}
                        title={t("pages.invClients.individuals.title")}
                        desc={t("pages.invClients.individuals.desc")}
                        features={t("pages.invClients.individuals.features", { returnObjects: true }) as string[]}
                    />
                    <ClientSection
                        icon={Globe}
                        title={t("pages.invClients.international.title")}
                        desc={t("pages.invClients.international.desc")}
                        features={t("pages.invClients.international.features", { returnObjects: true }) as string[]}
                    />
                </div>
            </section>
        </InvestigationLayout>
    );
}

function ClientSection({ icon: Icon, title, desc, features }: { icon: any, title: string, desc: string, features: string[] }) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl glass border border-foreground/5 hover:bg-white/[0.02] transition-all">
            <div className="shrink-0">
                <div className="p-4 bg-foreground/5 rounded-2xl">
                    <Icon className="w-10 h-10 text-foreground/70" />
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{desc}</p>
                <div className="flex flex-wrap gap-3">
                    {features.map((f, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-sm text-foreground/70">
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
