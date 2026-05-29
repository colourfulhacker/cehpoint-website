import { Link } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, CheckCircle2, Building2, Volume2, VolumeX, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppInquiryDialog } from "@/components/shared/whatsapp-inquiry-dialog";
import { useTranslation, Trans } from "react-i18next";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export default function Hero() {
  const { t } = useTranslation();
  const rotatingTexts = t("home.hero.rotating", { returnObjects: true }) as string[];
  const checkmarks = t("home.hero.checkmarks", { returnObjects: true }) as string[];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Always play the intro on a fresh page-load. The only reason to skip
  // is if the user has prefers-reduced-motion set in their OS.
  const skipIntroDefault = prefersReducedMotion();
  const [isIntroPlaying, setIsIntroPlaying] = useState(!skipIntroDefault);
  const [isMuted, setIsMuted] = useState(true);
  const [showUnmuteHint, setShowUnmuteHint] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isIntroPlaying) {
      document.body.classList.add("intro-playing");
    } else {
      document.body.classList.remove("intro-playing");
    }
    return () => {
      document.body.classList.remove("intro-playing");
    };
  }, [isIntroPlaying]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isIntroPlaying) {
      // Intro phase: start from the top, muted (autoplay-friendly), no loop.
      videoRef.current.currentTime = 0;
      videoRef.current.loop = false;
      videoRef.current.muted = true;
      setIsMuted(true);
      setShowUnmuteHint(true);
      videoRef.current.play().catch((e) => {
        console.error("Muted autoplay failed", e);
        setIsIntroPlaying(false);
      });
    } else {
      // Content phase: muted background loop.
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      setIsMuted(true);
      setShowUnmuteHint(false);
      videoRef.current.play().catch((e) => console.error("Loop play failed", e));
    }
  }, [isIntroPlaying]);

  const handleVideoEnded = () => {
    setIsIntroPlaying(false);
  };

  const handleUnmute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setShowUnmuteHint(false);
    }
  };

  const skipIntro = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleVideoEnded();
  };

  return (
    <section
      className={`relative min-h-[100svh] flex flex-col justify-center ${isIntroPlaying ? "bg-black z-[100] fixed inset-0 overflow-hidden" : "pt-[15vh] pb-40 lg:pb-48 cursor-pointer z-10"}`}
      data-testid="hero-section"
    >
      {/* 
        Video Container 
        - Intro: Fixed, Centered, Object-Contain (No crop)
        - Content: Absolute, Cover (Background)
      */}
      <motion.div
        layout
        className={`absolute inset-0 z-0 transition-all duration-1000 ${isIntroPlaying ? "bg-black" : "bg-black"}`}
      >
        {/* Helper gradient for Content Phase ONLY */}
        {!isIntroPlaying && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-1000"></div>
        )}

        <video
          ref={videoRef}
          className={`w-full h-full transition-all duration-1000 ${isIntroPlaying
            ? "object-contain max-h-screen"  // Intro: Fit whole video ("each and every corner")
            : "object-cover absolute inset-0" // Content: Fill background
            }`}
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src="/assets/videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Intro Controls (Maximum Visibility Updates) */}
        {isIntroPlaying && (
          <div className="absolute bottom-12 right-6 md:bottom-20 md:right-10 z-50 flex flex-col items-end gap-4 pointer-events-auto">
            {showUnmuteHint && isMuted && (
              <Button
                onClick={handleUnmute}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 shadow-[0_0_30px_rgba(37,99,235,0.6)] border-2 border-white/50 transition-all hover:scale-105 animate-pulse"
              >
                <VolumeX className="w-6 h-6 mr-2" />
                <span className="font-bold text-lg tracking-wide uppercase">{t("home.hero.tapForSound")}</span>
              </Button>
            )}

            <Button
              onClick={skipIntro}
              className="bg-card/90 hover:bg-black text-white border-2 border-foreground/30 rounded-full px-8 py-4 transition-all hover:border-blue-500 hover:text-blue-400 group shadow-xl"
            >
              <span className="mr-2 text-base font-bold tracking-wide uppercase group-hover:text-blue-400 transition-colors">{t("home.hero.skipIntro")}</span>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors" />
            </Button>
          </div>
        )}
      </motion.div>

      {/* Hero Content - Only visible AFTER intro */}
      <AnimatePresence>
        {!isIntroPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left pointer-events-auto"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 rounded-full glass mb-6 border border-primary/20 bg-primary/10 hover:bg-primary/20 transition-colors cursor-default"
                >
                  <Building2 className="w-4 h-4 text-primary mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-primary tracking-wide uppercase">
                    {t("home.hero.eyebrow")}
                  </span>
                </motion.div>

                {/* Main Title */}
                <h1
                  className="font-display font-bold text-5xl sm:text-7xl md:text-8xl mb-6 tracking-tight leading-[1.1]"
                  data-testid="hero-title"
                >
                  {t("home.hero.titlePrefix")}
                  <br />
                  <div className="relative inline-block min-w-[200px] sm:min-w-[300px]">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={currentTextIndex}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="text-primary font-extrabold pb-2 block"
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
                  className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed font-light"
                  data-testid="hero-subtitle"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Trans
                    i18nKey="home.hero.subtitle"
                    components={{
                      strong: <span className="text-white font-medium relative inline-block underline decoration-primary/50 underline-offset-4" />,
                    }}
                  />
                </motion.p>

                {/* Checkmarks */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4 mb-10"
                >
                  {checkmarks.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground/90 bg-black/20 px-3 py-1.5 rounded-md border border-foreground/5 backdrop-blur-sm">
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
                  className="flex flex-col sm:flex-row gap-4 justify-start items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href="/quotation"
                    className={cn(buttonVariants({ size: "lg" }), "btn-primary w-full sm:w-auto px-8 py-6 text-lg font-bold group shadow-[0_0_20px_rgba(112,66,248,0.3)] hover:shadow-[0_0_30px_rgba(112,66,248,0.6)]")}
                    data-testid="hero-cta-primary"
                  >
                    {t("home.hero.primaryCta")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/services/business-app-catalog"
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "btn-outline w-full sm:w-auto px-8 py-6 text-lg font-semibold group shadow-xl")}
                    data-testid="hero-cta-catalog"
                  >
                    <Briefcase className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    {t("home.hero.secondaryCta")}
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right side spacer to keep video visible */}
              <div className="hidden lg:block h-full min-h-[500px]"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Stats Bar - Docked at bottom (Only Content Phase) */}
      <AnimatePresence>
        {!isIntroPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 z-30 bg-black/40 backdrop-blur-md border-t border-foreground/10 pointer-events-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                {[
                  { value: "24h", label: t("home.stats.demoTitle"), sublabel: t("home.stats.demoSub") },
                  { value: "0%", label: t("home.stats.upfrontTitle"), sublabel: t("home.stats.upfrontSub") },
                  { value: "25+", label: t("home.stats.industriesTitle"), sublabel: t("home.stats.industriesSub") },
                  { value: "500+", label: t("home.stats.projectsTitle"), sublabel: t("home.stats.projectsSub") }
                ].map((stat) => (
                  <div key={stat.label} className="py-6 px-4 text-center group hover:bg-foreground/5 transition-colors cursor-default">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
