import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useTranslation } from "react-i18next";

export default function InvestigationLegal() {
    const { t } = useTranslation();
    return (
        <InvestigationLayout>
            <SEO
                title="Legal, Confidentiality & Compliance | Cehpoint"
                description="Our legal adherence, confidentiality guarantees, and compliance standards for digital forensics."
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" },
                    { name: "Legal & Compliance", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation/legal" }
                ]}
            />
            <section className="pt-36 pb-20 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-display font-bold mb-12">{t("pages.invLegal.heading")}</h1>

                <div className="space-y-12 text-muted-foreground leading-relaxed">
                    <PolicySection title={t("pages.invLegal.confidentiality.title")}>
                        <p>
                            {t("pages.invLegal.confidentiality.body")}
                        </p>
                    </PolicySection>

                    <PolicySection title={t("pages.invLegal.dataHandling.title")}>
                        <p>
                            {t("pages.invLegal.dataHandling.body")}
                        </p>
                    </PolicySection>

                    <PolicySection title={t("pages.invLegal.admissibility.title")}>
                        <p>
                            {t("pages.invLegal.admissibility.body")}
                        </p>
                    </PolicySection>

                    <PolicySection title={t("pages.invLegal.jurisdiction.title")}>
                        <p>
                            {t("pages.invLegal.jurisdiction.body")}
                        </p>
                    </PolicySection>

                    <PolicySection title={t("pages.invLegal.conflict.title")}>
                        <p>
                            {t("pages.invLegal.conflict.body")}
                        </p>
                    </PolicySection>
                </div>
            </section>
        </InvestigationLayout>
    );
}

function PolicySection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-foreground/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
            <div className="text-lg">
                {children}
            </div>
        </div>
    );
}
