import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FetchPosts} from "../store/posts/dispatchers";
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./header/Header.component";
import {Routing} from "./routing/Routing.component";
import {DefaultState} from "../store";
import {PostsState} from "../store/posts";

const App = () => {

    const dispatch = useDispatch();

    const postsState = useSelector<DefaultState, PostsState>(state => state.postsState);

    useEffect(() => {
        if(postsState.postList.length > 0)
            return;

        (async () => {
            dispatch(await FetchPosts())
        })();
    }, [dispatch, postsState]);

    return (
        <Router>
            <Header/>
            <Routing/>
        </Router>
    );
}

export default App;