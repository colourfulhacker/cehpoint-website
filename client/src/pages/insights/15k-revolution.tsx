import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function StartupRevolutionArticle() {
    const article = insightArticles["15k-revolution"];

    if (!article) return <div>Article not found</div>;

    return <InsightRenderer article={article} />;
}
