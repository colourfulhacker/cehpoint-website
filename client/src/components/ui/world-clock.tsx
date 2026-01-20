import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface WorldClockProps {
    timezone: string
    label?: string
    locale?: string
}

export function WorldClock({ timezone, label, locale = "en-US" }: WorldClockProps) {
    const [time, setTime] = useState<string>("")
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const updateTime = () => {
            try {
                const now = new Date()
                const timeString = new Intl.DateTimeFormat(locale, {
                    timeZone: timezone,
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }).format(now)
                setTime(timeString)
            } catch (error) {
                console.error(`Error formatting time for timezone: ${timezone}`, error)
                setTime("--:--")
            }
        }

        updateTime()
        // Align with the next minute to start the interval, then update every minute
        // Actually, updating every second is safer to avoid being "behind" for up to a minute
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [timezone, locale])

    if (!mounted) {
        return <div className="h-5 w-20 animate-pulse bg-muted/20 rounded" />
    }

    return (
        <div
            className="flex items-center gap-1.5 text-xs font-medium text-primary/80 mt-1"
            aria-label={`Current time in ${label || timezone}`}
            role="timer"
        >
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="tabular-nums tracking-wide">{time}</span>
        </div>
    )
}
