import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingBag, Globe, Camera, Heart, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { InsightSEO } from "@/components/seo/insight-seo";
import { formatArticleDate } from "@/lib/date-utils";

export default function FashionTechRevolution() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <InsightSEO
                title="Direct to Consumer: The Digital Fashion Wave"
                description="Turn your small boutique into a national brand. Discover how local fashion sellers are using apps to beat algorithms and build loyal communities."
                articleSlug="fashion-tech-revolution"
                publishedDate="2024-03-15"
                category="Direct to Consumer"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/insights" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 mb-8 pl-0 hover:pl-2">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Badge className="mb-4" variant="secondary">Direct to Consumer</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        From Home Boutique to Global Brand: <span className="text-gradient">The Digital Fashion Wave</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <ShoppingBag className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Retail Freedom</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Published: {formatArticleDate("2024-03-15")}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Updated: March 15, 2024</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/fashion-hero.png" alt="Fashion Boutique App" className="w-full h-auto rounded-xl mb-8 shadow-2xl"  decoding="async" fetchPriority="high"/>
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        Instagram is great, but you don't own it. The algorithm changes, and your sales drop. The smart boutique owners are moving their customers from "Social Followers" to <span className="text-primary font-bold">"App Users"</span>.
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Rented Land" Problem</h2>
                    <p className="text-foreground/90">
                        Running a business solely on WhatsApp or Instagram is risky. You are building your house on rented land. If your account gets blocked, your business vanishes overnight. Plus, managing 500 DMs for orders is a recipe for burnout.
                    </p>
                    <p className="text-foreground/90">
                        <strong>Ownership is power.</strong> When you have your own App, you own the customer data. You can send Push Notifications (which have 10x better open rates than emails) whenever you launch a new collection.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <Heart className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            Premium Retail Tech Stack
                        </h3>
                        <ul className="text-foreground/90 list-none p-0 space-y-2">
                            <li>• <strong>Virtual Try-On:</strong> Using <strong>AR.js</strong>, customers can see how jewellery or eyewear looks on them directly through the app camera, reducing purchase hesitation.</li>
                            <li>• <strong>Instant Engagement:</strong> <strong>FCM (Firebase Cloud Messaging)</strong> allows for hyper-targeted "flash sale" notifications that have a 25% higher click-through rate than Instagram posts.</li>
                            <li>• <strong>Smart Suggestions:</strong> A <strong>Collaborative Filtering</strong> engine suggests matching accessories based on what other VIP users are buying.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">What You Can Sell?</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">Curated Collections</h4>
                            <p className="text-foreground/90">
                                Don't just sell clothes. Sell "Looks". Curate a jewellery piece that matches a saree perfectly. Bundling increases your average order value.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">Reselling Network</h4>
                            <p className="text-foreground/90">
                                Empower others. Use your app to create a network of resellers who share your products in their circles. You become the wholesaler; they become your sales force.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The Tech Upgrade</h2>
                    <p className="text-foreground/90">
                        Cehpoint's <strong>Boutique App</strong> is designed for visual selling. It's not just a catalog; it's an experience.
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                        <li><strong>Live Selling Integration:</strong> Go live in-app to showcase products.</li>
                        <li><strong>Try-on Requests:</strong> Let premium customers request home visits.</li>
                        <li><strong>Smart Inventory:</strong> Auto-hide products when they go out of stock.</li>
                    </ul>

                    <p className="text-foreground/90 font-bold mt-8">
                        Don't just be an Instagram page. Be a Brand.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Launch Your Fashion Brand</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        See Boutique App Demos
                    </Link>
                </motion.div>
            </div>
        </main >
    );
}
