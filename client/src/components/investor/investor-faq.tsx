import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InvestorFAQ() {
    const faqs = [
        {
            question: "How does the 100% Equity model work?",
            answer: "Unlike traditional VC where you give up 20-30% equity, with Cehpoint you own 100% of the business. You pay a one-time development fee, and we build, launch, and transfer the entire IP, source code, and assets to you. You are the sole owner."
        },
        {
            question: "What is the 'Zero Tech Risk' guarantee?",
            answer: "We handle the entire technical execution. From architecture to deployment, our expert teams build the product. We also provide 6 months of post-launch support and maintenance. If we fail to deliver the agreed scope, we offer a full refund."
        },
        {
            question: "What happens after I claim a deal?",
            answer: "Once you click 'Claim This Deal', you'll be connected with our investment team via WhatsApp. We'll schedule a call to discuss the business plan, sign a legal agreement, and set up the payment terms. Development starts immediately after."
        },
        {
            question: "Can I customize the idea or features?",
            answer: "Yes! The listed features are a baseline. During the planning phase, we can tailor the features, design, and roadmap to fit your specific vision and market needs."
        },
        {
            question: "Do you help with marketing and growth?",
            answer: "Our primary focus is technical execution. However, we provide a 'Go-to-Market' strategy guide and can connect you with our partner marketing agencies. We ensure the product is SEO-optimized and growth-ready."
        },
        {
            question: "Is the budget fixed?",
            answer: "The listed budget is an estimate for the MVP (Minimum Viable Product). The final cost may vary slightly based on your specific customizations and additional feature requests. We provide a fixed-price quote before starting."
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-16 pb-32">
            <div className="text-center mb-12">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20"
                >
                    <HelpCircle className="w-8 h-8" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">Ownership Journey & FAQ</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    You're one step away from owning this business. Here's how the process works and answers to common questions.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass p-6 md:p-8 rounded-3xl mb-12 bg-card/50 border border-white/10 shadow-2xl"
            >
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b-white/10 last:border-0">
                            <AccordionTrigger className="text-lg font-medium text-left hover:text-primary transition-colors py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>

            <div className="text-center bg-gradient-to-br from-primary/20 to-purple-900/20 p-8 rounded-3xl border border-primary/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to proceed?</h3>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    Connect with our investment team directly on WhatsApp to finalize the deal and start development.
                </p>
                <a
                    href="https://wa.me/919091156095?text=Hi%2C%20I%20am%20interested%20in%20claiming%20an%20investment%20idea%20from%20Cehpoint."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <Button size="lg" className="rounded-full px-8 py-6 text-lg gap-3 shadow-xl shadow-primary/25 hover:scale-105 transition-all">
                        <MessageCircle className="w-6 h-6" />
                        Claim This Deal on WhatsApp
                    </Button>
                </a>
            </div>
        </div>
    );
}
