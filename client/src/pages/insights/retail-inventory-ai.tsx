import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, BarChart, Clock, Calendar } from "lucide-react";
import { formatArticleDate } from "@/lib/date-utils";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";

export default function RetailInventoryAI() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Ending Stockouts: Sub-$1,000 Retail AI Pipeline"
                description="See how a retail chain cut inventory waste by 40% utilizing machine learning to predict consumer demand automatically."
                articleSlug="retail-inventory-ai"
                publishedDate="2025-04-25"
                category="Retail & E-commerce"
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
                    <Badge className="mb-4 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20">Retail & E-commerce</Badge>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                        Ending Stockouts: How a $1k Machine Learning Pipeline Saved a Retailer <span className="text-emerald-500">20% in Lost Revenue</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Published: {formatArticleDate("2025-04-25")}</span>
                        </div>
                        <div className="flex items-center text-green-500 font-medium">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>Updated: April 25, 2025</span>
                        </div>
                        <div className="flex items-center">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            <span>Case Study</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground/90 prose-strong:text-primary">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=600&fit=crop" alt="Retail E-commerce technology" className="w-full h-auto rounded-xl mb-8 shadow-2xl opacity-90"  decoding="async" fetchPriority="high"/>

                    <p className="lead text-xl font-medium mb-8">
                        Inventory mismanagement is a silent killer for mid-sized retailers. Overstock ties up vital working capital, while stockouts drive fiercely loyal customers straight to competitors. We've proven that AI-driven replenishment isn't just for giants like Amazon or Walmart.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">The Before: Flying Blind</h2>
                    <p>
                        A prominent consumer goods retailer with 5 physical locations and a growing Shopify presence was struggling to forecast demand. Regional managers were ordering stock based solely on "gut feeling" and last year's static sales data.
                    </p>
                    <p>
                        This resulted in a frustrating cycle: popular items sold out weeks before restock shipments arrived, while warehouses swelled with unsold, obsolete inventory. They were losing nearly <strong>₹12 Lakhs annually</strong> in potential revenue simply by not having the right items on the shelf when customers walked in.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6">The Smart Forecasting Setup</h2>
                    <p>
                        Rather than investing heavily in a massive ERP overhaul, we proved that agility beats scale. We deployed a targeted Machine Learning pipeline for a fraction of traditional enterprise costs (around <strong>$1,000 initial integration</strong>).
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 my-8 text-sm">
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Technical Stack</h3>
                            <ul className="space-y-2">
                                <li>• <strong>Prophet (Meta):</strong> For robust time-series forecasting across multiple seasons.</li>
                                <li>• <strong>Scikit-learn:</strong> To calculate "Elasticity of Demand" based on price changes.</li>
                                <li>• <strong>Shopify API:</strong> Seamless real-time syncing of digital and physical stock.</li>
                                <li>• <strong>Pandas/NumPy:</strong> For high-speed data cleaning and multi-channel reconciliation.</li>
                            </ul>
                        </div>
                        <div className="bg-card/50 p-6 rounded-xl border border-border">
                            <h3 className="text-lg font-bold mb-4 text-primary">Key Insight</h3>
                            <p>We integrated <strong>Hyperlocal Weather Data APIs</strong> into the model. This allowed the AI to predict an 11% surge in "Home Comfort" products 48 hours before an unseasonal heatwave, ensuring stock reached the shelves *before* the rush.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Beyond the Spreadsheet</h2>
                    <p>
                        Most small retailers use static reorder points. Our system used <strong>Dynamic Reorder Logic</strong>. The AI constantly recalculated the "Safety Stock" levels based on current lead times from suppliers and fluctuating shipping costs, ensuring profit margins were protected even during supply chain disruptions.
                    </p>

                    <div className="my-8 p-6 bg-muted border-l-4 border-emerald-500 rounded-r-lg">
                        <p className="text-xl font-bold mb-2 flex items-center gap-2"><BarChart className="text-emerald-500" /> The After: Pure Efficiency</p>
                        <ul className="m-0 space-y-2">
                            <li><strong>Revenue Recovery:</strong> Captured ₹9 Lakhs in previously "lost" revenue by eliminating stockouts of high-demand items.</li>
                            <li><strong>Inventory Liquidity:</strong> Reduced capital tied up in slow-moving stock by 40%, freeing up ₹5 Lakhs for marketing.</li>
                            <li><strong>Labor Savings:</strong> Purchasing managers saved 15 hours a week previously spent on manual calculation and audit.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
                    <p>
                        With modern cloud data warehouses and accessible machine learning models, predictive capabilities that were once exclusive to Amazon and Walmart can now be deployed for regional retailers on a minimal budget, offering a remarkable return on technical investment.
                    </p>
                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center border-t border-border pt-12"
                >
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-transform hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 shadow-lg shadow-primary/20">
                        Modernize Your Commerce Operations
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
