import { memo, useState } from "react";
import "./styles.css";

const Random = memo(function Random() {
    return <span>{Math.random().toString().slice(0, 3)}</span>;
});

export default function App() {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6]);

    console.log(list);

    return (
        <div className="App">
            <button
                onClick={() => {
                    setList(list.slice(1));
                }}
            >
                删除最后一项
            </button>
            {list.map((x, i) => (
                <div key={i}>
                    <Random />
                </div>
            ))}
        </div>
    );
}
