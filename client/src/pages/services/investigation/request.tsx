import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import IntakeForm from "@/components/investigation/intake-form";

export default function InvestigationRequest() {
    return (
        <InvestigationLayout>
            <SEO
                title="Secure Investigation Request | Cehpoint"
                description="Secure intake form for initiating confidential cyber crime investigations."
            />
            <section className="pt-32 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold mb-6">Open A Secure Inquiry</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Initiate a case with our intake team. All operational details submitted here are encrypted and privileged.
                    </p>
                </div>

                <IntakeForm />
            </section>
        </InvestigationLayout>
    );
}
