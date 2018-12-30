import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function VideoBackground(props) {
    return (
        <video autoPlay muted loop preload={"true"} className={props.className}>
            <source src={props.background} type={"video/mp4"} />
        </video>
    );
}

export const StyledVideoBackground = styled(VideoBackground)`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100vw;
    min-height: 100vh;
`;

StyledVideoBackground.propTypes = {
    background: PropTypes.string.isRequired,
};
