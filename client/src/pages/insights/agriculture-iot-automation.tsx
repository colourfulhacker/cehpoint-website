import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

export default function AgricultureIotAutomation() {
    const article = insightArticles["agriculture-iot-automation"];
    if (!article) return null;
    return <InsightRenderer article={article} />;
}
