import React from "react";
import Wrapper from "shared/wrapper";
import PropTypes from "prop-types";

export function Card(props) {
    return (
        <Wrapper
            display={"grid"}
            styles={`
                grid-template-rows: 6fr auto auto 1fr;
                grid-row-gap: 1em;
                padding: 6em 4em;
                position: relative;
                transition: box-shadow 0.15s ease-in-out;
                box-shadow: ${props.shadow};
                background-color: white;
            `}
            {...props}
        >
            {props.children}
        </Wrapper>
    );
}

Card.propTypes = {
    shadow: PropTypes.string,
};
