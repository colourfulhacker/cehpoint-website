import { useEffect } from "react";

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
    socialProfiles?: string[];
    sameAs?: string[];
}

export default function OrganizationSchema({
    name = "Cehpoint",
    description = "Leading IT consultancy offering enterprise outsourcing, custom software development, AI solutions, cybersecurity, and digital transformation services.",
    url = "https://www.cehpoint.co.in",
    logo = "https://www.cehpoint.co.in/logo.png",
    email = "contact@cehpoint.co.in",
    phone = "+91 33690 29331",
    address = {
        streetAddress: "Cehpoint, Labpur, Sandipan Patsala Para, Birbhum, Bolpur",
        addressLocality: "Bolpur",
        addressRegion: "West Bengal",
        postalCode: "731303",
        addressCountry: "IN"
    },
    socialProfiles = [
        "https://www.linkedin.com/company/cehpoint",
        "https://twitter.com/cehpoint"
    ],
    sameAs = [
        "https://www.linkedin.com/company/cehpoint",
        "https://twitter.com/cehpoint"
    ]
}: OrganizationSchemaProps) {
    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${url}/#organization`,
            name: name,
            description: description,
            url: url,
            logo: {
                "@type": "ImageObject",
                url: logo,
                width: "600",
                height: "60"
            },
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: email,
                ...(phone && { telephone: phone }),
                availableLanguage: ["English", "Hindi"]
            },
            address: {
                "@type": "PostalAddress",
                ...(address.streetAddress && { streetAddress: address.streetAddress }),
                addressLocality: address.addressLocality,
                ...(address.addressRegion && { addressRegion: address.addressRegion }),
                ...(address.postalCode && { postalCode: address.postalCode }),
                addressCountry: address.addressCountry
            },
            ...(sameAs.length > 0 && { sameAs: sameAs }),
            ...(socialProfiles.length > 0 && {
                socialMediaPosting: socialProfiles
            }),
            foundingDate: "2020",
            numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "50-100"
            },
            industry: "Information Technology",
            naics: "541512", // Computer Systems Design Services
            keywords: "IT Consultancy, Software Development, Cybersecurity, AI Solutions, Digital Transformation, Cloud Services, Enterprise Software"
        };

        const scriptId = "organization-schema";
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
    }, [name, description, url, logo, email, phone, address, socialProfiles, sameAs]);

    return null;
}
