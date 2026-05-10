import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Coffee, MessageSquare, Clock, Calendar } from "lucide-react";
import { getYesterdayDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";

export default function HospitalityAIConcierge() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Reviving the Digital Front Desk: The $1,000 AI Concierge"
                description="How an independent boutique hotel cut OTA commission fees and secured 2:00 AM overseas bookings instantly."
                articleSlug="hospitality-ai-concierge"
                publishedDate="2024-03-24"
                category="Travel & Hospitality"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4 bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border-rose-500/20">Hospitality & Travel</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        Reviving the Digital Front Desk: The <span className="text-rose-500">$1,000 AI Concierge</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-gray-300/80 border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-rose-500/70" />
                            <span>Published: {getYesterdayDate()}</span>
                        </div>
                        <div className="flex items-center text-green-400 font-semibold">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Updated: Today</span>
                        </div>
                        <div className="flex items-center text-gray-200">
                            <Coffee className="w-4 h-4 mr-2 text-rose-500/70" />
                            <span>Case Study</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop" alt="Hospitality Tech AI Concierge" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90" />

                    <p className="lead text-xl font-medium mb-8">
                        In hospitality, the guest experience begins long before check-in. However, independent boutique hotels often cannot afford a 24/7 dedicated reservation call center, leading to lost bookings and frustrated travelers.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">The Before: The Abandoned Booking</h2>
                    <p>
                        A critically acclaimed 40-room boutique hotel in a high-traffic tourist district was facing a strange crisis. They were highly rated, but their direct website conversions were abysmal compared to costly Third-Party Booking sites (OTAs) that charge 15-25% commission.
                    </p>
                    <p>
                        Data analytics revealed the problem: travelers from different time zones were hitting the hotel's website at 2:00 AM local time, had specific questions ("Do you have gluten-free breakfast?", "Is there a parking fee?"), but finding no one to answer the live chat, they immediately bounced to Expedia or Booking.com to book a competitor.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-rose-500">The Context-Rich AI Concierge</h2>
                    <p>
                        We bypassed generic, frustrating "decision tree" chatbots and implemented an advanced, natural language AI Concierge directly into their website and WhatsApp channels. The entire setup was capped at <strong>$900</strong>.
                    </p>
                    <ul>
                        <li><strong>Deep Knowledge Retrieval:</strong> Using <strong>FAISS (Facebook AI Similarity Search)</strong>, the LLM retrieves property-specific data like room layouts and local restaurant secrets in milliseconds.</li>
                        <li><strong>Voice-to-Text Integration:</strong> Guests can leave voice notes on WhatsApp which are processed via <strong>OpenAI Whisper API</strong>, allowing for natural, "hands-free" concierge requests.</li>
                        <li><strong>Serverless Scale:</strong> The entire logic is hosted on <strong>Cloudflare Workers</strong>, ensuring 24/7 availability with near-zero latency for international travelers.</li>
                    </ul>

                    <div className="my-8 p-6 bg-muted border-l-4 border-rose-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><MessageSquare className="text-rose-500" /> The After: OTA Independence</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>Direct Bookings:</strong> Increased by <strong>28%</strong> within 60 days, directly saving the hotel thousands in 20% OTA commission fees.</li>
                            <li><strong>Staff Efficiency:</strong> Front desk staff saved an average of <strong>4 hours/shift</strong> on repetitive local information queries.</li>
                            <li><strong>Guest Hack:</strong> The "Local Secrets" mode, which suggests hidden gems based on real-time crowd data, became the hotel's #1 mentioned feature in guest reviews.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                    <p>
                        An exceptional hospitality experience is defined by anticipating needs and providing instant answers. A sub-$1,000 AI injection can transform an independent hotel website from a static brochure into a proactive, commission-saving sales engine.
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        Elevate Your Guest Experience
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
