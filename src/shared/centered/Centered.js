import Wrapper from "shared/wrapper";
import React from "react";
import PropTypes from "prop-types";

export function Centered(props) {
    return (
        <Wrapper display={"flex"} justifyContent={"center"} alignItems={"center"} position={"relative"} {...props}>
            {props.children}
        </Wrapper>
    );
}

Centered.propTypes = {
    ...Wrapper.propTypes,
    styles: PropTypes.string,
};
