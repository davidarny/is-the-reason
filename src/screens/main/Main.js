import { ThemeProvider } from "styled-components";
import React from "react";
import FlexWrapper from "shared/flex-wrapper";
import Text from "shared/text";
import TopImage from "./components/top-image";
import Centered from "shared/centered";
import Input from "shared/input";
import Burger from "shared/burger";
import Suspense from "shared/suspense";
import MainController from "controllers/main";
import Overlapped from "shared/overlapped";
import Card from "shared/card";
import Socials from "shared/socials";
import Icon from "shared/icon";
import refresh from "./img/refresh-icon.svg";
import share from "./img/share-icon.svg";
import Wrapper from "shared/wrapper";
import config from "config";

export class Main extends React.Component {
    state = {
        image: undefined,
        loading: true,
        background: "white",
        shadow: "none",
    };

    _theme = {
        ...config,
        card: {
            background: "white",
            gridTemplateRows: "5fr auto 1fr auto",
            gridRowGap: "1em",
            padding: "50px",
        },
    };

    _controller = new MainController(this.setState.bind(this));

    componentDidMount() {
        this._controller.onImageRefresh();
    }

    render() {
        return (
            <ThemeProvider theme={this._theme}>
                <FlexWrapper background={this.state.background}>
                    <Suspense loading={this.state.loading} fallback={() => <Text fontSize={"4rem"}>Loading...</Text>}>
                        <Centered>
                            <Burger />
                        </Centered>
                        <Card shadow={this.state.shadow}>
                            <Overlapped
                                zIndex={1}
                                top={"100px"}
                                right={"20px"}
                                onClick={this._controller.onImageRefresh}
                            >
                                <Icon
                                    hoverBackground={"#474d5c"}
                                    width={"64px"}
                                    height={"64px"}
                                    src={refresh}
                                    alt={"refresh"}
                                />
                            </Overlapped>
                            <Overlapped
                                zIndex={1}
                                top={"20px"}
                                right={"20px"}
                                onMouseOver={this._controller.onIconMouseOver}
                                onMouseLeave={this._controller.onIconMouseLeave}
                            >
                                <Icon
                                    background={"#0042FF"}
                                    hoverBackground={"#4f7dff"}
                                    width={"64px"}
                                    height={"64px"}
                                    src={share}
                                    alt={"share"}
                                />
                            </Overlapped>
                            <Centered zIndex={0}>
                                <TopImage
                                    width={config.image.width}
                                    height={config.image.height}
                                    src={this.state.image}
                                    alt={"splash"}
                                />
                                <Overlapped pointerEvents={"none"} bottom={"100px"}>
                                    <Text color={"white"} fontSize={"200px"}>
                                        '19
                                    </Text>
                                </Overlapped>
                                <Overlapped pointerEvents={"none"} bottom={"70px"}>
                                    <Text color={"white"} align={"center"} fontSize={"50px"}>
                                        is the reason...
                                    </Text>
                                </Overlapped>
                            </Centered>
                            <Centered>
                                <Input textAlign={"center"} fontSize={"100px"} />
                            </Centered>
                            <Wrapper />
                            <Socials maxWidth={this._theme.max.width} />
                        </Card>
                    </Suspense>
                </FlexWrapper>
            </ThemeProvider>
        );
    }
}
