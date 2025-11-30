import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description,
    keywords = ["IT Consultancy", "Enterprise Outsourcing", "Software Development", "AI Solutions"],
    image = "/og-image.png",
    url = "https://cehpoint.co.in"
}: SEOProps) {
    const siteTitle = "Cehpoint - Innovative IT Solutions";
    const fullTitle = `${title} | ${siteTitle}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
