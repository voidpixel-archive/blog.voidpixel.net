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
        if(postList.length === 0)
            return;
        if(!post)
            return history.push('/404');
    }, [postList, history, post]);

    return (
        post ? (
            <div>
                <Cover
                    post={post}
                    language={language}
                />
                <ReactMarkdown>
                    {post.post[language].content}
                </ReactMarkdown>
            </div>
        ) : <></>
    )
}