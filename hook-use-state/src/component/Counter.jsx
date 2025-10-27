import { useState } from 'react';

export default function Counter() {
    // khởi tạo state count với giá trị ban đầu là 0
    const [count, setCount] = useState(0);

    // hàm tăng giá trị count lên 1
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount); // cập nhật state => giao diện tự render lại
    };

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <h2>Giá trị: {count}</h2>
            <button onClick={handleClick}>Tăng</button>
        </div>
    );
}