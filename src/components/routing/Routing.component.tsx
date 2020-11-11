import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {NotFound} from "../pages/notFound/NotFound.component";
import {Home} from "../pages/home/Home.component";
import {Post} from "../pages/post/Post.component";

export const Routing: React.FunctionComponent = () => (
    <Switch>
        <Route
            path="/"
            exact={true}
            component={Home}
        />
        <Route
            path="/page/:pageIndex"
            exact={true}
            component={Home}
        />
        <Route
            path="/post/:id"
            exact={true}
            component={Post}
        />
        <Route
            component={NotFound}
        />
    </Switch>
)
