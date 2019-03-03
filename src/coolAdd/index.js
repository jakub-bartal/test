export const coolAdd = (firstParam, secParam) =>
    secParam
        ? firstParam + secParam
        : (secParam) => firstParam + secParam;