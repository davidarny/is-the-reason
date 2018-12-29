import React from "react";
import PropTypes from "prop-types";
import Centered from "shared/centered";

export function Icon(props) {
    return (
        <Centered
            width={`${props.size}px`}
            height={`${props.size}px`}
            borderRadius={"50%"}
            background={props.background}
            p={"10px"}
            cursor={"pointer"}
            {...props}
        >
            <img alt={"Icon"} {...props} onError={(event) => onImageLoadError(event, props.size)} />
        </Centered>
    );
}

Icon.propTypes = {
    ...Centered.propTypes,
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
