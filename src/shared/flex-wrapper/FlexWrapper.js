import styled from "styled-components";
import * as system from "styled-system";

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transition: background-color 0.15s ease-in-out;
    ${system.background}
    ${system.backgroundSize}
`;

FlexWrapper.propTypes = {
    ...system.background.propTypes,
    ...system.backgroundSize.propTypes,
};
