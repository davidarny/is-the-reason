import styled from "styled-components";

export const Wrapper = styled.div.attrs((props) => ({
    display: props.display || "block",
    styles: props.styles || {},
}))`
    display: ${(props) => props.display};
    ${(props) => props.styles}
`;
