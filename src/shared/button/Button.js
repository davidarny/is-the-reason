import React from "react";
import Wrapper from "shared/wrapper";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "shared/text";
import * as system from "styled-system";

function Button(props) {
    return (
        <Wrapper {...props}>
            <Text color={"inherit"} pointerEvents={"none"} fontFamily={"Roboto, sans-serif"} fontSize={"30px"}>
                {props.value}
            </Text>
        </Wrapper>
    );
}

// prettier-ignore-start
export const StyledButton = styled(Button)`
    border-radius: 30px;
    opacity: 0.5;
    background: white;
    padding: 0.5em 4em;
    cursor: pointer;
    letter-spacing: 3px;
    color: black;
    transition: all ${system.themeGet("transitionDuration", "0.15s")}
        ${system.themeGet("transitionFunction", "ease-in-out")};

    :hover {
        color: #4f7dff;
        opacity: 1;
    }
`;
// prettier-ignore-end

StyledButton.propTypes = {
    ...Wrapper.propTypes,
    value: PropTypes.string.isRequired,
};
