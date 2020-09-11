import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";
import { Gallery } from "./Gallery";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import { Skills } from "./Skills";

export const AppRouter = () => {
    return (
        <Router >
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/proyects" component={Gallery} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
