import { useState, useLayoutEffect, useEffect } from "react";
import * as ReactDOM from "react-dom";

export default function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        console.log("=== click ===");
        fetchSomething().then(() => {
            // React 17 and earlier does NOT batch these:
            setCount((c) => c + 1); // Causes a re-render
            setFlag((f) => !f); // Causes a re-render
        });
    }

    console.log("Rerender: 正在重新渲染");

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
            <LogEvents />
        </div>
    );
}

function LogEvents(props) {
    useLayoutEffect(() => {
        console.log("Commit");
    });
    useEffect(() => {
        console.log("useEffect");
    });
    console.log("Render");
    return null;
}

function fetchSomething() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}
