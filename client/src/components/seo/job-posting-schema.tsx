import { useEffect } from "react";

interface JobPostingSchemaProps {
    title: string;
    description: string;
    department: string;
    location: string;
    employmentType: "FULL_TIME" | "INTERN" | "PART_TIME" | "CONTRACTOR";
    salary?: {
        currency: string;
        value: number;
        unitText: "MONTH" | "YEAR";
    };
    datePosted: string;
    validThrough?: string;
    responsibilities: string[];
    requirements: string[];
    applicationUrl: string;
}

export default function JobPostingSchema({
    title,
    description,
    department,
    location,
    employmentType,
    salary,
    datePosted,
    validThrough,
    responsibilities,
    requirements,
    applicationUrl,
}: JobPostingSchemaProps) {
    useEffect(() => {
        // Calculate validThrough as 90 days from datePosted if not provided
        const postedDate = new Date(datePosted);
        const expiryDate = validThrough
            ? new Date(validThrough)
            : new Date(postedDate.getTime() + 90 * 24 * 60 * 60 * 1000);

        const schema = {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: title,
            description: `${description}\n\nKey Responsibilities:\n${responsibilities.map((r) => `• ${r}`).join("\n")}\n\nRequirements:\n${requirements.map((r) => `• ${r}`).join("\n")}`,
            datePosted: datePosted,
            validThrough: expiryDate.toISOString(),
            employmentType: employmentType,
            hiringOrganization: {
                "@type": "Organization",
                name: "Cehpoint",
                sameAs: "https://www.cehpoint.co.in",
                logo: "https://www.cehpoint.co.in/logo.png",
            },
            jobLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: location,
                    addressCountry: "IN",
                },
            },
            ...(salary && {
                baseSalary: {
                    "@type": "MonetaryAmount",
                    currency: salary.currency,
                    value: {
                        "@type": "QuantitativeValue",
                        value: salary.value,
                        unitText: salary.unitText,
                    },
                },
            }),
            applicantLocationRequirements: {
                "@type": "Country",
                name: "IN",
            },
            jobLocationType: "TELECOMMUTE",
            directApply: true,
            applicationContact: {
                "@type": "ContactPoint",
                contactType: "HR",
                email: "hr@cehpoint.co.in",
                url: applicationUrl,
            },
        };

        // Create or update script tag
        const scriptId = `job-schema-${title.replace(/\s+/g, "-").toLowerCase()}`;
        let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;

        if (!scriptTag) {
            scriptTag = document.createElement("script");
            scriptTag.id = scriptId;
            scriptTag.type = "application/ld+json";
            document.head.appendChild(scriptTag);
        }

        scriptTag.textContent = JSON.stringify(schema);

        // Cleanup function to remove script when component unmounts
        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, [
        title,
        description,
        department,
        location,
        employmentType,
        salary,
        datePosted,
        validThrough,
        responsibilities,
        requirements,
        applicationUrl,
    ]);

    return null; // This component doesn't render anything visible
}
