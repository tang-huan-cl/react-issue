import { useState, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom";

export default function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        console.log("=== click ===");
        setCount((c) => c + 1); // Does not re-render yet
        setFlag((f) => !f); // Does not re-render yet
        // React will only re-render once at the end (that's batching!)
    }

    // 可通过此语句观察重新渲染次数
    // 也可以通过以下的组件 LogEvents 观察重新渲染次数
    console.log("ReRender: 正在重新渲染");

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
    console.log("Render");
    return null;
}

