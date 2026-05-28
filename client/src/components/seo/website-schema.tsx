import { Helmet } from "react-helmet-async";

interface WebSiteSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    hasSearchAction?: boolean;
    searchUrl?: string;
}

export default function WebSiteSchema({
    name = "Cehpoint",
    description = "Enterprise IT, AI, and cybersecurity solutions for startups, enterprises, and government.",
    url = "https://www.cehpoint.co.in",
    hasSearchAction = false,
    searchUrl = "https://www.cehpoint.co.in/insights?q={search_term_string}"
}: WebSiteSchemaProps) {
    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name,
        description,
        url,
        publisher: {
            "@type": "Organization",
            "@id": `${url}/#organization`
        },
        inLanguage: "en-IN"
    };

    if (hasSearchAction) {
        schema.potentialAction = {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: searchUrl
            },
            "query-input": "required name=search_term_string"
        };
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
