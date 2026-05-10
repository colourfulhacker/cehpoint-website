import React from "react";
import { InsightRenderer } from "@/components/insights/insight-renderer";
import { insightArticles } from "@/data/insights/insight-content-data";

const DigitalForensicsROI: React.FC = () => {
    const article = insightArticles["digital-forensics-roi"];

    if (!article) {
        return <div>Article not found</div>;
    }

    return <InsightRenderer article={article} />;
};

export default DigitalForensicsROI;
