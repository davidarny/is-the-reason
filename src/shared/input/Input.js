import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
    fontSize: props.fontSize,
    align: props.align,
    maxWidth: props.maxWidth,
}))`
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.align};
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    max-width: ${(props) => props.theme.maxWidth || props.maxWidth};
    outline: none;
`;
