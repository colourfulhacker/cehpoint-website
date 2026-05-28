import ProjectCostEstimator from "@/components/calculators/project-cost-estimator";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export default function CostEstimatorPage() {
    return (
        <div className="pt-[105px]" data-testid="cost-estimator-page">
            <SEO 
                title="Project Cost Estimator | Cehpoint" 
                description="Estimate the cost of your web, mobile app, or software project with our interactive cost estimator." 
                url="https://www.cehpoint.co.in/cost-estimator"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Cost Estimator", url: "https://www.cehpoint.co.in/cost-estimator" }
                ]}
            />
            <ProjectCostEstimator />
        </div>
    );
}
