import { useState, useEffect, useRef } from "react";
import { X, Mic, MicOff, MessageSquare, Phone, User, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { GeminiLiveClient } from "@/lib/gemini-live";
import { leadershipData, Leader } from "@/data/leadership";

interface KairaDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    role: "user" | "ai" | "system";
    text: string;
}

export function KairaDialog({ isOpen, onClose }: KairaDialogProps) {
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", text: "Hello, I'm Kaira AI. How can I assist you today?" }
    ]);
    const [inputText, setInputText] = useState("");
    const [isMeetingMode, setIsMeetingMode] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [fallbackLeader, setFallbackLeader] = useState<Leader | null>(null);

    const clientRef = useRef<GeminiLiveClient | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleConnect = async () => {
        try {
            // Fetch API Key securely
            const res = await fetch("/api/gemini-config");
            const data = await res.json();
            if (!data.apiKey) throw new Error("No API Key found");

            const client = new GeminiLiveClient(data.apiKey);
            client.onTextData = (text, isUser) => {
                addMessage(isUser ? "user" : "ai", text);
                checkForFallback(text);
            };

            await client.connect();

            if (isMeetingMode) {
                await client.startAudioInput();
            }

            clientRef.current = client;
            setIsConnected(true);
            addMessage("system", "Connected to Gemini 2.5 Live");
        } catch (e) {
            console.error(e);
            addMessage("system", "Connection failed. Please try again.");
        }
    };

    const handleDisconnect = () => {
        if (clientRef.current) {
            clientRef.current.disconnect();
            clientRef.current = null;
        }
        setIsConnected(false);
        setIsMeetingMode(false);
        addMessage("system", "Disconnected");
    };

    const addMessage = (role: "user" | "ai" | "system", text: string) => {
        setMessages(prev => [...prev, { role, text }]);
    };

    const checkForFallback = (text: string) => {
        // Simple heuristic: if AI says "I don't know" or similar, trigger fallback
        const lower = text.toLowerCase();
        if (lower.includes("consultant") || lower.includes("leadership") || lower.includes("don't know") || lower.includes("unable to answer")) {
            // Find a random leader for now, or based on keywords
            // In real implementation, we would extract topics from 'text'
            const randomLeader = leadershipData[Math.floor(Math.random() * leadershipData.length)];
            setFallbackLeader(randomLeader);
        }
    };

    const sendMessage = () => {
        if (!inputText.trim()) return;
        if (clientRef.current) {
            clientRef.current.sendTextMessage(inputText);
        } else {
            // Fallback if not connected to WS (simulate chat) or auto-connect
            handleConnect().then(() => {
                clientRef.current?.sendTextMessage(inputText);
            });
        }
        setInputText("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-background/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-primary/10 flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-primary">
                                <AvatarImage src="/kaira.png" />
                                <AvatarFallback>KA</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-bold text-foreground">Kaira AI</h3>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-gray-400"}`} />
                                    {isConnected ? "Live" : "Offline"}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" onClick={() => {
                                setIsMeetingMode(!isMeetingMode);
                                if (isConnected && !isMeetingMode) {
                                    clientRef.current?.startAudioInput();
                                }
                            }}>
                                {isMeetingMode ? <Phone className="h-4 w-4 text-green-500 fill-current" /> : <Phone className="h-4 w-4" />}
                            </Button>
                            <Button variant="ghost" size="icon" onClick={onClose}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Visualizer (Meeting Mode) */}
                    <AnimatePresence>
                        {isMeetingMode && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 120 }}
                                exit={{ height: 0 }}
                                className="bg-black/5 flex items-center justify-center overflow-hidden relative"
                            >
                                {/* Fake Visualizer for Demo */}
                                <div className="flex items-center gap-1 h-8">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [10, 30, 10] }}
                                            transition={{ repeat: Infinity, duration: 0.5 + Math.random() * 0.5 }}
                                            className="w-1 bg-primary rounded-full"
                                        />
                                    ))}
                                </div>
                                <p className="absolute bottom-2 text-xs text-muted-foreground">Listening...</p>
                            </motion.div>
                        )}
                    </AnimatePresence>


                    {/* Chat Area */}
                    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                        <div className="space-y-4">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${m.role === "user"
                                            ? "bg-primary text-primary-foreground"
                                            : m.role === "system"
                                                ? "bg-muted text-xs text-center w-full"
                                                : "bg-muted/50 border border-primary/10"
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}

                            {/* Fallback Card */}
                            {fallbackLeader && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4"
                                >
                                    <Card className="border-l-4 border-l-primary bg-card/50">
                                        <CardContent className="p-4">
                                            <p className="text-sm font-medium mb-2">I recommend speaking with this expert:</p>
                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/20 p-2 rounded-full">
                                                    <User className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-sm">{fallbackLeader.name}</p>
                                                    <p className="text-xs text-muted-foreground">{fallbackLeader.designation}</p>
                                                </div>
                                            </div>
                                            <Button size="sm" variant="outline" className="w-full mt-3 gap-2" asChild>
                                                <a href={`mailto:${fallbackLeader.email}`}>
                                                    <Send className="h-3 w-3" /> Contact
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 border-t border-primary/10 bg-background/50 backdrop-blur-sm">
                        {!isConnected ? (
                            <Button className="w-full" onClick={handleConnect}>
                                Connect to Kaira AI
                            </Button>
                        ) : (
                            <div className="flex gap-2">
                                <Input
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type a message..."
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                    className="flex-1"
                                />
                                <Button size="icon" onClick={sendMessage}>
                                    <Send className="h-4 w-4" />
                                </Button>
                                <Button size="icon" variant="destructive" onClick={handleDisconnect}>
                                    <Phone className="h-4 w-4 rotate-[135deg]" />
                                </Button>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
