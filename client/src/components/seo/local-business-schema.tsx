import { useEffect } from "react";

interface LocalBusinessSchemaProps {
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
    geo?: {
        latitude?: number;
        longitude?: number;
    };
    openingHours?: string[];
    priceRange?: string;
    paymentAccepted?: string[];
}

export default function LocalBusinessSchema({
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
    geo,
    openingHours = [
        "Monday-Friday 09:00-18:00",
        "Saturday 09:00-14:00"
    ],
    priceRange = "$$-$$$",
    paymentAccepted = ["Cash", "Credit Card", "Bank Transfer", "UPI"]
}: LocalBusinessSchemaProps) {
    useEffect(() => {
        const schema: any = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${url}/#localbusiness`,
            name: name,
            description: description,
            url: url,
            logo: logo,
            image: logo,
            email: email,
            ...(phone && { telephone: phone }),
            address: {
                "@type": "PostalAddress",
                ...(address.streetAddress && { streetAddress: address.streetAddress }),
                addressLocality: address.addressLocality,
                ...(address.addressRegion && { addressRegion: address.addressRegion }),
                ...(address.postalCode && { postalCode: address.postalCode }),
                addressCountry: address.addressCountry
            },
            priceRange: priceRange,
            paymentAccepted: paymentAccepted,
            openingHoursSpecification: openingHours.map((hours) => {
                const match = hours.match(/^([A-Za-z-]+)\s+(\d{2}:\d{2})-(\d{2}:\d{2})$/);
                if (match) {
                    return {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: match[1].split('-'),
                        opens: match[2],
                        closes: match[3]
                    };
                }
                return null;
            }).filter(Boolean)
        };

        // Add geo coordinates if provided
        if (geo && geo.latitude && geo.longitude) {
            schema.geo = {
                "@type": "GeoCoordinates",
                latitude: geo.latitude,
                longitude: geo.longitude
            };
        }

        const scriptId = "localbusiness-schema";
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
    }, [name, description, url, logo, email, phone, address, geo, openingHours, priceRange, paymentAccepted]);

    return null;
}
