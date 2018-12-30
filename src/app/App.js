import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "screens/main";
import Home from "screens/home";
import AudioBackground from "./components/audio-background";
import audio from "./audios/background.m4a";

export class App extends React.Component {
    render() {
        return (
            <>
                <AudioBackground background={audio} />
                <Router>
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + "/main"} component={Main} />
                    </Switch>
                </Router>
            </>
        );
    }
}
