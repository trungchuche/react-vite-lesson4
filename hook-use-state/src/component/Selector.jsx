import { useState, useEffect } from "react";

export default function Selector() {
    // khoi tai state
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
                setValueSelected("Java");
                break;
            case "1":
                setValueSelected("Angular");
                break;
            case "2":
                setValueSelected("JavaScript");
                break;
            case "3":
                setValueSelected("Php");
                break;
            default:
                setValueSelected("Unknown");
        }
    }, [selected]);

    return (
        <div style={{ textAlign: "center", marginTop: 40 }}>
            <label>Khóa học</label>
            <select value={selected} onChange={choice} style={{ marginLeft: 8 }}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">JavaScript</option>
                <option value="3">Php</option>
            </select>
            <h3 style={{ marginTop: 16 }}>Bạn đã chọn: {valueSelected}</h3>
        </div>
    );
}