import styled from "styled-components";

export const Slice = styled.div.attrs((props) => ({
    marginBottom: props.marginBottom,
}))`
    display: block;
    width: 25px;
    height: 3px;
    background-color: black;
    margin-bottom: ${(props) => props.marginBottom};
`;
