import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <button
                onClick={(e) => {
                    // React 中事件为合成事件
                    // 你可以通过 `e.nativeEvent` 获取到原生事件
                    const nativeEvent = e.nativeEvent;
                    console.log(
                        "Native Event CurrentTarget",
                        // 观察 `e.nativeEvent.currentTarget`
                        // 你将会发现 React 将所有事件都绑定在了 `#app`(React 应用挂载的根组件)
                        nativeEvent.currentTarget
                    );
                    console.log("SyntheticEvent CurrentTarget", e, e.currentTarget);
                }}
            >
                Click Me
            </button>
        </div>
    );
}
