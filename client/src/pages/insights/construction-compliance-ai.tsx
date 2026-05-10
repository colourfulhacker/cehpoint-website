import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function ConstructionComplianceAi() {
    const article = insightArticles["construction-compliance-ai"];
    if (!article) return null;
    return <InsightRenderer article={article} />;
}
