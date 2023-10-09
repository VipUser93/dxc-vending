import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
    const { money, error } = useSelector((state) => state.vending);

    return (
        <div className="terminal-display">
            <div className="text">
                {money === 0 ? (
                    <>
                        <p>Enter coins...</p>
                    </>
                ) : (
                    <>
                        <p>Cash: {money.toFixed(2)}</p>
                    </>
                )}
                {error.length > 0 && (
                    <p className="error">{error}</p>
                )}
            </div>
        </div>
    )
}

export default Display;