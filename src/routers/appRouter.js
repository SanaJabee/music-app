import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from '../pages/HomePage';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/detailpage" component={DetailPage} />
                </Switch>
            </Router>
        </>
    );
};