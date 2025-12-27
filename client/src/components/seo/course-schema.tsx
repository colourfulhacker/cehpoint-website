import { useEffect } from "react";

interface CourseSchemaProps {
    name: string;
    description: string;
    provider?: {
        name: string;
        url: string;
    };
    url?: string;
    courseMode?: "online" | "offline" | "blended";
    educationalLevel?: string;
    timeRequired?: string; // ISO 8601 duration format (e.g., "P3M" for 3 months)
    hasCourseInstance?: {
        courseMode?: string;
        courseWorkload?: string;
        instructor?: string;
    }[];
    offers?: {
        price: number;
        currency: string;
        availability?: string;
    };
}

export default function CourseSchema({
    name,
    description,
    provider = {
        name: "Cehpoint",
        url: "https://www.cehpoint.co.in"
    },
    url,
    courseMode = "online",
    educationalLevel = "Beginner to Advanced",
    timeRequired = "P3M", // 3 months default
    hasCourseInstance = [],
    offers
}: CourseSchemaProps) {
    useEffect(() => {
        const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : provider.url);

        const schema: any = {
            "@context": "https://schema.org",
            "@type": "Course",
            name: name,
            description: description,
            provider: {
                "@type": "Organization",
                name: provider.name,
                url: provider.url,
                "@id": `${provider.url}/#organization`
            },
            url: currentUrl,
            courseMode: courseMode,
            educationalLevel: educationalLevel,
            timeRequired: timeRequired
        };

        // Add course instances if provided
        if (hasCourseInstance.length > 0) {
            schema.hasCourseInstance = hasCourseInstance.map((instance) => ({
                "@type": "CourseInstance",
                courseMode: instance.courseMode || courseMode,
                ...(instance.courseWorkload && { courseWorkload: instance.courseWorkload }),
                ...(instance.instructor && {
                    instructor: {
                        "@type": "Person",
                        name: instance.instructor
                    }
                })
            }));
        }

        // Add pricing offers if provided
        if (offers) {
            schema.offers = {
                "@type": "Offer",
                price: offers.price,
                priceCurrency: offers.currency,
                availability: offers.availability || "https://schema.org/InStock"
            };
        }

        const scriptId = `course-schema-${name.toLowerCase().replace(/\s+/g, '-')}`;
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
    }, [name, description, provider, url, courseMode, educationalLevel, timeRequired, hasCourseInstance, offers]);

    return null;
}
