import { useState } from "react";
import "./styles.css";

function One({ count, setCount }) {
    return (
        <div style={{ border: "1px solid red" }}>
            <h2>Conponent One</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <div>{count}</div>
        </div>
    );
}

function Two({ count, setCount }) {
    return (
        <div style={{ border: "1px solid red" }}>
            <h2>Conponent Two</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <div>{count}</div>
        </div>
    );
}

export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <One count={count} setCount={(c) => setCount(c)} />
            <Two count={count} setCount={(c) => setCount(c)} />
        </div>
    );
}
