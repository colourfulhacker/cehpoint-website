import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, FileText, Download, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProposalPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000); // 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleGetProposal = () => {
        window.location.href = "https://proposals.cehpoint.co.in/";
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-4 right-4 bottom-4 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto w-auto md:w-full max-w-xl z-50"
                    >
                        <div className="glass-intense rounded-3xl p-1 border border-primary/20 shadow-2xl overflow-hidden relative">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                            <div className="bg-background/40 backdrop-blur-md rounded-[1.4rem] p-6 md:p-8 relative">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/80 transition-colors text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/25 flex-shrink-0">
                                        <FileText className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                                            <Zap className="w-3 h-3" />
                                            Instant Access
                                        </div>
                                        <h3 className="text-2xl font-display font-bold leading-tight">
                                            Get Your Proposal in 5 Minutes
                                        </h3>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <p className="text-lg text-foreground/90 leading-relaxed">
                                        Skip the long discussions. Describe your requirements and get an <span className="font-bold text-primary">instant, downloadable quotation</span>.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/30 p-2 rounded-lg">
                                            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 flex-shrink-0">
                                                <ShieldCheck className="w-3.5 h-3.5" />
                                            </div>
                                            <span>No Sales Calls</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground bg-secondary/30 p-2 rounded-lg">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                                                <Download className="w-3.5 h-3.5" />
                                            </div>
                                            <span>Download & Print</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground italic">
                                        *Nobody will disturb you unless you choose to contact us.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button
                                        onClick={handleGetProposal}
                                        className="btn-primary flex-1 py-6 text-lg font-bold shadow-xl shadow-primary/20 group"
                                    >
                                        Generate Proposal Now
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
                </>
            )}
        </AnimatePresence>
    );
}
