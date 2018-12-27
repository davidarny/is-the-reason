import React from "react";
import Absolute from "./components/absolute";
import PropTypes from "prop-types";

export function Overlapped(props) {
    return <Absolute {...props}>{props.children}</Absolute>;
}

Overlapped.propTypes = {
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
