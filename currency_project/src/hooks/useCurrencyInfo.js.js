import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // call useState correctly

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // FIXED: res.json(), not resizeBy.json()
            .then((res) => {
                setData(res[currency]); // currency data
            })
            .catch((err) => {
                console.error("Failed to fetch currency data:", err);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
