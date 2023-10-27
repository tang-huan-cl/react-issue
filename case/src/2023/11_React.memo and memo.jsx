import { useMemo, useState } from "react";
import "./styles.css";

export default function App() {
    const [count, setCount] = useState(3);
    const [flag, setFlag] = useState(false);
    const d = useMemo(() => {
        console.log("Computed");
        return count * 10;
    }, [count]);
    console.log("Rerender APP");
    return (
        <div className="App">
            <div>{d}</div>
            <button onClick={() => setFlag(!flag)}>{flag.toString()}</button>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
        </div>
    );
}
