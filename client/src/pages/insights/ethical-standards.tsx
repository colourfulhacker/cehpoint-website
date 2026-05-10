import React from "react";
import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

const EthicalStandards: React.FC = () => {
    const article = insightArticles["ethical-standards"];

    if (!article) {
        return <div>Article not found</div>;
    }

    return <InsightRenderer article={article} />;
};

export default EthicalStandards;
