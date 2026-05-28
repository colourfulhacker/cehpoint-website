import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SEO from "@/components/seo";
import { Home, ArrowLeft, Search, Bot, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved. Explore our services, AI solutions, or contact our team."
        noIndex
      />
      
      <div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(112,66,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,66,248,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-20 left-[15%] w-4 h-4 bg-primary/40 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-[20%] w-3 h-3 bg-cyan-400/40 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-32 left-[25%] w-2 h-2 bg-purple-400/50 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Number with glitch effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.h1 
                className="font-display font-bold text-[180px] sm:text-[220px] md:text-[280px] leading-none text-primary select-none"
                animate={{ 
                  textShadow: [
                    "0 0 40px rgba(112,66,248,0.5)",
                    "0 0 80px rgba(112,66,248,0.8)",
                    "0 0 40px rgba(112,66,248,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.h1>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                <motion.div 
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ y: [-50, 350] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Error Type Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-primary/20"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Signal Lost - Page Not Found</span>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Connection <span className="text-primary">Terminated</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have drifted into the digital void. 
              Our AI systems couldn't locate it, but we can help you find your way back.
            </p>
          </motion.div>

          {/* Technical details box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-intense rounded-2xl p-6 mb-10 max-w-md mx-auto border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                <Search className="w-4 h-4 text-red-500" />
              </div>
              <span className="font-semibold text-foreground">Error Analysis</span>
            </div>
            <div className="space-y-2 text-left text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="text-red-400">404 NOT_FOUND</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Source:</span>
                <span className="text-foreground/70">Unknown Route</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Action:</span>
                <span className="text-cyan-400">Navigation Required</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/">
              <Button className="btn-primary px-8 py-6 text-lg font-bold group">
                <Home className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Return to Home
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-6 text-lg font-semibold group">
                <Bot className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Contact Support
              </Button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-sm text-muted-foreground mb-4">Or explore our key pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Services", href: "/services" },
                { label: "AI Solutions", href: "/ai-solutions" },
                { label: "Get Quote", href: "/quotation" },
                { label: "Insights", href: "/insights" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                    <Cpu className="w-3 h-3" />
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent max-w-xs mx-auto"
          />

          {/* Footer message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            Need immediate assistance?{" "}
            <a href="mailto:contact@cehpoint.co.in" className="text-primary hover:underline">
              contact@cehpoint.co.in
            </a>
            {" "}or{" "}
            <a href="tel:+919091156095" className="text-primary hover:underline">
              call us
            </a>
          </motion.p>
        </div>

        {/* Side decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-0 bottom-1/3 w-px h-48 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      </div>
    </>
  );
}