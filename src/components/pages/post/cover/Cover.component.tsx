import * as React from "react";
import dayjs from 'dayjs';
import {Post} from "../../../../store/posts";
import {Language} from "../../../../store/config";

export interface IProps {
    post: Post
    onClick?: (post: Post) => void
    language: Language
}

export const Cover: React.FunctionComponent<IProps> = (
    {
        post,
        onClick,
        language
    }
) => (
    <div
        onClick={() => onClick && onClick(post)}
        key={post.id}
    >
        <img src={post.cover} style={{ maxWidth: '300px' }} />
        <h4>{post.post[language].title}</h4>
        <h5>{post.author} - {dayjs(post.date).format('HH:mm D/MM/YYYY')}</h5>
    </div>
)