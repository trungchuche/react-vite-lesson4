import { useState, useEffect } from "react";

import useCarColor from "./hook/useCarColor.jsx";

export default function Car() {
    // State chọn hãng xe
    const [selected, setSelected] = useState("0");
    const [brand, setBrand] = useState("");

    // Custom hook chọn màu xe
    const { selected: colorSelected, valueSelected: color, choice: colorChoice } = useCarColor();

    // Xử lý khi chọn hãng xe
    const handleBrandChange = (e) => {
        setSelected(e.target.value);
    };

    useEffect(() => {
        switch (selected) {
            case "0":
                setBrand("BMW");
                break;
            case "1":
                setBrand("Mercedes");
                break;
            case "2":
                setBrand("Audi");
                break;
            case "3":
                setBrand("Toyota");
                break;
            default:
                setBrand("Unknown");
        }
    }, [selected]);

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <label>Car Brand</label>
            <select value={selected} onChange={handleBrandChange} style={{ marginLeft: 8 }}>
                <option value="0">BMW</option>
                <option value="1">Mercedes</option>
                <option value="2">Audi</option>
                <option value="3">Toyota</option>
            </select>
            <label>Car Color</label>
            <select value={colorSelected} onChange={colorChoice} style={{ marginLeft: 8 }}>
                <option value="0">Red</option>
                <option value="1">Blue</option>
                <option value="2">Green</option>
                <option value="3">Black</option>
            </select>
            <h3 style={{ marginTop: 16 }}>Car Color: {color}, Hãng {brand}</h3>
        </div>
    );
}
