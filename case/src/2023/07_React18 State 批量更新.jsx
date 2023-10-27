import { useState } from "react";

function fetchSomething() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}

export default function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        console.log("=== click ===");
        fetchSomething().then(() => {
            // React 18 with createRoot batches these:
            setCount((c) => c + 1); // Does not re-render yet
            setFlag((f) => !f); // Does not re-render yet
            // React will only re-render once at the end (that's batching!)
        });
    }

    console.log('----------->', flag);

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
        </div>
    );
}

