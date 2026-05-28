import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

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
    schema?: string;
    noIndex?: boolean;
}

const SITE_TITLE = "Cehpoint - Enterprise IT, AI & Cybersecurity Solutions";
const BASE_URL = "https://www.cehpoint.co.in";
const DEFAULT_OG_IMAGE = "/og-image.png";

export default function SEO({
    title,
    description,
    keywords = [
        "IT Consultancy Kolkata",
        "Best IT Company in West Bengal",
        "Top Software Company in Kolkata",
        "AI Solutions West Bengal",
        "Enterprise IT Bolpur Kolkata",
        "Software Development India",
        "Digital Transformation Services"
    ],
    image = DEFAULT_OG_IMAGE,
    url,
    canonical,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Cehpoint",
    twitterCreator = "@cehpoint",
    twitterSite = "@cehpoint",
    robots = "index, follow, max-image-preview:large, max-video-preview:-1",
    themeColor = "#7064F8",
    schema,
    noIndex = false
}: SEOProps) {
    const [pathname] = useLocation();

    const hasSiteSuffix = title.includes("Cehpoint");
    const isHome = title === "Home";
    let fullTitle = isHome ? SITE_TITLE : hasSiteSuffix ? title : `${title} | Cehpoint`;
    if (fullTitle.length > 65) {
        fullTitle = fullTitle.slice(0, 62).replace(/\s+\S*$/, "") + "…";
    }

    const resolvedPath = pathname || "/";
    const currentUrl = url || `${BASE_URL}${resolvedPath}`;
    const canonicalUrl = canonical || currentUrl;
    const absoluteImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
    const imageAlt = title && title !== "Home" ? title : SITE_TITLE;

    const robotsContent = noIndex ? "noindex, nofollow" : robots;

    return (
        <Helmet>
            <html lang="en-IN" />

            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <meta name="author" content={author} />
            <meta name="application-name" content="Cehpoint" />
            <meta name="theme-color" content={themeColor} />
            <meta name="robots" content={robotsContent} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={imageAlt} />
            <meta property="og:site_name" content="Cehpoint" />
            <meta property="og:locale" content="en_IN" />

            {/* Article-specific Open Graph */}
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
            <meta name="twitter:image:alt" content={imageAlt} />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:site" content={twitterSite} />

            {/* Additional SEO */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}
        </Helmet>
    );
}
