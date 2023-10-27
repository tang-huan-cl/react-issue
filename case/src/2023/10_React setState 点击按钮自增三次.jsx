import "./styles.css";
import { useState } from "react";

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <button
                onClick={() => {
                    setCount((c) => c + 1);
                    setCount((c) => c + 1);
                    setCount((c) => c + 1);

                    // 以下是错误示范
                    // setCount(count + 1);
                    // setCount(count + 1);
                    // setCount(count + 1);
                }}
            >
                Click
            </button>
            <div>{count}</div>
        </div>
    );
}
