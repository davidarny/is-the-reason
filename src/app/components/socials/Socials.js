import React from "react";
import Wrapper from "shared/wrapper";
import behance from "./img/black-behance-icon.svg";
import facebook from "./img/black-facebook-icon.svg";
import linkedin from "./img/black-linkedin-icon.svg";
import twitter from "./img/black-twitter-icon.svg";

const omega = {
    x1: require("./img/omega-r-black-logo.png"),
    x2: require("./img/omega-r-black-logo@2x.png"),
    x3: require("./img/omega-r-black-logo@3x.png"),
};

export function Socials(props) {
    return (
        <Wrapper display="grid" gridTemplateRows="auto" gridTemplateColumns="1fr 8fr 1fr 1fr 1fr 1fr" {...props}>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={omega.x1} srcSet={`${omega.x2} 2x, ${omega.x3} 3x`} alt={"omega-r"} />
                </a>
            </Wrapper>
            <Wrapper />
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={facebook} alt={"omega-facebook"} />
                </a>
            </Wrapper>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={twitter} alt={"omega-twitter"} />
                </a>
            </Wrapper>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={linkedin} alt={"omega-linkedin"} />
                </a>
            </Wrapper>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={behance} alt={"omega-behance"} />
                </a>
            </Wrapper>
        </Wrapper>
    );
}

Socials.propTypes = {
    ...Wrapper.propTypes,
};
