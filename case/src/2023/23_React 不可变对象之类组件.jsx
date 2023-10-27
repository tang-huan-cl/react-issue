import { memo, Component } from "react";
import "./styles.css";

function List({ list }) {
    return <p>{list.join(",")}</p>;
}

const MemoList = memo(List);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["A"]
        };
    }

    render() {
        const list = this.state.list;
        return (
            <div className="App">
                <button
                    onClick={() => {
                        list.push("B");

                        this.setState({
                            list
                        });
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
}
