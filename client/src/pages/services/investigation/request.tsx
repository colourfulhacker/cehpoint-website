import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import IntakeForm from "@/components/investigation/intake-form";
import { useTranslation } from "react-i18next";

export default function InvestigationRequest() {
    const { t } = useTranslation();
    return (
        <InvestigationLayout>
            <SEO
                title="Secure Investigation Request | Cehpoint"
                description="Secure intake form for initiating confidential cyber crime investigations."
                noIndex
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" },
                    { name: "Request Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation/request" }
                ]}
            />
            <section className="pt-36 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold mb-6">{t("pages.invRequest.heading")}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t("pages.invRequest.subheading")}
                    </p>
                </div>

                <IntakeForm />
            </section>
        </InvestigationLayout>
    );
}
