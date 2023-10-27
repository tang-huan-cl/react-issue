import { useState } from "react";
import "./styles.css";

export default function App() {
    const [todo, setTodo] = useState({ id: 1, status: "TODO" });
    return (
        <div className="App">
            <button
                onClick={() => {
                    todo.status = "DONE";
                    setTodo(todo);
                }}
            >
                无效的切换状态
            </button>
            <button
                onClick={() => {
                    setTodo({
                        id: 1,
                        status: "DONE"
                    });
                }}
            >
                有效的切换状态
            </button>
            <h1>{todo.status}</h1>
        </div>
    );
}
