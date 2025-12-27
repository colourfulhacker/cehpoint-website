import { useEffect } from "react";

interface ServiceSchemaProps {
    name: string;
    description: string;
    serviceType: string;
    provider?: {
        name: string;
        url: string;
    };
    areaServed?: string | string[];
    hasOfferCatalog?: boolean;
    category?: string;
    url?: string;
}

export default function ServiceSchema({
    name,
    description,
    serviceType,
    provider = {
        name: "Cehpoint",
        url: "https://www.cehpoint.co.in"
    },
    areaServed = ["IN", "US", "UK", "Global"],
    hasOfferCatalog = false,
    category = "Information Technology",
    url
}: ServiceSchemaProps) {
    useEffect(() => {
        const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : provider.url);

        const schema: any = {
            "@context": "https://schema.org",
            "@type": "Service",
            name: name,
            description: description,
            serviceType: serviceType,
            provider: {
                "@type": "Organization",
                name: provider.name,
                url: provider.url,
                "@id": `${provider.url}/#organization`
            },
            category: category,
            url: currentUrl
        };

        // Add area served
        if (Array.isArray(areaServed)) {
            schema.areaServed = areaServed.map((area) => ({
                "@type": "Country",
                name: area
            }));
        } else {
            schema.areaServed = {
                "@type": "Country",
                name: areaServed
            };
        }

        // Add offer catalog if specified
        if (hasOfferCatalog) {
            schema.hasOfferCatalog = {
                "@type": "OfferCatalog",
                name: `${name} Services`,
                itemListElement: [
                    {
                        "@type": "OfferCatalog",
                        name: "Consultation Services"
                    },
                    {
                        "@type": "OfferCatalog",
                        name: "Development Services"
                    },
                    {
                        "@type": "OfferCatalog",
                        name: "Support Services"
                    }
                ]
            };
        }

        // Generate unique ID based on service name
        const scriptId = `service-schema-${name.toLowerCase().replace(/\s+/g, '-')}`;
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
    }, [name, description, serviceType, provider, areaServed, hasOfferCatalog, category, url]);

    return null;
}
