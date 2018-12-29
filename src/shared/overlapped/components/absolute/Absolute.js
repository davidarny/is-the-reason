import styled from "styled-components";
import * as system from "styled-system";

const pointerEvents = system.style({
    prop: "pointerEvents",
    cssProperty: "pointerEvents",
});

export const Absolute = styled.div`
    position: absolute;
    ${system.top}
    ${system.left}
    ${system.bottom}
    ${system.right}
    ${system.zIndex}
    ${pointerEvents}
`;

Absolute.propTypes = {
    ...system.top.propTypes,
    ...system.left.propTypes,
    ...system.bottom.propTypes,
    ...system.right.propTypes,
    ...system.zIndex.propTypes,
};
