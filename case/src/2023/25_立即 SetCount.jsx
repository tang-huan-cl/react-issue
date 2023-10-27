import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        setCount(100);
        console.log(count);
    }, []);

    return <div className="App">{count}</div>;
}
