import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { KairaDialog } from "./KairaDialog";

export function KairaWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
            >
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-14 w-14 rounded-full shadow-lg p-0 overflow-hidden border-2 border-primary/50 hover:border-primary transition-all duration-300"
                >
                    <Avatar className="h-full w-full">
                        <AvatarImage src="/kaira.png" className="object-cover" />
                        <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                </Button>
            </motion.div>

            <KairaDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
