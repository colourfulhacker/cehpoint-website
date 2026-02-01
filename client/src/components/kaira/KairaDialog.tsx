import { useState, useEffect, useRef } from "react";
import { X, Mic, MicOff, MessageSquare, Phone, User, Send, Trash2, StopCircle } from "lucide-react";
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

const STORAGE_KEY = "kaira_chat_history";

export function KairaDialog({ isOpen, onClose }: KairaDialogProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [mode, setMode] = useState<"text" | "voice">("text");
    const [isVoiceConnected, setIsVoiceConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fallbackLeader, setFallbackLeader] = useState<Leader | null>(null);

    const clientRef = useRef<GeminiLiveClient | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Load history on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setMessages(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load chat history", e);
                setMessages([{ role: "ai", text: "Hello, I'm Kaira AI. How can I assist you today?" }]);
            }
        } else {
            setMessages([{ role: "ai", text: "Hello, I'm Kaira AI. How can I assist you today?" }]);
        }
    }, []);

    // Save history
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, mode]);

    // --- Voice Mode Logic ---
    const startVoiceMode = async () => {
        try {
            setMode("voice");
            let apiKey = "";
            try {
                const res = await fetch("/api/gemini-config");
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const data = await res.json();
                    if (data.apiKey) apiKey = data.apiKey;
                }
            } catch (e) { /* Fallback handled below */ }

            if (!apiKey) apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";
            if (!apiKey) throw new Error("No API Key found");

            const client = new GeminiLiveClient(apiKey);
            client.onTextData = (text, isUser) => {
                // In voice mode, we might optionally show live captions, but let's keep it clean or minimal
                // For now, let's just log or transiently show
                console.log(`[Voice] ${isUser ? 'User' : 'AI'}: ${text}`);
            };

            await client.connect();
            await client.startAudioInput();

            clientRef.current = client;
            setIsVoiceConnected(true);
        } catch (e: any) {
            console.error("Voice Connection Failed", e);
            setMode("text");
            addMessage("system", `Voice connection failed: ${e.message}`);
        }
    };

    const stopVoiceMode = () => {
        if (clientRef.current) {
            clientRef.current.disconnect();
            clientRef.current = null;
        }
        setIsVoiceConnected(false);
        setMode("text");
    };

    // --- Text Mode Logic ---
    const sendTextMessage = async () => {
        if (!inputText.trim()) return;
        const msg = inputText.trim();
        setInputText("");
        addMessage("user", msg);
        setIsLoading(true);

        try {
            const res = await fetch("/api/kaira-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: msg, history: messages.slice(-5) }) // Send last 5 context
            });

            const data = await res.json();
            if (data.response) {
                addMessage("ai", data.response);
                checkForFallback(data.response);
            } else {
                throw new Error("No response from server");
            }
        } catch (e) {
            console.error("Text Chat Error", e);
            addMessage("system", "I'm having trouble connecting right now. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const addMessage = (role: "user" | "ai" | "system", text: string) => {
        setMessages(prev => [...prev, { role, text }]);
    };

    const checkForFallback = (text: string) => {
        const lower = text.toLowerCase();
        if (lower.includes("consultant") || lower.includes("leadership") || lower.includes("don't know")) {
            const randomLeader = leadershipData[Math.floor(Math.random() * leadershipData.length)];
            setFallbackLeader(randomLeader);
        }
    };

    const clearHistory = () => {
        const initial: Message[] = [{ role: "ai", text: "Hello, I'm Kaira AI. How can I assist you today?" }];
        setMessages(initial);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    drag
                    dragMomentum={false}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed bottom-24 right-6 w-[400px] h-[600px] bg-background border border-primary/20 rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden font-sans"
                >
                    {/* Header */}
                    <div className="p-4 border-b border-primary/10 flex items-center justify-between bg-primary/5 cursor-move select-none">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-primary">
                                <AvatarImage src="/kaira.png" />
                                <AvatarFallback>K</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-bold text-foreground">Kaira AI</h3>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <span className={`w-2 h-2 rounded-full ${mode === 'voice' && isVoiceConnected ? "bg-red-500 animate-pulse" : "bg-green-500"}`} />
                                    {mode === 'voice' ? "Voice Mode" : "Online"}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" onClick={clearHistory} title="Clear Chat">
                                <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={onClose}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col relative overflow-hidden bg-background">
                        {mode === 'voice' ? (
                            // Voice Mode UI
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-8 bg-gradient-to-b from-background to-primary/5">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                                    <Avatar className="h-32 w-32 border-4 border-primary z-10 relative">
                                        <AvatarImage src="/kaira.png" />
                                        <AvatarFallback>AI</AvatarFallback>
                                    </Avatar>
                                </motion.div>
                                <div className="text-center space-y-2">
                                    <h2 className="text-2xl font-bold">Listening...</h2>
                                    <p className="text-muted-foreground">Speak freely with Kaira</p>
                                </div>
                                <Button size="lg" variant="destructive" className="rounded-full px-8 gap-2" onClick={stopVoiceMode}>
                                    <StopCircle className="h-5 w-5" /> End Call
                                </Button>
                            </div>
                        ) : (
                            // Text Mode UI
                            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                                <div className="space-y-4 pb-4">
                                    {messages.map((m, i) => (
                                        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${m.role === "user"
                                                    ? "bg-primary text-primary-foreground rounded-br-none"
                                                    : m.role === "system"
                                                        ? "bg-muted text-xs text-center w-full shadow-none my-2"
                                                        : "bg-secondary text-secondary-foreground border border-border/50 rounded-bl-none"
                                                }`}>
                                                {m.text}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                                                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Fallback Leader Card */}
                                    {fallbackLeader && (
                                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                                            <Card className="border-l-4 border-l-primary bg-card/50">
                                                <CardContent className="p-4 flex items-center gap-4">
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarFallback>Ex</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-semibold text-sm">Recommended Expert</p>
                                                        <p className="text-sm font-bold">{fallbackLeader.name}</p>
                                                        <a href={`mailto:${fallbackLeader.email}`} className="text-xs text-primary hover:underline">
                                                            {fallbackLeader.email}
                                                        </a>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    )}
                                </div>
                            </ScrollArea>
                        )}
                    </div>

                    {/* Footer Controls */}
                    {mode === 'text' && (
                        <div className="p-4 bg-background border-t border-border flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full shrink-0 border-primary/20 hover:bg-primary/10 hover:border-primary/50"
                                onClick={startVoiceMode}
                                title="Start Voice Call"
                            >
                                <Phone className="h-5 w-5 text-primary" />
                            </Button>
                            <div className="relative flex-1">
                                <Input
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendTextMessage()}
                                    placeholder="Type a message..."
                                    className="pr-10 rounded-full border-primary/20 focus-visible:ring-primary/30"
                                />
                                <Button
                                    size="icon"
                                    className="absolute right-1 top-1 h-8 w-8 rounded-full"
                                    onClick={sendTextMessage}
                                    disabled={!inputText.trim() || isLoading}
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
