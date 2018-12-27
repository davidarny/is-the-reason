import React from "react";
import PropTypes from "prop-types";
import Centered from "shared/centered";

export function Icon(props) {
    return (
        <Centered
            styles={`
                width: ${props.size}px;
                height: ${props.size}px;
                border-radius: 50%;
                background-color: ${props.background};
                padding: 10px;
                cursor: pointer;
            `}
        >
            <img alt={"Icon"} {...props} onError={(event) => onImageLoadError(event, props.size)} />
        </Centered>
    );
}

Icon.propTypes = {
    size: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    background: PropTypes.string,
};

Icon.defaultProps = {
    background: "black",
};

function onImageLoadError(event, size) {
    event.target.setAttribute("src", `https://via.placeholder.com/${size}`);
}
