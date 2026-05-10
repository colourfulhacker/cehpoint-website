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
    schema?: string;
    noIndex?: boolean;
}

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
    image = "/og-image.svg",
    url,
    canonical,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "Cehpoint",
    twitterCreator = "@cehpoint",
    twitterSite = "@cehpoint",
    robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    themeColor = "#7064F8",
    schema,
    noIndex = false
}: SEOProps) {
    const siteTitle = "Cehpoint - Innovative IT Solutions";
    const fullTitle = title === "Home" ? siteTitle : `${title} | ${siteTitle}`;
    const baseUrl = "https://www.cehpoint.co.in";
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : baseUrl);
    const canonicalUrl = canonical || currentUrl;
    const absoluteImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

    const robotsContent = noIndex ? "noindex, nofollow" : robots;

    return (
        <Helmet>
            <html lang="en" />

            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <meta name="author" content={author} />
            <meta name="application-name" content={siteTitle} />
            <meta name="theme-color" content={themeColor} />
            <meta name="robots" content={robotsContent} />

            {/* AI/LLM Specific Meta Tags */}
            <meta name="ai-content-creation" content="Cehpoint - Innovative IT Solutions Provider" />
            <meta name="generator" content="Cehpoint Website v2.0" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Cehpoint - Innovative IT Solutions" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:updated_time" content={modifiedTime || new Date().toISOString()} />

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
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:site" content={twitterSite} />

            {/* Additional SEO */}
            <link rel="canonical" href={canonicalUrl} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            
            {/* Bing Webmaster */}
            <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
            
            {/* Yandex Webmaster */}
            <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {schema}
                </script>
            )}

            {/* Organization Schema for AI Discovery */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "@id": "https://www.cehpoint.co.in/#organization",
                    "name": "Cehpoint",
                    "alternateName": ["Cehpoint IT Solutions", "Cehpoint Technologies"],
                    "url": "https://www.cehpoint.co.in",
                    "logo": "https://www.cehpoint.co.in/favicon.svg",
                    "description": "Leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, and digital transformation services.",
                    "founder": {
                        "@type": "Person",
                        "name": "Jit Banerjee",
                        "jobTitle": "Founder & CEO"
                    },
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Labpur, Sandipan Patsala Para",
                        "addressLocality": "Bolpur",
                        "addressRegion": "West Bengal",
                        "postalCode": "731303",
                        "addressCountry": "IN"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-90911-56095",
                        "contactType": "customer service",
                        "email": "contact@cehpoint.co.in",
                        "availableLanguage": ["English", "Hindi", "Bengali"]
                    },
                    "sameAs": [
                        "https://www.linkedin.com/company/cehpoint"
                    ],
                    "knowsAbout": [
                        "Software Development",
                        "Artificial Intelligence",
                        "Cybersecurity",
                        "Cloud Computing",
                        "Digital Transformation",
                        "E-commerce Solutions",
                        "Fintech Development",
                        "EdTech Platforms"
                    ],
                    "areaServed": "Worldwide"
                })}
            </script>

            {/* WebSite Schema with SearchAction */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "@id": "https://www.cehpoint.co.in/#website",
                    "url": "https://www.cehpoint.co.in",
                    "name": "Cehpoint - Innovative IT Solutions",
                    "description": "Leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, and digital transformation services.",
                    "publisher": {
                        "@id": "https://www.cehpoint.co.in/#organization"
                    },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": "https://www.cehpoint.co.in/search?q={search_term_string}"
                        },
                        "query-input": "required name=search_term_string"
                    },
                    "inLanguage": "en-US"
                })}
            </script>
        </Helmet>
    );
}