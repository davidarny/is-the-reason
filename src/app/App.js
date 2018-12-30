import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "screens/main";
import Home from "screens/home";

export class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
                    <Route exact path={process.env.PUBLIC_URL + "/main"} component={Main} />
                </Switch>
            </Router>
        );
    }
}
