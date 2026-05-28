import { useState, useEffect, useRef } from "react";
import { X, Mic, MicOff, Send, Trash2, Minus, Plus, Volume2, VolumeX, MessageCircle, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { leadershipData, Leader } from "@/data/leadership";
import ReactMarkdown from "react-markdown";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const KAIRA_TOAST_DISMISSED_KEY = "kaira_toast_dismissed_session";

interface KairaDialogProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


interface Message {
    role: "user" | "ai" | "system";
    text: string;
}

const STORAGE_KEY = "kaira_chat_history";

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function KairaDialog({ isOpen, onOpen, onClose }: KairaDialogProps) {
    const [location] = useLocation();
    const { toast } = useToast();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fallbackLeader, setFallbackLeader] = useState<(Leader & { reason?: string }) | null>(null);

    // Kaira's Persona - Adaptive, Professional & Context-Aware
    const SYSTEM_PROMPT = `
You are Kaira, the Senior AI Executive Assistant for CEHPOINT.

PHASE-BASED PROTOCOL:
- Phase 1 (Discovery): First 6 exchanges. MUST ask deep clarifying questions. NO handoffs.
- Phase 2 (Analysis): Summarize user needs. Ensure they align with the current page intent.
- Phase 3 (Handoff): ONLY suggest an expert if the requirement is high-stakes and Turn 7+.

TONE: Elite, Professional, Human-centric.
CURRENCY: Always use INR.
`;
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

    // Trigger Toast once per session (skip if user dismissed or reduced motion)
    useEffect(() => {
        if (isOpen) return;
        if (prefersReducedMotion()) return;
        const dismissed = sessionStorage.getItem(KAIRA_TOAST_DISMISSED_KEY) === "1";
        if (dismissed) return;
        // Only fire on the first route view of the session
        const seen = sessionStorage.getItem("kaira_toast_seen");
        if (seen) return;
        setShowToast(false);
        const timer = setTimeout(() => {
            setShowToast(true);
            sessionStorage.setItem("kaira_toast_seen", "1");
        }, 5000);
        return () => clearTimeout(timer);
    }, [location, isOpen]);

    // Lock body scroll when dialog is open on mobile + bind Escape
    useEffect(() => {
        if (!isOpen) return;
        const isMobileViewport = window.innerWidth < 768;
        const originalOverflow = document.body.style.overflow;
        if (isMobileViewport) {
            document.body.style.overflow = "hidden";
        }
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", onKey);
        };
    }, [isOpen, onClose]);

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
            return "Looking for a career change? I'm Kaira, and I can guide you through our latest openings. What's your area of expertise?";
        }
        if (path.includes("/services/cyber-crime-investigation")) {
            return "Cyber security concerns? I'm here to help. Could you tell me more about what happened?";
        }
        if (path.includes("/services") || path.includes("/business-app")) {
            return "Looking for tech solutions? I can help you find the right enterprise tools for your business. What are you looking to build?";
        }
        if (path.includes("/contact")) {
            return "How can we assist you today? Whether it's an inquiry or a specific project, I'm here to help.";
        }
        return "Hello, I'm Kaira AI from CEHPOINT. How can I assist you with our services or career opportunities today?";
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

    const checkForFallback = (aiResponseText: string) => {
        // HARD CONSTRAINT: At least 13 messages (Greeting + 6 pairs)
        // This aligns with the Turn 7+ handoff logic.
        if (messages.length < 13) {
            console.log("Kaira: Handoff blocked by strict turn count (Turn 7 requirement).");
            return;
        }

        // Regex to find [RECOMMEND_LEADER: ...]
        const match = aiResponseText.match(/\[RECOMMEND_LEADER:\s*([^\]]+)\]/);

        if (match) {
            let targetDept = match[1].trim();

            // PAGE-SPECIFIC OVERRIDE
            if (location.includes("/careers") || location.includes("/jobs")) {
                targetDept = "People, Culture & Workforce Strategy";
            }

            // Derive reasoning
            let reason = "Recommended based on your requirements";
            if (targetDept.includes("Cybercrime")) reason = "Specialist in Cyber Investigation & Forensics";
            else if (targetDept.includes("People")) reason = "Head of Talent & Culture";
            else if (targetDept.includes("Tech")) reason = "Expert in Technical Solutions & Development";
            else if (targetDept.includes("Exec")) reason = "Strategy & Business Consultant";

            // Filter experts by valid department
            const experts = leadershipData.filter(l =>
                (l.department?.toLowerCase() || "").includes(targetDept.toLowerCase())
            );

            if (experts.length > 0) {
                const selected = experts[Math.floor(Math.random() * experts.length)];
                setFallbackLeader({ ...selected, reason });
            }
        }
    };

    const clearHistory = () => {
        const initial: Message[] = [{ role: "ai", text: "Hello, I'm Kaira AI. How can I assist you today?" }];
        setMessages(initial);
        setFallbackLeader(null); // Fix: Clear previous leader suggestion
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    };

    // SAFETY CHECK: Ensure we never show a leader with no history (e.g. after clear)
    useEffect(() => {
        if (messages.length < 2) {
            setFallbackLeader(null);
        }
    }, [messages]);

    // Voice Typing Logic (Web Speech API)
    const startListening = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            toast({
                title: "Voice Typing unavailable",
                description: "Your browser does not support Voice Typing. Please use Chrome or Edge.",
                variant: "destructive",
            });
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

        // Calculate conversation turns (exclude greeting)
        const conversationTurns = Math.floor((messages.length - 1) / 2) + 1;

        try {
            const response = await fetch("/api/kaira-chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: msg,
                    location: window.location.pathname,
                    conversationTurn: conversationTurns,
                    history: messages.filter(m => m.role !== 'system').slice(-6)
                })
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error(`API Error ${response.status}: ${errText.slice(0, 100)}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let accumulatedResponse = "";

            if (!reader) throw new Error("No reader available");

            // Add placeholder AI message
            setMessages(prev => [...prev, { role: "ai", text: "" }]);
            playNotificationSound();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                accumulatedResponse += chunk;

                // Update the last message (the placeholder we just added)
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = {
                        role: "ai",
                        text: accumulatedResponse
                    };
                    return newMessages;
                });
            }

            // Post-processing after stream ends
            let cleanResponse = accumulatedResponse;

            // AGGRESSIVE TAG SUPPRESSION: Strip [RECOMMEND_LEADER] tags from first 6 turns
            if (conversationTurns <= 6) {
                cleanResponse = cleanResponse.replace(/\[RECOMMEND_LEADER:\s*[^\]]+\]/g, "").trim();
                console.log(`Turn ${conversationTurns}: Handoff tag suppressed (too early)`);
            } else {
                checkForFallback(accumulatedResponse);
                cleanResponse = cleanResponse.replace(/\[RECOMMEND_LEADER:\s*[^\]]+\]/g, "").trim();
            }

            // Update final clean response and speak
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                    role: "ai",
                    text: cleanResponse
                };
                return newMessages;
            });

            speakText(cleanResponse);

        } catch (e: any) {
            console.error("Text Chat Error", e);
            addMessage("system", `I'm having a bit of trouble connecting to my knowledge base. Error: ${e.message}. Please try refreshing or check back in a moment.`);
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
                        role="region"
                        aria-label="Kaira AI Assistant (minimized)"
                        className={`fixed z-[9999] bg-background border border-primary/20 shadow-lg flex items-center justify-between p-3 font-sans rounded-md
                            ${isMobile ? "bottom-20 right-4 w-[calc(100%-32px)]" : "bottom-5 right-5 w-[300px]"}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                            <span className="font-semibold text-sm tracking-wide">Kaira AI Assistant</span>
                        </div>
                        <div className="flex gap-1">
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsMinimized(false)} aria-label="Expand Kaira chat">
                                <Plus className="h-4 w-4" aria-hidden="true" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose} aria-label="Close Kaira chat">
                                <X className="h-4 w-4" aria-hidden="true" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    const isMaximized = isMobile || isFullscreen;

    return (
        <>
            {/* Proactive Speech Bubble Notification */}
            <AnimatePresence>
                {showToast && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className={`fixed z-[9998] cursor-pointer flex flex-col items-end
                             ${isMobile ? "bottom-20 right-4 max-w-[280px]" : "bottom-24 right-8 max-w-[320px]"}
                        `}
                        role="button"
                        tabIndex={0}
                        aria-label="Open Kaira AI Assistant"
                        onClick={() => {
                            onOpen();
                            setShowToast(false);
                            if (messages.length === 0) {
                                setMessages([{ role: "ai", text: getGreeting(location) }]);
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onOpen();
                                setShowToast(false);
                            }
                        }}
                    >
                        {/* Bubble Container */}
                        <div className="glass-intense px-5 py-4 rounded-2xl rounded-br-sm shadow-2xl border border-foreground/10 flex items-start gap-3 relative transform transition-transform hover:scale-105">
                            {/* Avatar Icon inside bubble */}
                            <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                <MessageCircle className="w-5 h-5 text-primary" aria-hidden="true" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">Kaira AI</span>
                                <span className="text-sm font-medium leading-relaxed text-white">
                                    {getGreeting(location)}
                                </span>
                            </div>

                            {/* Close Button (Small) */}
                            <button
                                type="button"
                                aria-label="Dismiss Kaira notification"
                                className="absolute -top-2 -right-2 bg-background/80 text-white/60 hover:text-red-500 rounded-full p-1 shadow-md border border-foreground/10 hover:bg-secondary/50 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowToast(false);
                                    sessionStorage.setItem(KAIRA_TOAST_DISMISSED_KEY, "1");
                                }}
                            >
                                <X className="w-3 h-3" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Speech Bubble Arrow/Tail */}
                        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-background/40 border-r-[0px] border-r-transparent mt-[-1px] mr-6 filter drop-shadow-sm"></div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            borderRadius: isMaximized ? "0px" : "12px",
                            bottom: isMaximized ? "0px" : "20px",
                            right: isMaximized ? "0px" : "20px"
                        }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="kaira-dialog-title"
                        className={`fixed bg-background border border-border shadow-2xl z-[9999] flex flex-col overflow-hidden font-sans
                        ${isMaximized ? "inset-0 m-0" : ""}
                    `}
                    >
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-border bg-card flex items-center justify-between cursor-move select-none" onDoubleClick={() => !isMobile && setIsFullscreen(!isFullscreen)}>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-9 w-9 border border-border/50">
                                    <AvatarImage src="/kaira.png" alt="" />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">K</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 id="kaira-dialog-title" className="font-bold text-sm leading-none mb-1">Kaira AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {/* Toggle Fullscreen (Desktop Only) */}
                                {!isMobile && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsFullscreen(!isFullscreen)}
                                        title={isFullscreen ? "Restore" : "Maximize"}
                                        aria-label={isFullscreen ? "Restore window size" : "Maximize chat"}
                                    >
                                        {isFullscreen ? <Minus className="h-4 w-4 rotate-90" aria-hidden="true" /> : <div className="w-4 h-4 border-2 border-muted-foreground rounded-sm" aria-hidden="true" />}
                                    </Button>
                                )}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        if (isTtsEnabled) window.speechSynthesis.cancel();
                                        setIsTtsEnabled(!isTtsEnabled);
                                    }}
                                    title={isTtsEnabled ? "Mute voice" : "Enable voice"}
                                    aria-label={isTtsEnabled ? "Mute text-to-speech" : "Enable text-to-speech"}
                                    aria-pressed={isTtsEnabled}
                                >
                                    {isTtsEnabled ? <Volume2 className="h-4 w-4 text-primary" aria-hidden="true" /> : <VolumeX className="h-4 w-4 text-muted-foreground" aria-hidden="true" />}
                                </Button>
                                <Button variant="ghost" size="icon" onClick={() => setIsMinimized(true)} title="Minimize" aria-label="Minimize chat">
                                    <Minus className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => {
                                        if (window.confirm("Clear chat history?")) clearHistory();
                                    }}
                                    title="Clear chat"
                                    aria-label="Clear chat history"
                                >
                                    <Trash2 className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                </Button>
                                <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close Kaira chat">
                                    <X className="h-4 w-4" aria-hidden="true" />
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
                                            <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center shadow-sm">
                                                <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                        </div>
                                    )}

                                    {fallbackLeader && (
                                        <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="mt-6 mx-2 mb-6 group">
                                            <div className="bg-card/40 backdrop-blur-md border border-primary/30 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-primary/10 hover:border-primary/50">
                                                <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-5 py-2.5 border-b border-foreground/5 flex justify-between items-center">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary-foreground/90">
                                                            Strategic Contact
                                                        </span>
                                                    </div>
                                                    <Badge variant="outline" className="text-[9px] h-5 bg-primary/20 text-primary-foreground border-primary/20 px-2 font-semibold">
                                                        {fallbackLeader.department?.split('&')[0].trim() || "Leadership"}
                                                    </Badge>
                                                </div>
                                                <div className="p-5 flex items-center gap-5">
                                                    <div className="relative">
                                                        <Avatar className="h-16 w-16 border-2 border-primary/20 shadow-xl">
                                                            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white font-bold text-xl uppercase">
                                                                {fallbackLeader.name.charAt(0)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center">
                                                            <div className="bg-white w-1.5 h-1.5 rounded-full" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-base text-white truncate tracking-tight">{fallbackLeader.name}</h4>
                                                        <p className="text-xs text-muted-foreground mb-4 font-medium leading-tight">
                                                            {fallbackLeader.designation}
                                                        </p>

                                                        <a
                                                            href={`mailto:${fallbackLeader.email}?subject=Inquiry via Kaira AI&body=Hi ${fallbackLeader.name}, I was recommended to contact you regarding...`}
                                                            className="flex items-center justify-center gap-2 text-xs font-bold text-white bg-primary hover:bg-primary/90 transition-all px-4 py-2.5 rounded-xl shadow-lg shadow-primary/20 active:scale-95 group-hover:translate-y-[-2px]"
                                                        >
                                                            <Mail className="w-3.5 h-3.5" />
                                                            Connect with Executive
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
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
                                <label htmlFor="kaira-chat-input" className="sr-only">Message Kaira</label>
                                <Input
                                    id="kaira-chat-input"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendTextMessage()}
                                    placeholder={isListening ? "Listening..." : "Type a message..."}
                                    aria-label="Message Kaira"
                                    className={`pr-20 rounded-full border-primary/20 focus-visible:ring-primary/30 h-10 text-base ${isListening ? "border-green-500 ring-1 ring-green-500/50" : ""}`}
                                />

                                {/* Mic Button */}
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={`absolute right-10 top-1 h-8 w-8 rounded-full ${isListening ? "text-red-500 animate-pulse hover:bg-red-500/10" : "text-muted-foreground hover:bg-primary/10 hover:text-primary"}`}
                                    onClick={startListening}
                                    disabled={isListening}
                                    title="Voice typing"
                                    aria-label={isListening ? "Listening for voice input" : "Start voice typing"}
                                >
                                    {isListening ? <MicOff className="h-4 w-4" aria-hidden="true" /> : <Mic className="h-4 w-4" aria-hidden="true" />}
                                </Button>

                                {/* Send Button */}
                                <Button
                                    size="icon"
                                    className="absolute right-1 top-1 h-8 w-8 rounded-full"
                                    onClick={sendTextMessage}
                                    disabled={!inputText.trim() || isLoading}
                                    aria-label="Send message"
                                >
                                    <Send className="h-4 w-4" aria-hidden="true" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
