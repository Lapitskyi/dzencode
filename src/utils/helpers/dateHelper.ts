
// current day
export const dayWeek =():string=>{
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    return today.charAt(0).toUpperCase() + today.slice(1);
}

//  "21 Окт, 2025"
export const formatDateShort = (str:string) => {
    const formattedDate =  str ? new Date(str) : new Date();
    return `${formattedDate.getDate().toString().padStart(2, "0")} ${formattedDate.toLocaleString("en-US", { month: "short" })} ${formattedDate.getFullYear()}`;
};

// "14:32"
export const formatTime = (str:string) => {
    if(str){
        return new Date(str).toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
    }
    return new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
};
