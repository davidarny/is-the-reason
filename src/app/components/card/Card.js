import React from "react";
import Wrapper from "shared/wrapper";
import PropTypes from "prop-types";

export function Card(props) {
    return (
        <Wrapper
            display={"grid"}
            gridTemplateRows={"6fr auto auto 1fr"}
            gridRowGap={"1em"}
            p={"6em 4em"}
            position={"relative"}
            background={"white"}
            boxShadow={props.shadow}
            transition={"box-shadow 0.15s ease-in-out"}
            {...props}
        >
            {props.children}
        </Wrapper>
    );
}

Card.propTypes = {
    ...Wrapper.propTypes,
    shadow: PropTypes.string,
};
