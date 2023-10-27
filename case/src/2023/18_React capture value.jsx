import { Component, useState } from "react";
import "./styles.css";

class NoCapture extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }
    render() {
        console.log("------>1: ", this.state.count);
        return (
            <div className="App">
                <div>{this.state.count}</div>
                <button
                    onClick={() => {
                        setTimeout(
                            () => console.log("Class Component: ", this.state.count),
                            2000
                        );
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    多次点击按钮，观察输出(React Class Component)
                </button>
            </div>
        );
    }
}

function Capture() {
    const [count, setCount] = useState(0);
    console.log("------>2: ", count);

    return (
        <div className="App">
            <div>{count}</div>
            <button
                onClick={() => {
                    setTimeout(() => console.log("Function Component", count), 2000);
                    setCount(count + 1);
                }}
            >
                多次点击按钮，观察输出(React Hooks)
            </button>
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <Capture />
            <NoCapture />
        </div>
    );
}
