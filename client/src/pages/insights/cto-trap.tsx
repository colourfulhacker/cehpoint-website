import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function CtoTrap() {
    const article = insightArticles["cto-trap"];
    if (!article) return null;
    return <InsightRenderer article={article} />;
}
