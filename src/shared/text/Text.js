import styled from "styled-components";
import * as system from "styled-system";

export const Text = styled.span`
    font-family: ${system.themeGet("font.family")};
    ${system.fontSize}
    ${system.textAlign}
    ${system.color}
`;

Text.propTypes = {
    ...system.fontSize.propTypes,
    ...system.textAlign.propTypes,
    ...system.color.propTypes,
};
