import React, { useState, useEffect } from "react";

function FundingAmountPlus({ amount }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = amount;
        const duration = 2000;
        const increment = end / (duration / 10);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 10);

        return () => clearInterval(timer);
    }, [amount]);

    return (
    <>{count.toLocaleString()}</>
);

}

export default FundingAmountPlus;
