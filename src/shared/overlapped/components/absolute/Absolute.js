import styled from "styled-components";

export const Absolute = styled.div.attrs((props) => ({
    top: props.top,
    left: props.left,
    bottom: props.bottom,
    right: props.right,
}))`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
`;
