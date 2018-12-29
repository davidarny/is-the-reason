import React from "react";
import Wrapper from "shared/wrapper";
import PropTypes from "prop-types";

export function Card(props) {
    return (
        <Wrapper
            display={"grid"}
            gridTemplateRows={"5fr auto 1fr auto"}
            gridTemplateColumns={"auto"}
            gridRowGap={"1em"}
            p={"50px"}
            position={"relative"}
            background={"white"}
            boxShadow={props.shadow}
            alignItems={"center"}
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
