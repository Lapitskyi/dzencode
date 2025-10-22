import { useState, useEffect } from "react";

export function useCurrentTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const weekDay = time
        .toLocaleDateString("en-US", { weekday: "long" })
        .replace(/^./, (c) => c.toUpperCase());

    const currentDay = `${time.getDate().toString().padStart(2, "0")} ${time.toLocaleString("en-US", { month: "short" })} ${time.getFullYear()}`;

    const currentTime =time.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" })

    return {
        weekDay,
        currentDay,
        currentTime,
    }
}
