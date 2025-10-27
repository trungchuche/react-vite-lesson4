import { useState, useEffect } from "react";

// Custom hook useClock
export default function useCarColor() {
    // khoi tao state
    const [selected, setSelected] = useState("0");
    const [valueSelected, setValueSelected] = useState("");

    // ham xu ly khi thay doi lua chon
    const choice = (e) => {
        setSelected(e.target.value);
    };

    // useEffect de lang nghe khi selected thay doi
    useEffect(() => {
        switch (selected) {
            case "0":
                setValueSelected("Red");
                break;
            case "1":
                setValueSelected("Blue");
                break;
            case "2":
                setValueSelected("Green");
                break;
            case "3":
                setValueSelected("Black");
                break;
            default:
                setValueSelected("Unknown");
        }
    }, [selected]);

    return { selected, valueSelected, choice };
}