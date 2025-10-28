import React from "react";
import useClickCounter from "./hook/useClickCounter";

export default function ClickCounterDemo() {
    // sử dụng hai instance riêng của custom hook useClickCounter
    const { count: countA, handleClick: handleClickA, reset: resetA } = useClickCounter(0);
    const { count: countB, handleClick: handleClickB, reset: resetB } = useClickCounter(0);

    return (
        <div>
            <div>
                <h1>Click Count1: {countA}</h1>
                <button onClick={handleClickA}>Click Me</button>
                <button onClick={resetA}>Reset</button>
            </div>
            <div>
                <h1>Click Count2: {countB}</h1>
                <button onClick={handleClickB}>Click Me</button>
                <button onClick={resetB}>Reset</button>
            </div>

        </div>
    );
}