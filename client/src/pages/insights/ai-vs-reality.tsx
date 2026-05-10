import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function AiVsReality() {
    const article = insightArticles["ai-vs-reality"];
    if (!article) return null;
    return <InsightRenderer article={article} />;
}
