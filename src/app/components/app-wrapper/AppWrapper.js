import styled from "styled-components";
import * as system from "styled-system";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transition: background-color 0.15s ease-in-out;
    ${system.background}
`;

AppWrapper.propTypes = {
    ...system.background.propTypes,
};
