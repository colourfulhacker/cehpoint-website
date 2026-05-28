import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
    ArrowLeft, Calendar, Clock, Volume2, VolumeX,
    Languages, Play, Pause, Square
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InsightSEO } from "@/components/seo/insight-seo";
import { ArticleData, Language } from "@/types/insight-content";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface InsightRendererProps {
    article: ArticleData;
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">{lang === 'hi' ? 'क्या आप अपना वर्कफ़्लो ऑटोमेट करने के लिए तैयार हैं?' : lang === 'bn' ? 'আপনি কি আপনার ওয়ার্কফ্লো স্বয়ংক্রিয় করতে প্রস্তুত?' : 'Ready to Automate Your Workflow?'}</h2>
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        {lang === 'hi' ? 'आज ही चर्चा करें' : lang === 'bn' ? 'আজই আলোচনা করুন' : 'Discuss Your Workflow Today'}
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};
