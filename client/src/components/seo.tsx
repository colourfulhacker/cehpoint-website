import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    canonical?: string;
}

export default function SEO({
    title,
    description,
    keywords = ["IT Consultancy", "Enterprise Outsourcing", "Software Development", "AI Solutions", "Digital Transformation", "Cloud Services"],
    image = "/og-image.png",
    url,
    canonical
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

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Cehpoint" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        </Helmet>
    );
}
