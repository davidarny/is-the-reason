import styled from "styled-components";

export const Shadowed = styled.div`
    transition: box-shadow 0.15s ease-in-out;

    :hover {
        box-shadow: 0px 120px 128px 0px rgba(0, 0, 0, 0.22);
    }
`;
