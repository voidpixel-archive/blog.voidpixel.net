import * as React from "react";
import {useEffect} from "react";
import {RouteComponentProps} from "react-router";
import {useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {PostsState} from "../../../store/posts";
import {useHistory} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import {ConfigState} from "../../../store/config";
import {Cover} from "./cover/Cover.component";
import { Helmet } from 'react-helmet'

import style from './Post.module.scss';

type Params = {
    id: string;
}

export const Post: React.FunctionComponent<RouteComponentProps<Params>> = (
    props: RouteComponentProps<Params>
) => {
    const { id } = props.match.params;

    const history = useHistory();

    const { language } = useSelector<DefaultState, ConfigState>(state => state.configState);
    const { postList } = useSelector<DefaultState, PostsState>(state => state.postsState);

    const post = postList.find(post => post.id === id);

    useEffect(() => {
        window.scrollTo(window.scrollX, 0);
    }, [id])

    useEffect(() => {
        if(postList.length === 0)
            return;
        if(!post)
            return history.push('/404');
    }, [postList, history, post]);

    const lastTwoPosts = [...postList]
        .sort((a, b) => b.date - a.date)
        .filter(_post => post && _post.id !== post.id)
        .filter((_post, idx) => 2 > idx)
        .map((post) => (
            <Cover
                key={post.id}
                onClick={() => history.push(`/post/${post.id}`)}
                post={post}
                isCover={true}
                language={language}
            />
        ));

    return (
        post ? (
            
            <>
                <Helmet>
                    <title>{ post.post[language].title } / voidpixel blog / {language}</title>
                </Helmet>
                <div className={style.post}>
                    <Cover
                        post={post}
                        language={language}
                    />
                    <ReactMarkdown className={style.content}>
                        {post.post[language].content}
                    </ReactMarkdown>
                    {
                        lastTwoPosts.length === 2 && (
                            <div className={style.lastTwoPosts}>
                                {lastTwoPosts}
                            </div>
                        )
                    }
                </div>
                </>
        ) : <></>
    )
}
