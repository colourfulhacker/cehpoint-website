import { Helmet } from "react-helmet-async";

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
    timeRequired?: string;
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
    timeRequired = "P3M",
    hasCourseInstance = [],
    offers
}: CourseSchemaProps) {
    const currentUrl = url || provider.url;

    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Course",
        name,
        description,
        provider: {
            "@type": "Organization",
            name: provider.name,
            url: provider.url,
            "@id": `${provider.url}/#organization`
        },
        url: currentUrl,
        courseMode,
        educationalLevel,
        timeRequired,
        inLanguage: "en-IN",
    };

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

    if (offers) {
        schema.offers = {
            "@type": "Offer",
            price: offers.price,
            priceCurrency: offers.currency,
            availability: offers.availability || "https://schema.org/InStock"
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
