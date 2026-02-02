import { useState, useEffect, useRef } from "react";
import { X, Mic, MicOff, Send, Trash2, Minus, Plus, Volume2, VolumeX, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { leadershipData, Leader } from "@/data/leadership";
import ReactMarkdown from "react-markdown";
import { useLocation } from "wouter";

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
    const [location] = useLocation();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fallbackLeader, setFallbackLeader] = useState<Leader | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isTtsEnabled, setIsTtsEnabled] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

    // Initial Sound for Toast
    useEffect(() => {
        audioRef.current = new Audio("/assets/sounds/notification.mp3"); // Assuming asset exists, or I will use a simple beep URL
    }, []);

    const playToastSound = () => {
        // Simple Beep if file missing? Or generate using Web Audio API to be safe
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.start();
        osc.stop(ctx.currentTime + 0.15); // Short beep
    };

    // Load and Lock Voice Once (STRICT GOOGLE ONLY)
    useEffect(() => {
        const loadVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0 && !selectedVoice) {
                // User Request: "Only use Google voice... Remove Microsoft"
                // Priority: Google US English > Any Google English > Default
                const voice = voices.find(v => v.name === "Google US English") ||
                    voices.find(v => v.name.includes("Google") && v.lang.startsWith("en")) ||
                    voices.find(v => v.default) || // Last resort if no Google voice
                    voices[0];
                setSelectedVoice(voice);
            }
        };

        loadVoice();
        window.speechSynthesis.onvoiceschanged = loadVoice;
        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, [selectedVoice]);

    // Trigger Toast on route change
    useEffect(() => {
        if (!isOpen) {
            // Reset
            setShowToast(false);

            const timer = setTimeout(() => {
                setShowToast(true);
                playToastSound();
            }, 5000); // 5s delay

            return () => clearTimeout(timer);
        }
    }, [location, isOpen]);

    // Speak function (Natural human-like pace)
    const speakText = (text: string) => {
        if (!isTtsEnabled || !('speechSynthesis' in window)) return;

        // Cancel existing speech
        window.speechSynthesis.cancel();

        // Clean Markdown for Speech (remove *, #, links, code blocks)
        const cleanText = text
            .replace(/\*/g, "") // Remove asterisks
            .replace(/#/g, "")  // Remove hashes
            .replace(/`{3}[\s\S]*?`{3}/g, "Code block omitted.") // Skip code blocks
            .replace(/`([^`]+)`/g, "$1") // Inline code -> text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Links -> text label
            .replace(/https?:\/\/\S+/g, "link") // Raw URLs -> "link"
            .replace(/\n+/g, ". "); // Newlines -> pause

        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.rate = 1.0; // Normal speed is often more natural than 0.9 for modern voices
        utterance.pitch = 1.0;

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        window.speechSynthesis.speak(utterance);
    };
    // Context-Aware Greeting Fallback
    const getGreeting = (path: string) => {
        if (path.includes("/careers") || path.includes("/jobs") || path.includes("/interns")) {
            return "Hey, can I assist you in your career? We have exciting opportunities!";
        }
        if (path.includes("/services") || path.includes("/business-app")) {
            return "Hello! Looking for enterprise solutions or business apps? I can help you find the right service.";
        }
        if (path.includes("/contact")) {
            return "Hello! How can we connect with you today?";
        }
        return "Hello, I'm Kaira AI. How can I assist you today?";
    };

    // Load history on mount
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setMessages(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load chat history", e);
                setMessages([{ role: "ai", text: getGreeting(location) }]);
            }
        } else {
            setMessages([{ role: "ai", text: getGreeting(location) }]);
        }
    }, []);

    // Update greeting if user navigates and chat is empty/reset state
    useEffect(() => {
        if (messages.length === 1 && messages[0].role === 'ai') {
            setMessages([{ role: "ai", text: getGreeting(location) }]);
        }
    }, [location]);

    // Save history
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    // Auto-scroll
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const playNotificationSound = () => {
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) { /* ignore */ }
    };

    const addMessage = (role: "user" | "ai" | "system", text: string) => {
        setMessages(prev => [...prev, { role, text }]);
        if (role === 'ai') playNotificationSound();
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

    // Voice Typing Logic (Web Speech API)
    const startListening = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Your browser does not support Voice Typing. Please use Chrome or Edge.");
            return;
        }

        const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = 'en-US'; // Default to English US
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            if (transcript) {
                setInputText(prev => {
                    const spacer = prev.length > 0 && !prev.endsWith(" ") ? " " : "";
                    return prev + spacer + transcript;
                });
            }
        };

        recognition.onerror = (event: any) => {
            console.error("Speech Recognition Error", event.error);
            setIsListening(false);
        };

        recognition.start();
    };


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
                body: JSON.stringify({ message: msg, history: messages.slice(-5) })
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`API Error ${res.status}: ${errText.slice(0, 100)}`);
            }

            const data = await res.json();
            if (data.response) {
                addMessage("ai", data.response);
                checkForFallback(data.response);
                speakText(data.response);
            } else {
                throw new Error("No response from server");
            }
        } catch (e: any) {
            console.error("Text Chat Error", e);
            addMessage("system", `I'm having trouble connecting right now. Details: ${e.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile on mount/resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // ... (keep existing history useEffects and sound logic)

    // ... (keep playNotificationSound)

    // ... (keep addMessage)

    // ... (keep checkForFallback, clearHistory, Voice Logic)

    // ... (keep sendTextMessage)

    if (isMinimized) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        drag={!isMobile}
                        dragMomentum={false}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`fixed z-[9999] bg-background border border-primary/20 shadow-lg flex items-center justify-between p-3 font-sans rounded-md
                            ${isMobile ? "bottom-20 right-4 w-[calc(100%-32px)]" : "bottom-5 right-5 w-[300px]"}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="font-semibold text-sm tracking-wide">Kaira AI Assistant</span>
                        </div>
                        <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsMinimized(false)}>
                                <Plus className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    const isMaximized = isMobile || isFullscreen;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    drag={!isMaximized}
                    dragMomentum={false}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        width: isMaximized ? "100%" : "380px",
                        height: isMaximized ? "100%" : "600px",
                        borderRadius: isMaximized ? "0px" : "8px",
                        bottom: isMaximized ? "0px" : "20px",
                        right: isMaximized ? "0px" : "20px"
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className={`fixed bg-background border border-primary/20 shadow-2xl z-[9999] flex flex-col overflow-hidden font-sans
                        ${isMaximized ? "inset-0 m-0" : ""}
                    `}
                >
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-border bg-card flex items-center justify-between cursor-move select-none" onDoubleClick={() => !isMobile && setIsFullscreen(!isFullscreen)}>
                        <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8 border border-border rounded-md">
                                <AvatarImage src="/kaira.png" />
                                <AvatarFallback className="rounded-md bg-primary/10 text-primary">K</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-semibold text-sm leading-none mb-1">Kaira AI</h3>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Active
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            {/* Toggle Fullscreen (Desktop Only) */}
                            {!isMobile && (
                                <Button variant="ghost" size="icon" onClick={() => setIsFullscreen(!isFullscreen)} title={isFullscreen ? "Restore" : "Maximize"}>
                                    {isFullscreen ? <Minus className="h-4 w-4 rotate-90" /> : <div className="w-4 h-4 border-2 border-muted-foreground rounded-sm" />}
                                </Button>
                            )}
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => {
                                    if (isTtsEnabled) window.speechSynthesis.cancel();
                                    setIsTtsEnabled(!isTtsEnabled);
                                }}
                                title={isTtsEnabled ? "Mute TTS" : "Enable TTS"}
                            >
                                {isTtsEnabled ? <Volume2 className="h-4 w-4 text-primary" /> : <VolumeX className="h-4 w-4 text-muted-foreground" />}
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => setIsMinimized(true)} title="Minimize">
                                <Minus className="h-4 w-4 text-muted-foreground" />
                            </Button>
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
                        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                            <div className="space-y-4 pb-4">
                                {messages.map((m, i) => {
                                    // Highlight logic: if it's the last message AND it's from AI
                                    const isLastAiMessage = i === messages.length - 1 && m.role === "ai";

                                    return (
                                        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm transition-all duration-500
                                            ${m.role === "user"
                                                    ? "bg-primary text-primary-foreground rounded-br-none"
                                                    : m.role === "system"
                                                        ? "bg-muted text-xs text-center w-full shadow-none my-2"
                                                        : "bg-secondary text-secondary-foreground border border-border/50 rounded-bl-none"
                                                }
                                            ${isLastAiMessage ? "ring-2 ring-primary shadow-[0_0_15px_rgba(112,66,248,0.3)] bg-secondary/90 transform scale-[1.02]" : ""}
                                        `}>
                                                {isLastAiMessage && (
                                                    <span className="inline-block px-1.5 py-0.5 mb-2 text-[10px] font-bold bg-primary text-white rounded-full animate-pulse">
                                                        NEW
                                                    </span>
                                                )}
                                                {m.role === "user" ? (
                                                    m.text
                                                ) : (
                                                    <div className="prose prose-sm dark:prose-invert max-w-none text-white prose-p:text-white prose-headings:text-white prose-strong:text-white prose-ul:text-white prose-a:text-blue-400 prose-a:underline prose-a:font-bold">
                                                        <ReactMarkdown>{m.text}</ReactMarkdown>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                                            <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                )}

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
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Footer Controls */}
                    <div className="p-4 bg-background border-t border-border flex items-center gap-2">
                        <div className="relative flex-1">
                            {/* Input Field with Mic Button Inside */}
                            <Input
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendTextMessage()}
                                placeholder={isListening ? "Listening..." : "Type a message..."}
                                className={`pr-20 rounded-full border-primary/20 focus-visible:ring-primary/30 h-10 ${isListening ? "border-green-500 ring-1 ring-green-500/50" : ""}`}
                            />

                            {/* Mic Button */}
                            <Button
                                size="icon"
                                variant="ghost"
                                className={`absolute right-10 top-1 h-8 w-8 rounded-full ${isListening ? "text-red-500 animate-pulse hover:bg-red-500/10" : "text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}
                                onClick={startListening}
                                disabled={isListening}
                                title="Voice Typing"
                            >
                                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                            </Button>

                            {/* Send Button */}
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
                </motion.div>
            )}
        </AnimatePresence>
    );
}
