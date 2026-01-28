
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, GraduationCap, Laptop, Users } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function EdtechEvolutionArticle() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-16">
            <Helmet>
                <title>EdTech 2.0: Moving Beyond the Classroom - Cehpoint Insights</title>
                <meta name="description" content="Local coaching centers are dying. Digital academies are thriving. Learn how to transform your teaching skill into a scalable global business." />
                <meta name="keywords" content="edtech, online teaching, LMS app, coaching business, digital academy, online course platform" />
                <meta property="og:title" content="EdTech 2.0: Moving Beyond the Classroom" />
                <meta property="og:description" content="Local coaching centers are dying. Digital academies are thriving. Learn how to transform your teaching skill into a scalable global business." />
                <meta property="og:image" content="/assets/blog/edtech-hero.png" />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/assets/blog/edtech-hero.png" />
            </Helmet>

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
                    <Badge className="mb-4" variant="secondary">Education Technology</Badge>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
                        EdTech 2.0: <span className="text-gradient">Moving Beyond the Classroom</span>
                    </h1>
                    <div className="flex items-center space-x-6 text-muted-foreground border-b border-border pb-8">
                        <div className="flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2" aria-hidden="true" />
                            <span>Future of Learning</span>
                        </div>
                        <div className="flex items-center">
                            <span>November 5, 2025</span>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-lead:text-foreground prose-strong:text-primary prose-a:text-primary prose-ul:text-foreground prose-li:text-foreground prose-blockquote:text-foreground">
                    <img src="/assets/blog/edtech-hero.png" alt="Modern EdTech Classroom" className="w-full h-auto rounded-xl mb-8 shadow-2xl" />
                    <p className="lead text-xl text-foreground font-medium mb-8">
                        The era of the "General Tuition Center" is over. The future belongs to the <span className="text-primary font-bold">Niche Digital Academy</span>. Why teach 20 kids in a room when you can teach 2,000 across the state?
                    </p>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">The "Geography" Limitation</h2>
                    <p className="text-foreground/90">
                        Traditional coaching businesses are capped by geography. You can only attract students who live within 5km. This limits your revenue, your growth, and your impact.
                    </p>
                    <p className="text-foreground/90">
                        <strong>EdTech removes the walls.</strong> A math genius in a small town can now be the "Star Tutor" for the entire country. The best teachers are no longer local secrets; they are national brands.
                    </p>

                    <div className="my-12 p-8 bg-secondary/10 rounded-2xl border-l-4 border-primary">
                        <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground">
                            <Laptop className="w-6 h-6 mr-3 text-primary" aria-hidden="true" />
                            Content is the New Asset
                        </h3>
                        <p className="mb-0 text-foreground/90">
                            In a physical class, you teach the same thing every year. It's repetitive labor. In an App, you record once, and sell forever. Your knowledge becomes a <strong>Digital Asset</strong> that earns while you sleep.
                        </p>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">What Sells Now?</h2>
                    <div className="grid md:grid-cols-2 gap-8 my-8">
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">Hyper-Niche Skills</h4>
                            <p className="text-foreground/90">
                                Don't just teach "English". Teach "English for IT Interviews". Specificity builds authority and commands higher prices.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-foreground mb-2">Vernacular Learning</h4>
                            <p className="text-foreground/90">
                                The biggest market isn't English speakers. It's the millions wanting to learn coding, finance, or business in Hindi, Bengali, or Tamil.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Launch Your Academy</h2>
                    <p className="text-foreground/90">
                        Building an app sounds expensive, but it's not. Cehpoint provides a white-label <strong>LMS (Learning Management System)</strong> app that includes:
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-foreground/90">
                        <li><strong>Secure Video Player:</strong> Prevent screen recording and piracy.</li>
                        <li><strong>Live Classes:</strong> Integrated Zoom/Meet alternative.</li>
                        <li><strong>Automated Tests:</strong> Instant results and analytics for students.</li>
                    </ul>

                    <p className="text-foreground/90 font-bold mt-8">
                        Your knowledge is valuable. Don't let geography limit its worth.
                    </p>

                </article>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Digitize Your Institute</h2>
                    <Link href="/services/business-app-catalog" className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg hover:shadow-xl transform duration-200">
                        See Education App Demos
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
