import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Gallery } from "./Gallery";
import { Home } from "./Home";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <Router >
        <div>
            <NavBar />
            <div>

                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/proyects" component={ Gallery } />
                    <Redirect to="/" />
                </Switch>

            </div>
        </div>

    </Router>
    )
}
