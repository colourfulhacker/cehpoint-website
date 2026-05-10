
import { Helmet } from "react-helmet-async";

interface InsightSEOProps {
    title: string;
    description: string;
    image?: string;
    articleSlug: string;
    publishedDate: string;
    author?: string;
    category?: string;
}

export function InsightSEO({
    title,
    description,
    image = "/assets/blog/business-hero-generic.png",
    articleSlug,
    publishedDate,
    author = "Cehpoint Team",
    category = "Technology",
}: InsightSEOProps) {
    const url = `https://cehpoint.co.in/insights/${articleSlug}`;
    const fullImageUrl = image.startsWith("http") ? image : `https://cehpoint.co.in${image}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": [fullImageUrl],
        "datePublished": publishedDate,
        "dateModified": new Date().toISOString().split("T")[0],
        "author": {
            "@type": "Organization",
            "name": author,
            "url": "https://cehpoint.co.in",
        },
        "publisher": {
            "@type": "Organization",
            "name": "Cehpoint",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cehpoint.co.in/assets/logo.png",
            },
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url,
        },
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title} | Cehpoint Insights</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="article" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImageUrl} />

            {/* Article Specific Meta */}
            <meta property="article:published_time" content={publishedDate} />
            <meta property="article:author" content={author} />
            <meta property="article:section" content={category} />

            {/* JSON-LD */}
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
    );
}
