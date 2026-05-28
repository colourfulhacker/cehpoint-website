import InvestigationLayout from "@/components/layout/investigation-layout";
import ProcessTimeline from "@/components/investigation/process-timeline";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export default function InvestigationProcess() {
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
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">How Our Investigation Works</h1>
                        <p className="text-xl text-muted-foreground">
                            A transparent, step-by-step approach designed to remove confusion and ensure full legal chain-of-custody from day one.
                        </p>
                    </div>

                    <ProcessTimeline />
                </div>
            </section>
        </InvestigationLayout>
    );
}
