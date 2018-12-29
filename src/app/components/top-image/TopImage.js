import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mask from "./img/mask.png";
import config from "config";

function TopImage(props) {
    return <img alt={"TopImage"} {...props} onError={onImageLoadError} />;
}

export const StyledTopImage = styled(TopImage)`
    -webkit-mask-box-image: url("${mask}");
`;

function onImageLoadError(event) {
    event.target.setAttribute(
        "src",
        config.image.stub.replace("{width}", config.image.width).replace("{height}", config.image.height),
    );
}

TopImage.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string,
};
