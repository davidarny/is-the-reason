import React from "react";
import PropTypes from "prop-types";

export function AudioBackground(props) {
    return (
        <audio autoPlay loop preload={"true"}>
            <source src={props.background} type={"audio/mp4"} />
        </audio>
    );
}

AudioBackground.propTypes = {
    background: PropTypes.string.isRequired,
};
