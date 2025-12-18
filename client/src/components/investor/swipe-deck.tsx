import { useState } from "react";
import { motion, useAnimation, PanInfo, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { X, Heart, RefreshCw, TrendingUp, Info, DollarSign, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { INVESTOR_IDEAS, Idea } from "@/data/investor-ideas";

interface SwipeDeckProps {
    onMatch: (idea: Idea) => void;
}

export default function SwipeDeck({ onMatch }: SwipeDeckProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliderValue, setSliderValue] = useState(50);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const [exitX, setExitX] = useState<number | null>(null);

    // Derived animations for indicators
    const rotate = useTransform(x, [-200, 200], [-10, 10]);
    const opacityLike = useTransform(x, [50, 150], [0, 1]);
    const opacityNope = useTransform(x, [-150, -50], [1, 0]);
    
    // Background card scale
    const scaleNext = useTransform(x, [-200, 0, 200], [1, 0.95, 1]);

    const currentIdea = INVESTOR_IDEAS[currentIndex];
    const nextIdea = INVESTOR_IDEAS[(currentIndex + 1) % INVESTOR_IDEAS.length];

    const handleDragEnd = (event: any, info: PanInfo) => {
        const threshold = 100;
        if (info.offset.x > threshold) {
            handleSwipe("right");
        } else if (info.offset.x < -threshold) {
            handleSwipe("left");
        } else {
            controls.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } });
        }
    };

    const handleSwipe = (direction: "left" | "right") => {
        // Call onMatch IMMEDIATELY for right swipes to prevent blank screen
        if (direction === "right") {
            onMatch(currentIdea);
        }
        
        // CRITICAL: Get current x position and reset it
        // This prevents conflict between drag gesture and animation
        const currentX = x.get();
        
        const targetX = direction === "left" ? -300 : 300;
        setExitX(targetX);
        
        // Animate from current position to target
        controls.start({ 
            x: targetX, 
            opacity: 0, 
            rotate: direction === "left" ? -10 : 10,
            transition: { duration: 0.3 } 
        }).then(() => {
            if (direction === "left") {
                // Reset for next card only on left swipe
                setCurrentIndex((prev) => (prev + 1) % INVESTOR_IDEAS.length);
                setExitX(null);
                setSliderValue(50);
                x.set(0);
            }
        });
    };

    const handleSliderChange = (value: number[]) => {
        setSliderValue(value[0]);
    };

    const handleSliderCommit = (value: number[]) => {
        if (value[0] > 80) {
            handleSwipe("right");
        } else if (value[0] < 20) {
            handleSwipe("left");
        } else {
            setSliderValue(50);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto relative min-h-[600px]">
            <div className="relative w-full h-[500px] mb-8">
                <AnimatePresence mode="popLayout">
                    {/* Background Card (Next Idea) */}
                    <motion.div 
                        key={`next-${nextIdea.id}`}
                        style={{ scale: scaleNext }}
                        className="absolute inset-0 bg-card rounded-3xl border border-white/5 shadow-xl opacity-50 translate-y-4 -z-10"
                    >
                        <div className={`h-full w-full rounded-3xl bg-gradient-to-br ${nextIdea.color} opacity-20`} />
                    </motion.div>

                    {/* Active Card */}
                    {!exitX && (
                        <motion.div
                            key={currentIdea.id}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            animate={controls}
                            style={{ x, rotate, touchAction: "none" }}
                            initial={{ scale: 0.95, opacity: 0 }}
                            exit={{ x: exitX || 0, opacity: 0, rotate: exitX ? (exitX > 0 ? 10 : -10) : 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 bg-card rounded-3xl border border-white/10 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                        >
                            {/* Card Header Gradient */}
                            <div className={`h-32 bg-gradient-to-br ${currentIdea.color} relative p-6 flex flex-col justify-end`}>
                                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {currentIdea.industry}
                                </div>
                                <h3 className="text-2xl font-bold text-white shadow-sm">{currentIdea.title}</h3>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 space-y-6 bg-card/95 backdrop-blur-sm h-[calc(100%-128px)] flex flex-col">
                                <p className="text-lg font-medium leading-relaxed text-foreground/90">
                                    {currentIdea.elevatorPitch}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-secondary/30 p-3 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">
                                            <DollarSign className="w-3 h-3" /> Budget
                                        </div>
                                        <p className="font-bold text-primary">{currentIdea.budget}</p>
                                    </div>
                                    <div className="bg-secondary/30 p-3 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">
                                            <TrendingUp className="w-3 h-3" /> Profit
                                        </div>
                                        <p className="font-bold text-green-500">{currentIdea.profitPotential}</p>
                                    </div>
                                    <div className="bg-secondary/30 p-3 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">
                                            <Clock className="w-3 h-3" /> Time
                                        </div>
                                        <p className="font-bold">{currentIdea.timeToMarket}</p>
                                    </div>
                                    <div className="bg-secondary/30 p-3 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider mb-1">
                                            <Tag className="w-3 h-3" /> Tags
                                        </div>
                                        <p className="text-xs font-medium truncate">{currentIdea.tags.slice(0, 2).join(", ")}</p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 flex items-center justify-between text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Info className="w-4 h-4" />
                                        <span>Swipe right to own this</span>
                                    </div>
                                </div>
                            </div>

                            {/* Swipe Indicators */}
                            <motion.div 
                                className="absolute top-8 left-8 border-4 border-green-500 text-green-500 rounded-lg px-4 py-2 font-bold text-2xl -rotate-12"
                                style={{ opacity: opacityLike }}
                            >
                                INTERESTED
                            </motion.div>
                            <motion.div 
                                className="absolute top-8 right-8 border-4 border-red-500 text-red-500 rounded-lg px-4 py-2 font-bold text-2xl rotate-12"
                                style={{ opacity: opacityNope }}
                            >
                                PASS
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center w-full gap-6">
                <div className="w-full px-8 flex items-center gap-4">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Pass</span>
                    <Slider
                        value={[sliderValue]}
                        onValueChange={handleSliderChange}
                        onValueCommit={handleSliderCommit}
                        max={100}
                        step={1}
                        className="flex-1"
                    />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Own It</span>
                </div>

                <div className="flex items-center gap-6">
                    <Button
                        size="icon"
                        variant="outline"
                        className="w-14 h-14 rounded-full border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 shadow-lg hover:scale-110 transition-all duration-300"
                        onClick={() => handleSwipe("left")}
                    >
                        <X className="w-6 h-6" />
                    </Button>

                    <Button
                        size="icon"
                        className="w-12 h-12 rounded-full bg-secondary text-foreground/60 shadow-inner hover:scale-110 hover:text-primary transition-all"
                        onClick={() => {
                            setCurrentIndex((prev) => (prev + 1) % INVESTOR_IDEAS.length);
                            setSliderValue(50);
                        }}
                    >
                        <RefreshCw className="w-5 h-5" />
                    </Button>

                    <Button
                        size="icon"
                        variant="outline"
                        className="w-16 h-16 rounded-full border-green-500/20 bg-green-500/5 text-green-500 hover:bg-green-500 hover:text-white hover:border-green-500 shadow-lg hover:scale-110 transition-all duration-300 group"
                        onClick={() => handleSwipe("right")}
                    >
                        <Heart className="w-8 h-8 group-hover:scale-125 transition-transform duration-300 fill-current" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
