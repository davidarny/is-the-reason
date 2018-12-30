import React from "react";
import Wrapper from "shared/wrapper";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as system from "styled-system";

function Card(props) {
    return (
        <Wrapper
            display={"grid"}
            gridTemplateColumns={"auto"}
            position={"relative"}
            boxShadow={props.shadow}
            alignItems={"center"}
            transition={"box-shadow 0.15s ease-in-out"}
            maxHeight={"100vh"}
            {...props}
        >
            {props.children}
        </Wrapper>
    );
}

export const StyledCard = styled(Card)`
    background: ${system.themeGet("card.background", "transparent")};
    grid-template-rows: ${system.themeGet("card.gridTemplateRows", "auto")};
    grid-row-gap: ${system.themeGet("card.gridRowGap", "0")};
    padding: ${system.themeGet("card.padding", "0")};
`;

Card.propTypes = {
    ...Wrapper.propTypes,
    shadow: PropTypes.string,
};
