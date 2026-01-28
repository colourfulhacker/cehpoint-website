import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Rocket, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false); // Try custom sound logic
  const [shouldLoop, setShouldLoop] = useState(false);

  const rotatingTexts = [
    "Digital Excellence",
    "MVP Solutions",
    "AI Innovation",
    "Cloud Platforms",
    "Mobile Apps",
    "Enterprise Software",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initial play attempt
    if (videoRef.current) {
      // Try playing with sound first
      videoRef.current.muted = false;
      videoRef.current.play().catch((error: any) => {
        console.log("Autoplay with sound blocked, falling back to muted:", error);
        // If blocked, fallback to muted autoplay
        if (videoRef.current) {
          setIsMuted(true);
          videoRef.current.muted = true;
          videoRef.current.play().catch((e: any) => console.error("Muted autoplay failed", e));
        }
      });
    }
  }, []);

  const handleVideoEnded = () => {
    // When video ends, switch to looping muted
    setShouldLoop(true);
    setIsMuted(true);
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  };

  const handleHeroClick = () => {
    // Restart with sound
    setShouldLoop(false);
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.loop = false;
      videoRef.current.play().catch((e: any) => console.error("Play failed on click", e));
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 pb-20 cursor-pointer"
      data-testid="hero-section"
      onClick={handleHeroClick}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000"></div> {/* Overlay for readability */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src="/assets/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback gradients if video fails or just to add flavor? Kept transparent or adjust opacity if needed. 
            Removing the old gradients to let video shine, but keeping grid pattern if transparent enough.
            Actually, user wants "modern websites who are using same video as there first section". 
            Usually this means CLEAN video. I will remove the conflicting heavy gradients but keep a subtle overlay.
        */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(112,66,248,0.1),transparent_70%)] pointer-events-none"></div>
      </div>

      <div className="relative z-20 max-w-7xl pt-40 mx-auto px-4 sm:px-6 lg:px-8 text-center pointers-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto" // Re-enable clicks for buttons inside
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full glass mb-8 border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
          >
            <Building2 className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">
              Enterprise-Grade Development
            </span>
          </motion.div>

          {/* Main Title */}
          <h1
            className="font-display font-bold text-5xl sm:text-7xl md:text-8xl mb-8 tracking-tight leading-[1.1]"
            data-testid="hero-title"
          >
            Transform Ideas Into
            <br />
            <div className="relative inline-grid grid-cols-1 items-baseline align-bottom min-w-[300px]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={currentTextIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="col-start-1 row-start-1 text-gradient font-extrabold pb-2 block"
                >
                  {rotatingTexts[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            data-testid="hero-subtitle"
            onClick={(e) => e.stopPropagation()} // Optional: keep text clicks from restarting? User said "if checking website must be visible". Actually user said "if we repress then it will start again". Clicking anywhere is fine.
          >
            Enterprise-grade software development across all industries with{" "}
            <span className="text-white font-medium relative inline-block">
              24-hour demo delivery
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></span>
            </span>{" "}
            and{" "}
            <span className="text-white font-medium relative inline-block">
              pay-after-demo
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></span>
            </span>{" "}
            model.
          </motion.p>

          {/* Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12"
          >
            {["MVP to Enterprise", "24h Delivery", "Pay After Demo"].map((item, i) => (
              <div key={item} className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground/80 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20"
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsAppInquiryDialog
              appName="Enterprise Project"
              locationName="Home Page"
              title="Get AI-Powered Quote"
              trigger={
                <Button
                  className="btn-primary w-full sm:w-auto px-8 py-7 text-lg font-bold group shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:shadow-[0_0_30px_rgba(112,66,248,0.6)]"
                  data-testid="hero-cta-primary"
                >
                  Get AI-Powered Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />

            <Link href="/services/business-app-catalog" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-8 py-7 text-lg font-semibold bg-white/5 border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all backdrop-blur-sm group"
                data-testid="hero-cta-catalog"
              >
                <Rocket className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Business App Catalog
              </Button>
            </Link>

            <a
              href="https://portfolios.cehpoint.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 flex justify-center items-center text-lg font-semibold text-muted-foreground hover:text-white transition-colors group"
            >
              Explore Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Section with Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
            data-testid="hero-stats"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { value: "24h", label: "Demo Delivery", sublabel: "Record Time" },
              { value: "0%", label: "Upfront Payment", sublabel: "Pay After Demo" },
              { value: "25+", label: "Industries", sublabel: "Expertise" },
              { value: "500+", label: "Projects", sublabel: "Delivered" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-2"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
