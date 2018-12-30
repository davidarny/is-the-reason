import styled from "styled-components";
import * as system from "styled-system";

const pointerEvents = system.style({
    prop: "pointerEvents",
    cssProperty: "pointerEvents",
});

export const Text = styled.span`
    font-family: ${system.themeGet("font.family")};
    ${pointerEvents}
    ${system.fontFamily}
    ${system.fontSize}
    ${system.textAlign}
    ${system.color}
    text-decoration: none;
`;

Text.propTypes = {
    ...system.fontSize.propTypes,
    ...system.fontFamily.propTypes,
    ...system.textAlign.propTypes,
    ...system.color.propTypes,
};
