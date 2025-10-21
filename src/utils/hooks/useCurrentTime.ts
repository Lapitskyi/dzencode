import { useState, useEffect } from "react";

export function useCurrentTime() {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const weekDay = time
        .toLocaleDateString("ru-RU", { weekday: "long" })
        .replace(/^./, (c) => c.toUpperCase());

    const currentDay = `${time.getDate().toString().padStart(2, "0")} ${time.toLocaleString("ru-RU", { month: "short" })} ${time.getFullYear()}`;

    const currentTime =time.toLocaleTimeString("ru-RU", { hour12: false, hour: "2-digit", minute: "2-digit" })

    return {
        weekDay,
        currentDay,
        currentTime,
    }
}
