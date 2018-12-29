import React from "react";
import Slice from "./components/slice";
import Wrapper from "shared/wrapper";

export function Burger(props) {
    return (
        <Wrapper styles={"cursor: pointer"} {...props}>
            <Slice mb={"5px"} />
            <Slice mb={"5px"} />
            <Slice />
        </Wrapper>
    );
}
