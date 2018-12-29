import { ThemeProvider } from "styled-components";
import React from "react";
import AppWrapper from "./components/app-wrapper";
import Text from "shared/text";
import TopImage from "./components/top-image";
import Centered from "shared/centered";
import Input from "shared/input";
import Burger from "./components/burger";
import Suspense from "shared/suspense";
import AppController from "controllers/app";
import Overlapped from "shared/overlapped";
import Card from "./components/card";
import Socials from "./components/socials";
import Icon from "shared/icon";
import refresh from "./img/refresh-icon.svg";
import share from "./img/share-icon.svg";
import Wrapper from "shared/wrapper";
import config from "config";

export class App extends React.Component {
    state = {
        image: undefined,
        loading: true,
        background: "white",
        shadow: "none",
    };

    _theme = { ...config };

    _controllers = { app: new AppController(this.setState.bind(this)) };

    componentDidMount() {
        this._controllers.app.onImageRefresh();
    }

    render() {
        return (
            <ThemeProvider theme={this._theme}>
                <AppWrapper background={this.state.background}>
                    <Suspense loading={this.state.loading} fallback={() => <Text fontSize={"4rem"}>Loading...</Text>}>
                        <Centered>
                            <Burger />
                        </Centered>
                        <Card shadow={this.state.shadow}>
                            <Overlapped
                                zIndex={1}
                                top={"100px"}
                                right={"20px"}
                                onClick={this._controllers.app.onImageRefresh}
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
                                onMouseOver={this._controllers.app.onIconMouseOver}
                                onMouseLeave={this._controllers.app.onIconMouseLeave}
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
                </AppWrapper>
            </ThemeProvider>
        );
    }
}
