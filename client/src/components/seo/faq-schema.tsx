import { useEffect } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
    pageId?: string;
}

export default function FAQSchema({ faqs, pageId = "default" }: FAQSchemaProps) {
    useEffect(() => {
        if (!faqs || faqs.length === 0) return;

        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        };

        const scriptId = `faq-schema-${pageId}`;
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
    }, [faqs, pageId]);

    return null;
}
