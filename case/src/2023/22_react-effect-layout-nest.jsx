import { useEffect, useLayoutEffect } from "react";
// import "./App.css";

function Child() {
    console.log("Child: Render");

    useEffect(() => {
        console.log("Child: useEffect");
    });

    useLayoutEffect(() => {
        console.log("Child: useLayoutEffect");
    });

    return <div className="App">Child</div>;
}

function App() {
    console.log("App: render");

    useEffect(() => {
        console.log("App: useEffect");
    });

    useLayoutEffect(() => {
        console.log("App: useLayoutEffect");
    });

    return (
        <div className="App">
            App
            <Child />
        </div>
    );
}

export default App;
