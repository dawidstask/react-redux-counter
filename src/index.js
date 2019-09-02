import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReseterConnected } from "./Resetter";
import "./styles.css";
import { store } from "./initialState";
import { CounterConnected } from "./Counter";

function App() {
    return (
        <Provider store={store}>
        <div className="App">
        <CounterConnected />
        <ReseterConnected />
        </div>
        </Provider>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
