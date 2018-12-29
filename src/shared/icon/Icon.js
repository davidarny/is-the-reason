import React from "react";
import PropTypes from "prop-types";
import Centered from "shared/centered";
import styled from "styled-components";
import * as system from "styled-system";
import config from "config";

function Icon(props) {
    return (
        <Centered cursor={"pointer"} className={props.className}>
            <img alt={props.alt} src={props.src} onError={(event) => onImageLoadError(event, props.size)} />
        </Centered>
    );
}

const hoverBackground = system.style({
    prop: "hoverBackground",
    cssProperty: "background",
});

export const StyledIcon = styled(Icon)`
    ${system.background}
    ${system.width}
    ${system.height}
    border-radius: 50%;
    transition:
        background-color
        ${system.themeGet("transitionDuration", "0.15s")}
        ${system.themeGet("transitionFunction", "ease-in-out")};

    :hover {
        ${hoverBackground}
    }
`;

StyledIcon.propTypes = {
    ...system.background.propTypes,
    ...system.width.propTypes,
    ...system.height.propTypes,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

StyledIcon.defaultProps = {
    background: "black",
};

function onImageLoadError(event, size) {
    event.target.setAttribute("src", config.image.stub.replace("{width}", size).replace("{height}", size));
}
