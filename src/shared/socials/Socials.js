import React from "react";
import Wrapper from "shared/wrapper";
import PropTypes from "prop-types";

const omega = {
    white: {
        x1: require("./img/omega-r.png"),
        x2: require("./img/omega-r@2x.png"),
        x3: require("./img/omega-r@3x.png"),
    },
    black: {
        x1: require("./img/omega-r-black-logo.png"),
        x2: require("./img/omega-r-black-logo@2x.png"),
        x3: require("./img/omega-r-black-logo@3x.png"),
    },
};

const socials = {
    white: {
        facebook: require("./img/facebook-icon.svg"),
        linkedin: require("./img/linkedin-icon.svg"),
        twitter: require("./img/twitter-icon.svg"),
        behance: require("./img/behance-icon.svg"),
    },
    black: {
        facebook: require("./img/black-facebook-icon.svg"),
        linkedin: require("./img/black-linkedin-icon.svg"),
        twitter: require("./img/black-twitter-icon.svg"),
        behance: require("./img/black-behance-icon.svg"),
    },
};

export function Socials(props) {
    const logos = {
        omega: omega[props.variant],
        socials: socials[props.variant],
    };
    return (
        <Wrapper display="grid" gridTemplateRows="auto" gridTemplateColumns="1fr 8fr 1fr 1fr 1fr 1fr" {...props}>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={logos.omega.x1} srcSet={`${logos.omega.x2} 2x, ${logos.omega.x3} 3x`} alt={"omega-r"} />
                </a>
            </Wrapper>
            <Wrapper />
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={logos.socials.facebook} alt={"omega-facebook"} />
                </a>
            </Wrapper>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={logos.socials.twitter} alt={"omega-twitter"} />
                </a>
            </Wrapper>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={logos.socials.linkedin} alt={"omega-linkedin"} />
                </a>
            </Wrapper>
            <Wrapper>
                <a href="https://omega-r.com" target="_blank" rel="noopener noreferrer nofollow">
                    <img src={logos.socials.behance} alt={"omega-behance"} />
                </a>
            </Wrapper>
        </Wrapper>
    );
}

Socials.defaultProps = {
    variant: "black",
};

Socials.propTypes = {
    ...Wrapper.propTypes,
    variant: PropTypes.oneOf(["black", "white"]),
};
