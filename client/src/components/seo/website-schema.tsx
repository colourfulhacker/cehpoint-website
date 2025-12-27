import { useEffect } from "react";

interface WebSiteSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    hasSearchAction?: boolean;
    searchUrl?: string;
}

export default function WebSiteSchema({
    name = "Cehpoint - Innovative IT Solutions",
    description = "Leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, and digital transformation services.",
    url = "https://www.cehpoint.co.in",
    hasSearchAction = false,
    searchUrl = "https://www.cehpoint.co.in/search?q={search_term_string}"
}: WebSiteSchemaProps) {
    useEffect(() => {
        const schema: any = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${url}/#website`,
            name: name,
            description: description,
            url: url,
            publisher: {
                "@type": "Organization",
                "@id": `${url}/#organization`
            },
            inLanguage: "en-US"
        };

        // Add search action if enabled
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

        const scriptId = "website-schema";
        let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;

        if (!scriptTag) {
            scriptTag = document.createElement("script");
            scriptTag.id = scriptId;
            scriptTag.type = "application/ld+json";
            document.head.appendChild(scriptTag);
        }

        scriptTag.textContent = JSON.stringify(schema);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, [name, description, url, hasSearchAction, searchUrl]);

    return null;
}
