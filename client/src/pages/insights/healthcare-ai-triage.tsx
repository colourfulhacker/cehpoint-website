import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function HealthcareAITriage() {
    const article = insightArticles["healthcare-ai-triage"];

    if (!article) return <div>Article not found</div>;

    return <InsightRenderer article={article} />;
}
