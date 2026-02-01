
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Gamepad2, Trophy, Coins, Zap, Monitor, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/seo";
import ServiceSchema from "@/components/seo/service-schema";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export default function GameDevelopmentPage() {
    return (
        <div className="pt-24 min-h-screen">
            <SEO
                title="Game Development & eSports Solutions | Cehpoint"
                description="Affordable game development services. We build Play-to-Earn, Educational, and eSports games with legal compliance and monetization strategies."
                keywords={["Game Development", "P2E Games", "eSports Platform", "Educational Games", "Mobile Game Dev", "Unity Developers"]}
                url="https://www.cehpoint.co.in/services/game-development"
                canonical="https://www.cehpoint.co.in/services/game-development"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.cehpoint.co.in/" },
                    { name: "Services", url: "https://www.cehpoint.co.in/services" },
                    { name: "Game Development", url: "https://www.cehpoint.co.in/services/game-development" }
                ]}
            />

            <ServiceSchema
                name="Game Development Services"
                description="Full-cycle game development for mobile, web, and PC. Specializing in P2E and Educational Gaming."
                serviceType="Software Development"
                category="Game Development"
                url="https://www.cehpoint.co.in/services/game-development"
            />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0a0a1f] text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-[#0a0a1f]/80 to-transparent" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 mb-6 border border-indigo-500/30 backdrop-blur-md">
                            <Gamepad2 className="w-4 h-4 mr-2" />
                            <span className="text-sm font-bold tracking-wider">NEXT-GEN GAMING</span>
                        </div>

                        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl mb-6 tracking-tighter loading-tight text-white drop-shadow-2xl">
                            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Virtual Empire</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                            From high-octane eSports arenas to educational "Play-to-Learn" ecosystems. We create immersive gaming experiences that entertain, educate, and monetize globally.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all hover:scale-105 border-0">
                                    Start Building <Zap className="ml-2 w-5 h-5 fill-yellow-400 text-yellow-400" />
                                </Button>
                            </Link>
                            <Link href="#game-types">
                                <Button variant="outline" className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 hover:text-white px-8 py-5 rounded-xl text-lg font-bold">
                                    Explore Genres
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features/Stats */}
            <section className="py-12 bg-[#0d0d25] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { label: "Active Players", value: "10M+" },
                            { label: "Games Shipped", value: "50+" },
                            { label: "Avg. ROI", value: "300%" },
                            { label: "Platforms", value: "Mobile/PC/Web" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-3xl md:text-4xl font-black text-indigo-500 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Game Types */}
            <section id="game-types" className="py-24 bg-[#0a0a1f] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                            Pick Your <span className="text-indigo-400">Battlefield</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            We specialize in diverse gaming genres tailored for maximum engagement and revenue.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#131330] rounded-3xl p-8 border border-white/5 hover:border-indigo-500/50 transition-all group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <Coins className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Play-to-Earn (P2E)</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Legally compliant gaming economies where players earn real rewards. We handle the blockchain integration and economic balancing.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Secure Tokenomics</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Asset Ownership (NFTs)</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Smart Contract Audits</li>
                            </ul>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#131330] rounded-3xl p-8 border border-white/5 hover:border-indigo-500/50 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-indigo-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Best Seller</div>
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <Trophy className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">eSports Platforms</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Create your own tournament platform. Host matches, manage brackets, and stream live events with our scalable backend.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Live Scoreboard</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Anti-Cheat Systems</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Payment Gateways</li>
                            </ul>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-[#131330] rounded-3xl p-8 border border-white/5 hover:border-indigo-500/50 transition-all group"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                <Monitor className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Educational Gaming</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Gamify learning ("Edutainment"). Perfect for schools, corporate training, and interactive simulations.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Interactive Quizzes</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Progress Tracking</li>
                                <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-green-400 mr-2" /> Multi-Platform Support</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 bg-[#0d0d25] text-white border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-bold text-3xl mb-12">Powered by Industry Standard Tech</h2>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for tech logos - using text for now */}
                        <span className="text-2xl font-bold font-mono">UNITY</span>
                        <span className="text-2xl font-bold font-mono">UNREAL ENGINE 5</span>
                        <span className="text-2xl font-bold font-mono">WEBGL</span>
                        <span className="text-2xl font-bold font-mono">NODE.JS</span>
                        <span className="text-2xl font-bold font-mono">SOLIDITY</span>
                        <span className="text-2xl font-bold font-mono">AWS GAMELIFT</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-b from-[#0a0a1f] to-[#1a1a3a] text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display font-bold text-4xl md:text-6xl mb-8">
                        Ready to Launch Your Game?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Whether you need a simple mobile game or a complex metaverse economy, our team of veteran developers is ready to execute your vision.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-white text-indigo-900 hover:bg-gray-100 px-10 py-8 rounded-2xl text-xl font-bold shadow-2xl transition-transform hover:scale-105">
                            Get a Game Dev Estimate
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
