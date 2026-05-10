import { Helmet } from "react-helmet-async";

interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    image?: string;
    tags?: string[];
}

export default function ArticleSchema({
    title,
    description,
    url,
    author = "Cehpoint",
    publishedTime,
    modifiedTime,
    image = "/og-image.svg",
    tags = []
}: ArticleSchemaProps) {
    const baseUrl = "https://www.cehpoint.co.in";
    const absoluteImage = image.startsWith('http') ? image : `${baseUrl}${image}`;
    const now = new Date().toISOString();

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "@id": url,
                    "headline": title,
                    "description": description,
                    "image": absoluteImage,
                    "author": {
                        "@type": "Organization",
                        "name": author,
                        "url": baseUrl
                    },
                    "publisher": {
                        "@type": "Organization",
                        "@id": "https://www.cehpoint.co.in/#organization"
                    },
                    "datePublished": publishedTime || now,
                    "dateModified": modifiedTime || now,
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": url
                    },
                    "articleSection": tags[0] || "Technology",
                    "keywords": tags.join(", "),
                    "wordCount": description.split(" ").length * 10,
                    "inLanguage": "en-US",
                    "isAccessibleForFree": true,
                    "speakable": {
                        "@type": "SpeakableSpecification",
                        "cssSelector": ["article h1", "article .description", "article .summary"]
                    }
                })}
            </script>
        </Helmet>
    );
}