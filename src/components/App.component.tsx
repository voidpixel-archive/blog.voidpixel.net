import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FetchPosts} from "../store/posts/dispatchers";
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./header/Header.component";
import {Routing} from "./routing/Routing.component";
import {DefaultState} from "../store";
import {PostsState} from "../store/posts";

import commonStyle from './styles/Common.module.scss';
import './App.module.scss';
import {Footer} from "./footer/Footer.component";

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
            <div className={commonStyle.container}>
                <Header/>
                <Routing/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
