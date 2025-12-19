import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = [
    "Digital Excellence",
    "MVP Solutions",
    "AI Innovation",
    "Cloud Platforms",
    "Mobile Apps",
    "Web Solutions",
    "Enterprise Software",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute top-60 right-20 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full glass mb-8 hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">
              Enterprise-Grade Development
            </span>
          </div>

          <h1
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none"
            data-testid="hero-title"
          >
            Transform Ideas Into
            <br />
            <span
              key={currentTextIndex}
              className="text-gradient inline-block"
              style={{
                animation: 'fadeUp 0.6s ease-out'
              }}
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed font-light"
            data-testid="hero-subtitle"
          >
            Enterprise-grade software development across all industries with{" "}
            <span className="text-foreground font-semibold">24-hour demo delivery</span> and{" "}
            <span className="text-foreground font-semibold">pay-after-demo</span> model.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>MVP to Enterprise</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>24h Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Pay After Demo</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
          >
            <Link
              href="/quotation"
              className="w-full sm:w-auto"
            >
              <Button
                className="btn-primary hover-glow rounded-2xl text-lg font-bold text-primary-foreground w-full sm:w-auto px-8 py-6 group"
                data-testid="hero-cta-primary"
                aria-label="Get AI-powered project quotation"
              >
                Get AI-Powered Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <a
              href="https://portfolios.cehpoint.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass hover-lift rounded-2xl text-lg font-semibold hover:bg-secondary/50 transition-all duration-300 w-full sm:w-auto px-8 py-6 flex justify-center items-center group"
              data-testid="hero-cta-secondary"
              aria-label="View our portfolio of completed projects"
            >
              Explore Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
            data-testid="hero-stats"
          >
            {[
              { value: "24h", label: "Demo Delivery", sublabel: "Record Time" },
              { value: "0%", label: "Upfront Payment", sublabel: "Pay After Demo" },
              { value: "25+", label: "Industries", sublabel: "Expertise" },
              { value: "500+", label: "Projects", sublabel: "Delivered" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                className="glass-intense rounded-2xl sm:rounded-3xl p-6 md:p-8 hover-lift group cursor-pointer"
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground/60 mt-1">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
