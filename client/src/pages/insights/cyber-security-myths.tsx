import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function CyberSecurityMyths() {
    const article = insightArticles["cyber-security-myths"];
    if (!article) return null;
    return <InsightRenderer article={article} />;
}
