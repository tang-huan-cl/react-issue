import { memo, useState } from "react";
import "./styles.css";

function List({ list }) {
    return <p>{list.join(",")}</p>;
}

const MemoList = memo(List);

export default function App() {
    const [list, setList] = useState(["A"]);
    const [f, setF] = useState(true);

    console.log("Rerender", list);

    return (
        <div className="App">
            <button
                onClick={() => {
                    list.push("B");
                    // setList(list);

                    setF(!f);
                    // setList([...list, 'B']);

                }}
            >
                Click
            </button>
            <div>
                List:
                <List list={list} />
            </div>
            <div>
                MemoList:
                <MemoList list={list} />
            </div>
        </div>
    );
}
