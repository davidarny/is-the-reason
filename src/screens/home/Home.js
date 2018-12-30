import { ThemeProvider } from "styled-components";
import React from "react";
import FlexWrapper from "shared/flex-wrapper";
import Card from "shared/card";
import Burger from "shared/burger";
import Centered from "shared/centered";
import background from "./img/background.jpg";
import Socials from "shared/socials";
import Text from "shared/text";
import Wrapper from "shared/wrapper";
import Button from "shared/button";
import config from "config";
import { Link } from "react-router-dom";

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
                <FlexWrapper background={`url(${background}) center no-repeat`} backgroundSize={"cover"}>
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
                            <Link style={{ textDecoration: "none" }} to="/main">
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
