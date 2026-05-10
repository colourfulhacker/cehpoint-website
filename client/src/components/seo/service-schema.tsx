import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    category?: string;
    serviceType?: string;
    provider?: string;
    hasOfferCatalog?: boolean;
}

export default function ServiceSchema({
    name,
    description,
    url,
    category = "IT Services",
    serviceType = "IT Services",
    provider = "Cehpoint",
    hasOfferCatalog = false
}: ServiceSchemaProps) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": name,
                    "description": description,
                    "url": url,
                    "provider": {
                        "@type": "Organization",
                        "name": provider,
                        "url": "https://www.cehpoint.co.in"
                    },
                    "serviceType": serviceType || category,
                    "areaServed": "Worldwide",
                    ...(hasOfferCatalog && {
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": `${name} Services`,
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Development" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Implementation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Support & Maintenance" } }
                            ]
                        }
                    })
                })}
            </script>
        </Helmet>
    );
}