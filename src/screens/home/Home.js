import { ThemeProvider } from "styled-components";
import React from "react";
import FlexWrapper from "shared/flex-wrapper";
import Card from "shared/card";
import Burger from "shared/burger";
import Centered from "shared/centered";
import video from "./videos/background.mp4";
import audio from "./audios/background.m4a";
import Socials from "shared/socials";
import Text from "shared/text";
import Wrapper from "shared/wrapper";
import Button from "shared/button";
import config from "config";
import { Link } from "react-router-dom";
import VideoBackground from "./components/video-background";
import AudioBackground from "./components/audio-background";

export class Home extends React.Component {
    _theme = {
        ...config,
        burger: {
            background: "white",
        },
        card: {
            gridTemplateRows: "4fr auto 1fr 2fr 3fr auto",
        },
    };

    render() {
        return (
            <ThemeProvider theme={this._theme}>
                <FlexWrapper>
                    <VideoBackground background={video} />
                    <AudioBackground background={audio} />
                    <Centered>
                        <Burger />
                    </Centered>
                    <Card>
                        <Wrapper />
                        <Centered>
                            <Text color={"white"} fontSize={"200px"}>
                                '19
                            </Text>
                        </Centered>
                        <Centered>
                            <Text color={"white"} align={"center"} fontSize={"50px"}>
                                is the reason...
                            </Text>
                        </Centered>
                        <Centered>
                            <Link style={{ textDecoration: "none" }} to={process.env.PUBLIC_URL + "/main"}>
                                <Button value={"to start"} />
                            </Link>
                        </Centered>
                        <Wrapper />
                        <Socials variant={"white"} maxWidth={this._theme.max.width} />
                    </Card>
                </FlexWrapper>
            </ThemeProvider>
        );
    }
}
