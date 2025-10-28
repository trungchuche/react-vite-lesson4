import { useState, useEffect } from "react";

export default function useCountdown(initialTime = 10) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }

        // Khi hết giờ
        if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
            alert("Time up!");
        }

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const start = () => setIsRunning(true);
    const reset = () => {
        setTimeLeft(initialTime);
        setIsRunning(false);
    };

    return { timeLeft, isRunning, start, reset };
}