import React from "react";
import Absolute from "./components/absolute";

export function Overlapped(props) {
    return <Absolute {...props}>{props.children}</Absolute>;
}

Overlapped.propTypes = {
    ...Absolute.propTypes,
};
