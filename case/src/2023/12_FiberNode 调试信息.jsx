import { useEffect, useState } from "react";
import "./styles.css";

function Hello() {
    const [count, setCount] = useState(0);
    useEffect(() => { }, []);
    const node = (
        <div
            onClick={() => {
                setCount(count + 1);
            }}
        >
            {count}
        </div>
    );
    console.log(node);
    console.log(node._owner);
    debugger;
    return node;
}

export default function App() {
    return <Hello />;
}
