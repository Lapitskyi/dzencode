
// current day
export const dayWeek =():string=>{
    const today = new Date().toLocaleDateString("ru-RU", { weekday: "long" });
    return today.charAt(0).toUpperCase() + today.slice(1);
}

//  "21 Окт, 2025"
export const formatDateShort = () => {
    return new Date().toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

// "14:32"
export const formatTime = () => {
    return new Date().toLocaleTimeString("ru-RU", { hour12: false, hour: "2-digit", minute: "2-digit" });
};
