import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    logo?: string;
    email?: string;
    phone?: string;
    address?: {
        streetAddress?: string;
        addressLocality?: string;
        addressRegion?: string;
        postalCode?: string;
        addressCountry?: string;
    };
    sameAs?: string[];
}

export default function OrganizationSchema({
    name = "Cehpoint",
    description = "Leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, cybersecurity, and digital transformation services.",
    url = "https://www.cehpoint.co.in",
    logo = "https://www.cehpoint.co.in/og-image.png",
    email = "contact@cehpoint.co.in",
    phone = "+91 90911 56095",
    address = {
        streetAddress: "Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur",
        addressLocality: "Bolpur",
        addressRegion: "West Bengal",
        postalCode: "731303",
        addressCountry: "IN"
    },
    sameAs = [
        "https://www.linkedin.com/company/cehpoint",
        "https://twitter.com/cehpoint"
    ]
}: OrganizationSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name,
        description,
        url,
        logo: {
            "@type": "ImageObject",
            url: logo,
            width: 1200,
            height: 630
        },
        image: logo,
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email,
            ...(phone && { telephone: phone }),
            areaServed: "Worldwide",
            availableLanguage: ["English", "Hindi", "Bengali"]
        },
        address: {
            "@type": "PostalAddress",
            ...(address.streetAddress && { streetAddress: address.streetAddress }),
            ...(address.addressLocality && { addressLocality: address.addressLocality }),
            ...(address.addressRegion && { addressRegion: address.addressRegion }),
            ...(address.postalCode && { postalCode: address.postalCode }),
            ...(address.addressCountry && { addressCountry: address.addressCountry })
        },
        ...(sameAs.length > 0 && { sameAs }),
        foundingDate: "2020",
        numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "50-100"
        },
        slogan: "Innovative IT, AI & Cybersecurity Solutions",
        knowsAbout: [
            "Software Development",
            "Artificial Intelligence",
            "Cybersecurity",
            "Cloud Computing",
            "Digital Transformation",
            "Enterprise Solutions"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
