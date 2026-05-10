import React from "react";
import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

const Escape95: React.FC = () => {
    const article = insightArticles["escape-9-5"];

    if (!article) {
        return <div>Article not found</div>;
    }

    return <InsightRenderer article={article} />;
};

export default Escape95;
