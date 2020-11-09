import * as React from "react";
import {useState} from "react";
import {useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {Post, PostsState} from "../../../store/posts";
import {useHistory} from "react-router-dom";
import {ConfigState} from "../../../store/config";
import {Cover} from "../post/cover/Cover.component";

export const Home: React.FunctionComponent = () => {

    const history = useHistory();

    const postsPerPage = 2;

    const [index, setIndex] = useState<number>(0);

    const { language } = useSelector<DefaultState, ConfigState>(state => state.configState);
    const { postList } = useSelector<DefaultState, PostsState>(state => state.postsState);

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
            />
        ))

    const areOlderPages = !(index === Math.trunc(postList.length / postsPerPage) - 1);
    const areNewerPages = !(index === 0);

    return (
        <div>
            home
            <div>
                {postIdListMap}
            </div>
            <div>
                {
                    areNewerPages && (
                        <button
                            onClick={onPageNewer}
                        >newer</button>
                    )
                }
                {
                    areOlderPages && (
                        <button
                            onClick={onPageOlder}
                        >older</button>
                    )
                }
            </div>
        </div>
    )
}