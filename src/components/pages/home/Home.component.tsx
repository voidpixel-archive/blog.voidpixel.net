import * as React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {Post, PostsState} from "../../../store/posts";
import {useHistory} from "react-router-dom";
import {ConfigState} from "../../../store/config";
import {Cover} from "../post/cover/Cover.component";
import {RouteComponentProps} from "react-router";

import style from './Home.module.scss';

type Params = {
    pageIndex?: string;
}

export const Home: React.FunctionComponent<RouteComponentProps<Params>> = (
    props: RouteComponentProps<Params>
) => {
    const { pageIndex } = props.match.params;
    let initialPageIndex = parseInt(pageIndex || '');

    const history = useHistory();

    const postsPerPage = 10;

    const [index, setIndex] = useState<number>(isNaN(initialPageIndex) ? 0 : initialPageIndex);

    const { language } = useSelector<DefaultState, ConfigState>(state => state.configState);
    const { postList } = useSelector<DefaultState, PostsState>(state => state.postsState);

    const pagesCount = Math.ceil(postList.length / postsPerPage);
    const areOlderPages = !(index === pagesCount - 1);
    const areNewerPages = !(index === 0);
    const areAnyPagination = areOlderPages || areNewerPages;

    useEffect(() => {
        const targetPathName = index === 0 ? '/' : `/page/${index}`;
        if(props.location.pathname === targetPathName) return;
        history.push(targetPathName);
    }, [index, history, props]);

    useEffect(() => {
        if(postList.length === 0) return;
        if(initialPageIndex >= pagesCount)
            history.push(`/404`);
    }, [initialPageIndex, pagesCount, postList, history]);

    const onClick = (post: Post) => {
        history.push(`/post/${post.id}`);
    }

    const onPageOlder = () => setIndex( index + 1);
    const onPageNewer = () => setIndex( index - 1);

    const postIdListMap = [...postList]
        .sort((a, b) => b.date - a.date)
        .filter((post, idx) => idx >= index * postsPerPage && idx < index * postsPerPage + postsPerPage)
        .map((post) => (
            <Cover
                key={post.id}
                onClick={onClick}
                post={post}
                language={language}
                isCover={true}
                className={style.cover}
            />
        ));

    return (
        <div className={style.home}>
            <div className={style.posts}>
                {postIdListMap}
            </div>
            {
                areAnyPagination && (
                    <div className={style.pagination}>
                        <div
                            className={`${style.button} ${areOlderPages ? '' : style.disabled}`}
                            onClick={areOlderPages ? onPageOlder : undefined}
                        ><i className="fas fa-angle-left"/></div>
                        <div className={style.index}>{index}</div>
                        <div
                            className={`${style.button} ${areNewerPages ? '' : style.disabled}`}
                            onClick={areNewerPages ? onPageNewer : undefined}
                        ><i className="fas fa-angle-right"/></div>
                    </div>
                )
            }
        </div>
    )
}
