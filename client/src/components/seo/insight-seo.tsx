import { Helmet } from "react-helmet-async";

interface InsightSEOProps {
    title: string;
    description: string;
    image?: string;
    articleSlug: string;
    publishedDate: string;
    modifiedDate?: string;
    author?: string;
    category?: string;
    wordCount?: number;
}

const BASE_URL = "https://www.cehpoint.co.in";
const PUBLISHER_LOGO = `${BASE_URL}/og-image.png`;

export function InsightSEO({
    title,
    description,
    image = "/assets/blog/business-hero-generic.png",
    articleSlug,
    publishedDate,
    modifiedDate,
    author = "Cehpoint Editorial Team",
    category = "Technology",
    wordCount,
}: InsightSEOProps) {
    const url = `${BASE_URL}/insights/${articleSlug}`;
    const fullImageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;
    const fullTitle = `${title} | Cehpoint Insights`;
    const effectiveModified = modifiedDate || publishedDate;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title.slice(0, 110),
        description,
        image: [fullImageUrl],
        datePublished: publishedDate,
        dateModified: effectiveModified,
        author: {
            "@type": "Person",
            name: author,
            url: BASE_URL,
        },
        publisher: {
            "@type": "Organization",
            name: "Cehpoint",
            logo: {
                "@type": "ImageObject",
                url: PUBLISHER_LOGO,
                width: 1200,
                height: 630,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        articleSection: category,
        ...(wordCount && { wordCount }),
        inLanguage: "en-IN",
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content="article" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content="Cehpoint" />
            <meta property="og:locale" content="en_IN" />
            <meta property="article:published_time" content={publishedDate} />
            <meta property="article:modified_time" content={effectiveModified} />
            <meta property="article:author" content={author} />
            <meta property="article:section" content={category} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@cehpoint" />
            <meta name="twitter:creator" content="@cehpoint" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={title} />

            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
}
