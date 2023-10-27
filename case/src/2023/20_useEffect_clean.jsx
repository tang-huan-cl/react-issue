import { useEffect, useState } from "react";
import "./styles.css";

// https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect

const sleep = (n) =>
    new Promise((resolve, reject) => {
        setTimeout(resolve, n);
    });

export default function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count, "In");
        sleep(3000).then((o) => {
            console.log(count, "Done");
        });
        return () => {
            console.log(count, "Out");
        };
    }, [count]);

    return (
        <div className="App">
            <button onClick={() => setCount((c) => c + 1)}>+1 {count}</button>
        </div>
    );
}
