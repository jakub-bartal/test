export const firstToUpper = (input) =>
    input
        .split(" ")
        .map(word => word.replace(/^\w/, chr => chr.toUpperCase())).join(" ");