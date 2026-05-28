import { Helmet } from "react-helmet-async";

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
    remote?: boolean;
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
    remote = false,
}: JobPostingSchemaProps) {
    const postedDate = new Date(datePosted);
    const expiryDate = validThrough
        ? new Date(validThrough)
        : new Date(postedDate.getTime() + 90 * 24 * 60 * 60 * 1000);

    const schema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description: `<p>${description}</p><h3>Key Responsibilities</h3><ul>${responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul><h3>Requirements</h3><ul>${requirements.map((r) => `<li>${r}</li>`).join("")}</ul>`,
        datePosted,
        validThrough: expiryDate.toISOString(),
        employmentType,
        industry: department,
        hiringOrganization: {
            "@type": "Organization",
            name: "Cehpoint",
            sameAs: "https://www.cehpoint.co.in",
            logo: "https://www.cehpoint.co.in/og-image.png",
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
        ...(remote && { jobLocationType: "TELECOMMUTE" }),
        directApply: true,
        applicationContact: {
            "@type": "ContactPoint",
            contactType: "HR",
            email: "hr@cehpoint.co.in",
            url: applicationUrl,
        },
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
}
