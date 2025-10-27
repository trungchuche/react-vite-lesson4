import { useState, useEffect } from "react";

export default function useClock() {
    const [time, setTime] = useState("");
    const [ampm, setAmpm] = useState("");

    // cập nhật thời gian
    const updateTime = () => {
        const dateInfo = new Date();
        let hour = 0;

        // lấy theo thời gian 12h
        if (dateInfo.getHours() === 0) {
            hour = 12;
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() - 12;
        } else {
            hour = dateInfo.getHours();
        }

        // lấy phút
        const minute =
            dateInfo.getMinutes() < 10
                ? "0" + dateInfo.getMinutes()
                : dateInfo.getMinutes();

        // lấy giây
        const second =
            dateInfo.getSeconds() < 10
                ? "0" + dateInfo.getSeconds()
                : dateInfo.getSeconds();

        // AM hay PM
        const ampmValue = dateInfo.getHours() >= 12 ? "PM" : "AM";

        // cập nhật state
        setAmpm(ampmValue);
        setTime(`${hour}:${minute}:${second}`);
    };

    // sử dụng useEffect để chạy setInterval khi hook được gọi
    useEffect(() => {
        updateTime(); // cập nhật thời gian ngay lập tức khi gọi hook
        const timer = setInterval(updateTime, 1000);

        // clean up
        return () => clearInterval(timer);
    }, []);

    return { time, ampm };
}