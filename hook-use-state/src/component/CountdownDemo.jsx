import React from "react";
import useCountdown from "./hook/useCountdown";

export default function CountdownDemo() {
    const { timeLeft, isRunning, start, reset } = useCountdown(10);

    return (
        <div>
            <h1>Countdown: {timeLeft}s</h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}