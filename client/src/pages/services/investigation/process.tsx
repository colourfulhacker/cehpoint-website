import InvestigationLayout from "@/components/layout/investigation-layout";
import ProcessTimeline from "@/components/investigation/process-timeline";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useTranslation } from "react-i18next";

export default function InvestigationProcess() {
    const { t } = useTranslation();
    return (
        <InvestigationLayout>
            <SEO
                title="Investigation Process & Timeline | Cehpoint"
                description="Our 7-step cyber investigation process ensures confidentiality, legal compliance, and accurate forensic results."
                url="https://www.cehpoint.co.in/services/cyber-crime-investigation/process"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Cyber Crime Investigation", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation" },
                    { name: "Process", url: "https://www.cehpoint.co.in/services/cyber-crime-investigation/process" }
                ]}
            />

            <section className="pt-36 pb-20 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{t("pages.invProcess.heading")}</h1>
                        <p className="text-xl text-muted-foreground">
                            {t("pages.invProcess.subheading")}
                        </p>
                    </div>

                    <ProcessTimeline />
                </div>
            </section>
        </InvestigationLayout>
    );
}
