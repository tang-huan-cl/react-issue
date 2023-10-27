import "./styles.css";
import { useEffect, useLayoutEffect } from "react";

export default function App() {
    useEffect(() => {
        console.log("Effect:");
    });

    useLayoutEffect(() => {
        console.log("Layout Effect:");
    });

    return (
        <div className="App">
            <h1>山月</h1>
        </div>
    );
}
