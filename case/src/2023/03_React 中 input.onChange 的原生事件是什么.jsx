import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <input
                onChange={(e) => {
                    console.log("Event: ", e);
                    console.log("NativeEvent: ", e.nativeEvent);
                    console.log("CurrentTarget: ", e.nativeEvent.currentTarget);
                    // 观察 e.nativeEvent.type 可知
                    console.log("NativeEvent Type: ", e.nativeEvent.type);
                }}
            />
        </div>
    );
}
