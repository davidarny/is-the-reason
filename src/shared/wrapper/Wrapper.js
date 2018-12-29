import styled from "styled-components";
import * as system from "styled-system";

const cursor = system.style({
    prop: "cursor",
    cssProperty: "cursor",
});
const transition = system.style({
    prop: "transition",
    cssProperty: "transition",
});

export const Wrapper = styled.div`
    ${system.display}
    ${system.space}
    ${system.gridTemplateRows}
    ${system.gridTemplateColumns}
    ${system.gridRowGap}
    ${system.position}
    ${system.boxShadow}
    ${system.background}
    ${system.justifyContent}
    ${system.alignItems}
    ${system.borderRadius}
    ${system.border}
    ${system.width}
    ${system.height}
    ${system.maxWidth}
    ${system.zIndex}
    ${cursor}
    ${transition}
`;

Wrapper.propTypes = {
    ...system.display.propTypes,
    ...system.space.propTypes,
    ...system.gridTemplateRows.propTypes,
    ...system.gridTemplateColumns.propTypes,
    ...system.gridRowGap.propTypes,
    ...system.position.propTypes,
    ...system.boxShadow.propTypes,
    ...system.background.propTypes,
    ...system.justifyContent.propTypes,
    ...system.alignItems.propTypes,
    ...system.borderRadius.propTypes,
    ...system.border.propTypes,
    ...system.width.propTypes,
    ...system.maxHeight.propTypes,
    ...system.height.propTypes,
    ...system.zIndex.propTypes,
};
