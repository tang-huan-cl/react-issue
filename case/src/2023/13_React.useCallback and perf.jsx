import { memo, useCallback, useState } from "react";
import "./styles.css";

let i = 0;

const Increment = memo(function Increment({ increment, title }) {

    console.log("ReRender Increment Component:", title);
    i++;
    console.log("+++", i);
    return (
        <div>
            <button onClick={increment}>+1</button>
        </div>
    );
});

export default function App() {
    const [count, setCount] = useState(0);

    const increment = () => setCount((c) => c + 1);
    const incrementWithCallback = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <div className="App">
            <Increment increment={incrementWithCallback} title="with useCallback" />
            <Increment increment={increment} title="without useCallback" />
            {count}
        </div>
    );
}
