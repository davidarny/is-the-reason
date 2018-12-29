import styled from "styled-components";
import * as system from "styled-system";

export const Input = styled.input`
    ${system.fontSize}
    ${system.textAlign}
    font-family: ${system.themeGet("font")};
    max-width: ${system.themeGet("maxWidth")};
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
`;

Input.propTypes = {
    ...system.fontSize.propTypes,
    ...system.textAlign.propTypes,
    ...system.maxWidth.propTypes,
};
