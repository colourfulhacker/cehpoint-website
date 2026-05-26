import SEO from "@/components/seo";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { Link } from "wouter";
import { Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen bg-background text-foreground">
            <SEO
                title="About Us | Cehpoint"
                description="Learn about Cehpoint's mission and vision as a leading IT and cybersecurity company."
                keywords={["About Cehpoint", "Mission", "Vision", "IT Company"]}
                url="https://www.cehpoint.co.in/about"
                canonical="https://www.cehpoint.co.in/about"
            />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "About", url: "https://www.cehpoint.co.in/about" }
                ]}
            />
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight">
                        About <span className="text-primary">Cehpoint</span>
                    </h1>
                </div>
            </section>
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
                    <div>
                        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                            <Rocket className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To empower global enterprises and startups with cutting-edge technology, unparalleled cybersecurity, and scalable digital solutions that drive growth and resilience in a rapidly evolving digital landscape.
                        </p>
                    </div>
                    <div>
                        <div className="inline-flex items-center justify-center p-4 bg-blue-500/10 rounded-full mb-6">
                            <Target className="w-8 h-8 text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To be the world's most trusted partner in digital transformation and security, creating an ecosystem where technology operates seamlessly, securely, and intelligently for everyone.
                        </p>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                        <Link href="/leadership-search" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                            <Users className="w-5 h-5" />
                            Explore our Leadership Search & Corporate Ecosystem
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
