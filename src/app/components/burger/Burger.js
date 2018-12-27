import React from "react";
import Slice from "./components/slice";
import Wrapper from "shared/wrapper";

export function Burger(props) {
    return (
        <Wrapper styles={"cursor: pointer"} {...props}>
            <Slice marginBottom={"5px"} />
            <Slice marginBottom={"5px"} />
            <Slice />
        </Wrapper>
    );
}
