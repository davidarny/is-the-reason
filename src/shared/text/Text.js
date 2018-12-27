import styled from "styled-components";

export const Text = styled.span.attrs((props) => ({
    fontSize: props.fontSize,
    align: props.align,
    color: props.color,
}))`
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.align};
    color: ${(props) => props.color};
`;
