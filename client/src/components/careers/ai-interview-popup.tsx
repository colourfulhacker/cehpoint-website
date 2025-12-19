import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Clock, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIInterviewPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasSeen = localStorage.getItem("hasSeenInterviewPopup");

        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
                localStorage.setItem("hasSeenInterviewPopup", "true");
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleStartInterview = () => {
        window.location.href = "http://interview-ai.cehpoint.co.in/";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
                        onClick={handleClose}
                    />

                    {/* Popup Container - Centered */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-lg pointer-events-auto"
                        >
                            <div className="glass-intense rounded-3xl p-1 border border-primary/20 shadow-2xl overflow-hidden relative">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                                <div className="bg-background/40 backdrop-blur-md rounded-[1.4rem] p-6 md:p-8 relative">
                                    <button
                                        onClick={handleClose}
                                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground z-10"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/25 flex-shrink-0">
                                            <Bot className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                                                <Sparkles className="w-3 h-3" />
                                                Live Now
                                            </div>
                                            <h3 className="text-2xl font-display font-bold leading-tight">
                                                Skip the Wait list
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <p className="text-lg text-foreground/90 leading-relaxed">
                                            Why wait for HR? Our AI Recruiter is ready to interview you <span className="font-bold text-primary">right now</span>.
                                        </p>

                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                                    <Clock className="w-3.5 h-3.5" />
                                                </div>
                                                <span>Instant feedback & evaluation</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                    <Bot className="w-3.5 h-3.5" />
                                                </div>
                                                <span>Unbiased AI-driven process</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            onClick={handleStartInterview}
                                            className="btn-primary flex-1 py-6 text-lg font-bold shadow-xl shadow-primary/20 group"
                                        >
                                            Start Interview Now
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={handleClose}
                                            className="py-6 border-white/10 hover:bg-secondary/50"
                                        >
                                            Maybe Later
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
