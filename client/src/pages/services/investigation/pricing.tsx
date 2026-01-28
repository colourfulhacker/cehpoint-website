import InvestigationLayout from "@/components/layout/investigation-layout";
import SEO from "@/components/seo";
import CyberCrimeCalculator from "@/components/calculators/cyber-crime-calculator";

export default function InvestigationPricing() {
    return (
        <InvestigationLayout>
            <SEO
                title="Investigation Pricing & Cost Estimator | Cehpoint"
                description="Transparent pricing and cost estimation for cyber crime investigation services."
            />
            <section className="pt-36 pb-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold mb-6">Transparent Costing</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Cyber investigation is complex, but pricing shouldn't be. Use our estimator to understand potential costs before engagement.
                    </p>
                </div>

                {/* Reusing the robust calculator component */}
                <CyberCrimeCalculator />

                <div className="mt-12 text-center text-sm text-muted-foreground">
                    * Final scope and cost are subject to expert review and feasibility analysis. This tool provides an estimate only.
                </div>
            </section>
        </InvestigationLayout>
    );
}
