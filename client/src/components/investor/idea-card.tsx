import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Clock, Sparkles } from "lucide-react";

interface Idea {
    id: string;
    title: string;
    industry: string;
    elevatorPitch: string;
    budget: string;
    profitPotential: string;
    timeToMarket: string;
    tags: string[];
    color: string;
}

interface IdeaCardProps {
    idea: Idea;
    onSwipe: (direction: "left" | "right") => void;
    index: number;
}

export default function IdeaCard({ idea, onSwipe, index }: IdeaCardProps) {
    const controls = useAnimation();
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-25, 25]);
    const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
    const scale = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9]);

    // Background color opacity based on swipe
    const bgGreen = useTransform(x, [0, 150], [0, 0.4]);
    const bgRed = useTransform(x, [-150, 0], [0.4, 0]);

    const handleDragEnd = async (_: any, info: any) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset > 100 || velocity > 500) {
            await controls.start({ x: 500, opacity: 0, transition: { duration: 0.2 } });
            onSwipe("right");
        } else if (offset < -100 || velocity < -500) {
            await controls.start({ x: -500, opacity: 0, transition: { duration: 0.2 } });
            onSwipe("left");
        } else {
            controls.start({ x: 0, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
        }
    };

    return (
        <motion.div
            style={{
                x,
                rotate,
                opacity,
                scale,
                zIndex: 100 - index,
                position: "absolute",
                width: "100%",
                height: "100%",
                cursor: "grab",
                top: 0,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            whileTap={{ cursor: "grabbing" }}
            className="w-full max-w-md mx-auto h-[500px] md:h-[600px] perspective-1000"
        >
            <Card className={`relative h-full overflow-hidden border-0 shadow-2xl rounded-[2.5rem] bg-gradient-to-br ${idea.color} text-white`}>
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                {/* Swipe Indicators */}
                <motion.div style={{ opacity: bgGreen }} className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/50 z-10 pointer-events-none mix-blend-overlay" />
                <motion.div style={{ opacity: bgRed }} className="absolute inset-0 bg-gradient-to-l from-transparent to-red-500/50 z-10 pointer-events-none mix-blend-overlay" />

                <div className="absolute top-10 right-10 z-20 pointer-events-none">
                    <motion.div style={{ opacity: useTransform(x, [50, 150], [0, 1]), scale: useTransform(x, [50, 150], [0.5, 1]) }}>
                        <div className="border-4 border-green-400 rounded-xl px-6 py-3 transform rotate-12 bg-green-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(74,222,128,0.5)]">
                            <span className="text-green-300 font-bold text-3xl uppercase tracking-widest drop-shadow-md">Yes!</span>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute top-10 left-10 z-20 pointer-events-none">
                    <motion.div style={{ opacity: useTransform(x, [-150, -50], [1, 0]), scale: useTransform(x, [-150, -50], [1, 0.5]) }}>
                        <div className="border-4 border-red-400 rounded-xl px-6 py-3 transform -rotate-12 bg-red-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(248,113,113,0.5)]">
                            <span className="text-red-300 font-bold text-3xl uppercase tracking-widest drop-shadow-md">Nope</span>
                        </div>
                    </motion.div>
                </div>

                {/* Content Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 space-y-4 md:space-y-6 z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/10 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">
                                {idea.industry}
                            </Badge>
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-1">
                                <Sparkles className="w-3 h-3 text-yellow-300" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-3 drop-shadow-xl text-white">
                            {idea.title}
                        </h2>
                    </div>

                    <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow-md line-clamp-3">
                        {idea.elevatorPitch}
                    </p>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                        <div className="text-center group">
                            <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <DollarSign className="w-5 h-5 text-green-300" />
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1 font-bold">Budget</p>
                            <p className="font-bold text-sm text-white">{idea.budget}</p>
                        </div>
                        <div className="text-center border-l border-white/10 group">
                            <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <TrendingUp className="w-5 h-5 text-blue-300" />
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1 font-bold">Profit</p>
                            <p className="font-bold text-sm text-white">{idea.profitPotential}</p>
                        </div>
                        <div className="text-center border-l border-white/10 group">
                            <div className="w-10 h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                                <Clock className="w-5 h-5 text-purple-300" />
                            </div>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1 font-bold">Launch</p>
                            <p className="font-bold text-sm text-white">{idea.timeToMarket}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {idea.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/30 text-white/80 border border-white/10 backdrop-blur-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
