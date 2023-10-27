import { useState } from "react";
import "./styles.css";

function User({ user }) {
    console.log("Render User:", user.id);
    return (
        <div>
            <span>{user.name}</span>
            <input />
        </div>
    );
}

export default function App() {
    // 在这段代码中，使用 index 作为 key 会引发 bug。
    // 但是一般如果该数组没有增删改查，不会出现问题

    const [list, setList] = useState([
        {
            id: 1,
            name: "张三"
        },
        {
            id: 2,
            name: "李四"
        },
        {
            id: 3,
            name: "王五"
        },
        {
            id: 4,
            name: "赵六"
        },
        {
            id: 5,
            name: "孙七"
        }
    ]);

    return (
        <div className="App">
            {list.map((x, i) => (
                // 填充右侧表单为 3/4/5/6/7
                // 如果使用 x.id 作为 key 则不会出现问题
                <User user={x} /> // key={x.id} 
            ))}
            <button
                onClick={() => {
                    setList(list.slice(1));
                }}
            >
                删除第一个
            </button>
        </div>
    );
}
