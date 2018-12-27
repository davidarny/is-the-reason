import Wrapper from "shared/wrapper";
import React from "react";
import PropTypes from "prop-types";

export function Centered(props) {
    return (
        <Wrapper
            display="flex"
            styles={`
                justify-content: center;
                align-items: center;
                position: relative;
                ${props.styles || ""}
            `}
        >
            {props.children}
        </Wrapper>
    );
}

Centered.propTypes = {
    styles: PropTypes.string,
};
