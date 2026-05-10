export function getFormattedDate(offset: number = 0): string {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export const getYesterdayDate = () => getFormattedDate(-1);
export const getTodayDate = () => getFormattedDate(0);
