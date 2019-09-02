import React from "react";
import { connect } from "react-redux";
import { counterIncremet } from "./initialState";
const Counter = props => (
    <h1>
    {props.counter}
    <button onClick={props.increment}>increment</button>
    </h1>
);
const mapState = state => ({
    counter: state.counter
});
const mapDispatch = {
    increment: counterIncremet
};
export const CounterConnected = connect(
    mapState,
    mapDispatch
)(Counter);
