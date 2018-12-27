import React from "react";
import PropTypes from "prop-types";

export function TopImage(props) {
    return <img alt={"TopImage"} {...props} onError={onImageLoadError} />;
}

function onImageLoadError(event) {
    event.target.setAttribute("src", "https://via.placeholder.com/400");
}

TopImage.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string,
};
