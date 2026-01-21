import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    canonical?: string;
    type?: "website" | "article" | "product" | "profile";
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    twitterCreator?: string;
    twitterSite?: string;
    robots?: string;
    themeColor?: string;
    schema?: string; // JSON-LD schema as a string
}

export default function SEO({
    title,
    description,
    keywords = [
        "IT Consultancy",
        "Enterprise Outsourcing",
        "Software Development",
        "AI Solutions",
        "Digital Transformation",
        "Cloud Services",
        "IT Company India",
        "Best IT Company Kolkata"
    ],
    image = "/og-image.png",
    url,
    canonical,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Cehpoint",
    twitterCreator = "@cehpoint",
    twitterSite = "@cehpoint",
    robots = "index, follow",
    themeColor = "#0EA5E9",
    schema
}: SEOProps) {
    const siteTitle = "Cehpoint - Innovative IT Solutions";
    const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;
    const baseUrl = "https://www.cehpoint.co.in";

    // Build absolute URLs for canonical and current page
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : baseUrl);
    const canonicalUrl = canonical || currentUrl;

    // Ensure image URL is absolute
    const absoluteImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

    return (
        <Helmet>
            {/* HTML lang attribute for accessibility */}
            <html lang="en" />

            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <meta name="author" content={author} />
            <meta name="application-name" content={siteTitle} />
            <meta name="theme-color" content={themeColor} />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="en_US" />

            {/* Article-specific Open Graph tags */}
            {type === "article" && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === "article" && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === "article" && author && (
                <meta property="article:author" content={author} />
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:site" content={twitterSite} />

            {/* Additional Meta Tags */}
            <meta name="robots" content={robots} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}
        </Helmet>
    );
}
