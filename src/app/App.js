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
import Icon from "shared/icon";
import refresh from "./img/refresh.png";
import share from "./img/share.png";

export class App extends React.Component {
    state = {
        image: undefined,
        loading: true,
        background: "#ffffff",
        shadow: "none",
    };

    _theme = {
        font: "Gochi Hand, sans-serif",
        maxWidth: "500px",
    };

    _controllers = { app: new AppController(this.setState.bind(this)) };

    componentDidMount() {
        this._controllers.app.onImageRefresh();
    }

    render() {
        return (
            <ThemeProvider theme={this._theme}>
                <AppWrapper background={this.state.background}>
                    <Centered>
                        <Burger />
                    </Centered>
                    <Card shadow={this.state.shadow}>
                        <Overlapped top={"20px"} left={"20px"}>
                            <Icon
                                size={35}
                                src={refresh}
                                alt={"refresh"}
                                onClick={this._controllers.app.onImageRefresh}
                            />
                        </Overlapped>
                        <Overlapped
                            top={"20px"}
                            right={"20px"}
                            onMouseOver={this._controllers.app.onIconMouseOver}
                            onMouseLeave={this._controllers.app.onIconMouseLeave}
                        >
                            <Icon background={"#0042FF"} size={35} src={share} alt={"share"} />
                        </Overlapped>
                        <Centered>
                            <Suspense
                                loading={this.state.loading}
                                fallback={() => <Text fontSize={"4rem"}>Loading...</Text>}
                            >
                                <TopImage src={this.state.image} alt={"splash"} />
                            </Suspense>
                            <Overlapped bottom={0}>
                                <Text color={"white"} fontSize={"6.5rem"}>
                                    '19
                                </Text>
                            </Overlapped>
                        </Centered>
                        <Centered>
                            <Text align={"center"} fontSize={"2rem"}>
                                is the reason...
                            </Text>
                        </Centered>
                        <Centered>
                            <Input align={"center"} fontSize={"4rem"} />
                        </Centered>
                    </Card>
                </AppWrapper>
            </ThemeProvider>
        );
    }
}
