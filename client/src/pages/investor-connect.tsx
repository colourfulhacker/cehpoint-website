import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SwipeDeck from "@/components/investor/swipe-deck";
import MatchReveal from "@/components/investor/match-reveal";
import InvestorFAQ from "@/components/investor/investor-faq";
// import FinalPitch from "@/components/investor/final-pitch";
import { Handshake } from "lucide-react";
import { Idea } from "@/data/investor-ideas";
import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useTranslation } from "react-i18next";

export default function InvestorConnect() {
    const { t } = useTranslation();
    const [view, setView] = useState<"swipe" | "match" | "pitch">("swipe");
    const [matchedIdea, setMatchedIdea] = useState<Idea | null>(null);

    const handleMatch = (idea: Idea) => {
        setMatchedIdea(idea);
        setView("match");
    };

    const handleProceed = () => {
        setView("pitch");
    };

    return (
        <div className="min-h-screen pt-20 bg-background overflow-x-hidden relative">
            <SEO 
                title="Investor Connect | Discover Unicorns" 
                description="Swipe on top startup ideas, match with founders, and own 100% of a profitable tech startup." 
                url="https://www.cehpoint.co.in/investor-connect"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Investor Connect", url: "https://www.cehpoint.co.in/investor-connect" }
                ]}
            />
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 py-4 md:py-8 pb-16">
                <AnimatePresence mode="wait">
                    {view === "swipe" && (
                        <motion.div
                            key="swipe"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-center mb-4 md:mb-8">
                                <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4 border-primary/20">
                                    <span className="text-sm font-medium text-primary flex items-center gap-2">
                                        <Handshake className="w-4 h-4" /> {t("pages.investor.eyebrow")}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                    {t("pages.investor.title")} <span className="text-primary">{t("pages.investor.titleAccent")}</span>
                                </h1>
                                <p className="text-muted-foreground max-w-xl mx-auto">
                                    {t("pages.investor.subtitle")}
                                </p>
                            </div>

                            <SwipeDeck onMatch={handleMatch} />
                        </motion.div>
                    )}

                    {view === "match" && matchedIdea && (
                        <motion.div
                            key="match"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MatchReveal idea={matchedIdea} onProceed={handleProceed} />
                        </motion.div>
                    )}

                    {view === "pitch" && matchedIdea && (
                        <motion.div
                            key="pitch"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <InvestorFAQ />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
