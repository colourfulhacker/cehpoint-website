import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface VoiceVisualizerProps {
    volume: number; // 0 to 1
    status: string; // "Ready" | "Connecting" | "Connected" | ...
}

export function VoiceVisualizer({ volume, status }: VoiceVisualizerProps) {
    // Determine ring color based on status
    const isError = status.toLowerCase().includes("error") || status.toLowerCase().includes("fail");
    const isConnected = status.toLowerCase().includes("connected") || status.toLowerCase().includes("listening") || status.toLowerCase().includes("speaking");

    const ringColor = isError ? "bg-red-500" : isConnected ? "bg-green-500" : "bg-primary";
    const ringBorder = isError ? "border-red-500" : isConnected ? "border-green-500" : "border-primary";

    // Scaling factor for pulsing rings
    // Ensure volume has some baseline jitter for "aliveness"
    const activeVolume = Math.max(0.1, volume);

    return (
        <div className="relative flex items-center justify-center w-64 h-64">
            {/* Outer Rings - Pulse based on Volume */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className={`absolute inset-0 rounded-full ${ringColor} opacity-20`}
                    animate={{
                        scale: isConnected ? [1, 1 + activeVolume * (0.5 * i), 1] : 1,
                        opacity: isConnected ? [0.1, 0.3, 0.1] : 0.1
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5 + i * 0.2,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                />
            ))}

            {/* Core Glow */}
            <motion.div
                className={`absolute inset-4 rounded-full ${ringColor} blur-2xl opacity-40`}
                animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* Avatar Container */}
            <motion.div
                className="relative z-10"
                animate={{ scale: isConnected ? 1 + activeVolume * 0.1 : 1 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
            >
                <div className={`relative p-1 rounded-full border-4 ${ringBorder} bg-background shadow-2xl`}>
                    <Avatar className="h-32 w-32 border-2 border-background">
                        <AvatarImage src="/kaira.png" className="object-cover" />
                        <AvatarFallback>AI</AvatarFallback>
                    </Avatar>

                    {/* Status Dot */}
                    <div className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-background ${isConnected ? "bg-green-500 animate-pulse" : "bg-yellow-500"} shadow-lg`} />
                </div>
            </motion.div>
        </div>
    );
}
