import { Helmet } from "react-helmet-async";

interface FAQPageSchemaProps {
    pageId?: string;
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

export default function FAQPageSchema({ pageId = "faq-schema", faqs }: FAQPageSchemaProps) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((q) => ({
                        "@type": "Question",
                        "name": q.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": q.answer
                        }
                    }))
                })}
            </script>
        </Helmet>
    );
}