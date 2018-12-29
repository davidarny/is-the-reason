import React from "react";
import Slice from "./components/slice";
import Wrapper from "shared/wrapper";

export function Burger(props) {
    return (
        <Wrapper cursor={"pointer"} {...props}>
            <Slice mb={"5px"} />
            <Slice mb={"5px"} />
            <Slice />
        </Wrapper>
    );
}

Burger.propTypes = {
    ...Wrapper.propTypes,
};
