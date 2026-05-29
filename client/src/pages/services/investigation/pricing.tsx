import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import CyberCrimeCalculator from "@/components/calculators/cyber-crime-calculator";
import { useTranslation } from "react-i18next";

export default function InvestigationPricing() {
    const { t } = useTranslation();
    return (
        <InvestigationLayout>
            <SEO
                title="Investigation Pricing & Cost Estimator | Cehpoint"
                description="Transparent pricing and cost estimation for cyber crime investigation services."
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" },
                    { name: "Pricing", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation/pricing" }
                ]}
            />
            <section className="pt-36 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold mb-6">{t("pages.invPricing.heading")}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("pages.invPricing.subheading")}
                    </p>
                </div>

                {/* Reusing the robust calculator component */}
                <CyberCrimeCalculator />

                <div className="mt-12 text-center text-sm text-muted-foreground">
                    {t("pages.invPricing.disclaimer")}
                </div>
            </section>
        </InvestigationLayout>
    );
}
