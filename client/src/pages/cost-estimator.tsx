import ProjectCostEstimator from "@/components/calculators/project-cost-estimator";

export default function CostEstimatorPage() {
    return (
        <div className="pt-[105px]" data-testid="cost-estimator-page">
            <ProjectCostEstimator />
        </div>
    );
}
