import styled from "styled-components";
import * as system from "styled-system";

export const Slice = styled.div`
    display: block;
    width: 25px;
    height: 3px;
    background-color: ${system.themeGet("burger.background", "black")};
    ${system.space}
`;

Slice.propTypes = {
    ...system.space.propTypes,
};
