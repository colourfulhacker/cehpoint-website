import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface WorldClockProps {
    timezone: string
    label?: string
    locale?: string
}

export function WorldClock({ timezone, label, locale = "en-US" }: WorldClockProps) {
    const [time, setTime] = useState<string>("")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const updateTime = () => {
            try {
                const now = new Date()
                
                // Format the time string
                const timeString = new Intl.DateTimeFormat(locale, {
                    timeZone: timezone,
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }).format(now)
                setTime(timeString)

                // Determine Open/Closed status
                const parts = new Intl.DateTimeFormat("en-US", {
                    timeZone: timezone,
                    weekday: "short",
                    hour: "numeric",
                    hourCycle: "h23",
                }).formatToParts(now)

                const weekday = parts.find(p => p.type === 'weekday')?.value
                const hourPart = parts.find(p => p.type === 'hour')?.value
                const hour = hourPart ? parseInt(hourPart, 10) : 0

                const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday || "")
                
                let currentlyOpen = false
                if (isWeekday) {
                    if (timezone === "Asia/Kolkata") {
                        // India: 2:00 PM (14) to 10:00 PM (22)
                        currentlyOpen = hour >= 14 && hour < 22
                    } else {
                        // International: 9:00 AM (9) to 6:00 PM (18)
                        currentlyOpen = hour >= 9 && hour < 18
                    }
                }
                setIsOpen(currentlyOpen)

            } catch (error) {
                console.error(`Error formatting time for timezone: ${timezone}`, error)
                setTime("--:--")
                setIsOpen(false)
            }
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [timezone, locale])

    if (!mounted) {
        return <div className="h-5 w-20 animate-pulse bg-muted/20 rounded mt-1" />
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
                <div
                    className="flex items-center gap-1.5 text-xs font-medium text-primary/80 mt-1"
                    aria-label={`Current time in ${label || timezone}`}
                    role="timer"
                >
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span className="tabular-nums tracking-wide">{time}</span>
                </div>
                <div className={`mt-1 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${isOpen ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                    {isOpen ? "Open Now" : "Closed Now"}
                </div>
            </div>
            <div className="text-[10px] text-muted-foreground/70 font-medium tracking-wide">
                Hours: {timezone === "Asia/Kolkata" ? "2:00 PM - 10:00 PM (Mon-Fri)" : "9:00 AM - 6:00 PM (Mon-Fri)"}
            </div>
        </div>
    )
}
