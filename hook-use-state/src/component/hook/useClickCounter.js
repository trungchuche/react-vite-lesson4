import { useState } from "react";

export default function useClickCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    // hàm tăng giá trị count lên 1
    const handleClick = () => setCount((prev) => prev + 1);

    // hàm reset count
    const reset = () => setCount(0);

    // trả về giá trị count và hàm xử lý sự kiện
    return { count, handleClick, reset };
}
