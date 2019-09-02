import React from "react";
import { connect } from "react-redux";
import { counterReset } from "./initialState";

const Resetter = props => <button onClick={props.reset}>reset</button>;
const mapDispatchR = {
    reset: counterReset
};
export const ReseterConnected = connect(
    null,
    mapDispatchR
)(Resetter);
