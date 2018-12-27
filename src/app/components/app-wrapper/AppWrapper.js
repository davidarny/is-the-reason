import styled from "styled-components";

export const AppWrapper = styled.div.attrs((props) => ({
    background: props.background,
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    transition: background-color 0.15s ease-in-out;
    background-color: ${(props) => props.background};
`;
