import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
    ArrowLeft, Calendar, Clock, Volume2, VolumeX,
    Languages, Play, Pause, Square, ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InsightSEO } from "@/components/seo/insight-seo";
import { ArticleData, Language } from "@/types/insight-content";
import { insightArticles } from "@/data/insights/insight-content-data";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface InsightRendererProps {
    article: ArticleData;
}

// Map an article category (English) to the most relevant on-site service route.
const categoryToServiceRoute: Record<string, { href: string; label: { en: string; hi: string; bn: string } }> = {
    "Cyber Threat": { href: "/services/cyber-security", label: { en: "Cyber Security service", hi: "साइबर सुरक्षा सेवा", bn: "সাইবার সিকিউরিটি সার্ভিস" } },
    "Corporate Security": { href: "/services/cyber-crime-investigation", label: { en: "Cyber Crime Investigation", hi: "साइबर अपराध जाँच", bn: "সাইবার ক্রাইম ইনভেস্টিগেশন" } },
    "Case Study": { href: "/services/cyber-security", label: { en: "Cyber Security service", hi: "साइबर सुरक्षा सेवा", bn: "সাইবার সিকিউরিটি সার্ভিস" } },
    "HR Prevention": { href: "/services/cyber-crime-investigation/methodology", label: { en: "Investigation Methodology", hi: "जाँच कार्यप्रणाली", bn: "ইনভেস্টিগেশন মেথডোলজি" } },
    "Financial Freedom": { href: "/incubation", label: { en: "Cehpoint Incubation", hi: "सेहपॉइंट इनक्यूबेशन", bn: "সেহপয়েন্ট ইনকিউবেশন" } },
    "Direct to Consumer": { href: "/services/ecommerce", label: { en: "E-commerce service", hi: "ई-कॉमर्स सेवा", bn: "ই-কমার্স সার্ভিস" } },
    "Service Industry": { href: "/services/business-app-catalog", label: { en: "Business App Catalog", hi: "बिज़नेस ऐप कैटलॉग", bn: "ব্যবসায়িক অ্যাপ ক্যাটালগ" } },
    "Hyperlocal": { href: "/services/rural-digitalization", label: { en: "Rural Digitalization", hi: "ग्रामीण डिजिटलीकरण", bn: "গ্রামীণ ডিজিটালাইজেশন" } },
};

const fallbackServiceRoute = { href: "/services", label: { en: "Explore our Services", hi: "हमारी सेवाएँ देखें", bn: "আমাদের সেবাসমূহ দেখুন" } };

function pickRelated(currentSlug: string, currentCategoryEn: string): ArticleData[] {
    const all = Object.values(insightArticles);
    const sameCategory = all.filter(a => a.slug !== currentSlug && a.category?.en === currentCategoryEn);
    const others = all.filter(a => a.slug !== currentSlug && a.category?.en !== currentCategoryEn);
    return [...sameCategory, ...others].slice(0, 3);
}

export const InsightRenderer: React.FC<InsightRendererProps> = ({ article }) => {
    const [lang, setLang] = useState<Language>("en");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    const stopTTS = () => {
        if (synth) {
            synth.cancel();
            setIsPlaying(false);
            setIsPaused(false);
        }
    };

    const playTTS = () => {
        if (!synth) return;

        if (isPaused) {
            synth.resume();
            setIsPaused(false);
            setIsPlaying(true);
            return;
        }

        stopTTS();

        // Prepare text to read
        const textToRead = [
            article.title[lang],
            article.description[lang],
            ...article.sections.map(s => s.content?.[lang] || "")
        ].filter(Boolean).join(". ");

        const utterance = new SpeechSynthesisUtterance(textToRead);

        // Set language for TTS
        switch (lang) {
            case "hi": utterance.lang = "hi-IN"; break;
            case "bn": utterance.lang = "bn-IN"; break;
            default: utterance.lang = "en-US"; break;
        }

        utterance.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        utteranceRef.current = utterance;
        synth.speak(utterance);
        setIsPlaying(true);
    };

    const pauseTTS = () => {
        if (synth && isPlaying) {
            synth.pause();
            setIsPaused(true);
            setIsPlaying(false);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => stopTTS();
    }, []);

    const languageNames: Record<Language, string> = {
        en: "English",
        hi: "हिंदी (Hindi)",
        bn: "বাংলা (Bengali)"
    };

    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title={article.title[lang]}
                description={article.description[lang]}
                articleSlug={article.slug}
                publishedDate={article.publishedDate}
                category={article.category[lang]}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <Link href="/insights" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                    </Link>

                    <div className="flex items-center gap-3">
                        {/* Language Switcher */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Languages className="w-4 h-4" />
                                    {languageNames[lang]}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {(Object.keys(languageNames) as Language[]).map((l) => (
                                    <DropdownMenuItem key={l} onClick={() => { setLang(l); stopTTS(); }}>
                                        {languageNames[l]}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* TTS Controls */}
                        <div className="flex items-center bg-secondary/30 rounded-full px-2 py-1 gap-1 border border-border">
                            {!isPlaying && !isPaused ? (
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/20" onClick={playTTS} title="Read Aloud">
                                    <Play className="w-4 h-4 fill-current" />
                                </Button>
                            ) : (
                                <>
                                    {isPaused ? (
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={playTTS}>
                                            <Play className="w-4 h-4 fill-current" />
                                        </Button>
                                    ) : (
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={pauseTTS}>
                                            <Pause className="w-4 h-4 fill-current" />
                                        </Button>
                                    )}
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={stopTTS}>
                                        <Square className="w-4 h-4 fill-current" />
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <motion.div
                    key={lang} // Trigger animation on language change
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="secondary">{article.category[lang]}</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        {article.title[lang]}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Published: {article.publishedDate}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Updated: Today</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    {article.image && (
                        <img
                            src={article.image}
                            alt={article.title[lang]}
                            className="w-full h-auto rounded-xl mb-8 shadow-2xl"
                         decoding="async" fetchPriority="high"/>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {article.sections.map((section, idx) => {
                                switch (section.type) {
                                    case "lead":
                                        return section.content ? <p key={idx} className="lead text-xl text-foreground font-medium mb-8">{section.content[lang]}</p> : null;
                                    case "heading":
                                        return section.content ? <h2 key={idx} className="text-3xl font-bold mt-12 mb-6">{section.content[lang]}</h2> : null;
                                    case "sub-heading":
                                        return section.content ? <h3 key={idx} className="text-2xl font-bold mt-8 mb-4">{section.content[lang]}</h3> : null;
                                    case "paragraph":
                                        return section.content ? <p key={idx} className="text-foreground/90 mb-4">{section.content[lang]}</p> : null;
                                    case "quote":
                                        return section.content ? (
                                            <blockquote key={idx} className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                                                <p className="text-xl italic font-medium">{section.content[lang]}</p>
                                            </blockquote>
                                        ) : null;
                                    case "table":
                                        return (
                                            <div key={idx} className="bg-card border rounded-xl overflow-hidden my-8 overflow-x-auto">
                                                <table className="w-full text-left border-collapse">
                                                    <caption className="sr-only">Data Table</caption>
                                                    <thead>
                                                        <tr className="bg-muted border-b">
                                                            {section.tableData?.headers.map((header, hIdx) => (
                                                                <th key={hIdx} scope="col" className="p-4 font-bold text-foreground">
                                                                    {header[lang]}
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-border">
                                                        {section.tableData?.rows.map((row, rIdx) => (
                                                            <tr key={rIdx}>
                                                                {row.map((cell, cIdx) => (
                                                                    <td key={cIdx} className={`p-4 text-sm text-foreground/90 ${cIdx === 0 ? 'font-semibold bg-muted/20 border-r' : ''}`}>
                                                                        {cell[lang]}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    case "custom-callout":
                                    case "callout":
                                        return (
                                            <div key={idx} className={`pl-6 border-l-4 my-6 space-y-2 ${section.variant === 'success' ? 'border-green-500' : 'border-primary'}`}>
                                                {section.content && <p className="text-xl font-bold text-foreground">{section.content[lang]}</p>}
                                            </div>
                                        );
                                    case "grid":
                                        return (
                                            <div key={idx} className={`grid md:grid-cols-${section.gridData?.columns || 2} gap-8 my-8`}>
                                                {section.gridData?.items.map((item, iIdx) => (
                                                    <div key={iIdx} className="bg-card/50 p-6 rounded-xl border border-border">
                                                        <h3 className="text-xl font-bold mb-4 text-primary">{item.title[lang]}</h3>
                                                        <p className="text-sm text-foreground/90">{item.content[lang]}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    case "list":
                                        return (
                                            <div key={idx} className={`my-8 p-6 bg-muted/50 rounded-xl border-l-4 ${section.variant === 'blue' ? 'border-blue-500' : 'border-primary'}`}>
                                                {section.listData?.title && <p className="text-xl font-bold mb-4">{section.listData.title[lang]}</p>}
                                                <ul className="m-0 space-y-2 list-none p-0">
                                                    {section.listData?.items.map((item, lIdx) => (
                                                        <li key={lIdx} className="flex items-start gap-3 text-foreground/90">
                                                            <span className="text-primary mt-1.5">•</span>
                                                            <span>{item[lang]}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    case "list-item":
                                        return section.content ? <li key={idx} className="text-foreground/90 mb-2 list-none">• {section.content[lang]}</li> : null;
                                    default:
                                        return section.content ? <p key={idx} className="text-foreground/90">{section.content[lang]}</p> : null;
                                }
                            })}
                        </motion.div>
                    </AnimatePresence>
                </article>

                {/* Related Insights */}
                {(() => {
                    const related = pickRelated(article.slug, article.category?.en || "");
                    if (related.length === 0) return null;
                    const heading = lang === 'hi' ? 'संबंधित इनसाइट्स' : lang === 'bn' ? 'সম্পর্কিত ইনসাইট' : 'Related Insights';
                    return (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 border-t border-border pt-12"
                            aria-labelledby="related-insights-heading"
                        >
                            <h2 id="related-insights-heading" className="text-2xl md:text-3xl font-bold mb-8 text-foreground">{heading}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {related.map((r) => (
                                    <Link
                                        key={r.slug}
                                        href={`/insights/${r.slug}`}
                                        className="group block rounded-2xl border border-border/60 bg-card/50 hover:bg-card hover:border-primary/40 transition-all overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                    >
                                        <div className="aspect-[16/9] bg-muted overflow-hidden">
                                            <img
                                                src={r.image}
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <Badge variant="secondary" className="mb-3 text-xs">{r.category?.[lang]}</Badge>
                                            <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">{r.title[lang]}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">{r.description[lang]}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.section>
                    );
                })()}

                {/* Service CTA mapped from category */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 border-t border-border pt-12"
                >
                    {(() => {
                        const mapping = categoryToServiceRoute[article.category?.en || ""] || fallbackServiceRoute;
                        const heading = lang === 'hi' ? 'इस विषय पर हमारी विशेषज्ञता' : lang === 'bn' ? 'এই বিষয়ে আমাদের দক্ষতা' : 'Our expertise on this topic';
                        const seeServiceLabel = lang === 'hi' ? 'सेवा देखें' : lang === 'bn' ? 'সার্ভিস দেখুন' : 'See the service';
                        const primaryCta = lang === 'hi' ? 'विशेषज्ञ से बात करें' : lang === 'bn' ? 'বিশেষজ্ঞের সাথে কথা বলুন' : 'Talk to an Expert';
                        return (
                            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-12 text-center">
                                <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{heading}</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">{mapping.label[lang]}</h2>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={mapping.href}
                                        className="inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold border border-primary/40 hover:bg-primary/10 h-12 px-6 transition"
                                    >
                                        {seeServiceLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-full text-base font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg shadow-primary/20"
                                    >
                                        {primaryCta}
                                    </Link>
                                </div>
                            </div>
                        );
                    })()}
                </motion.div>
            </div>
        </main>
    );
};
