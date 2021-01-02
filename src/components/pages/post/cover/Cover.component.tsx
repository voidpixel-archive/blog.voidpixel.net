import * as React from "react";
import dayjs from 'dayjs';
import {Post} from "../../../../store/posts";
import {Language} from "../../../../store/config";
import readingTime from 'reading-time';
import style from './Cover.module.scss';
import {useTranslation} from "react-i18next";

export interface IProps {
    post: Post
    onClick?: (post: Post) => void
    language: Language
    isCover?: boolean
    className?: string
}

export const Cover: React.FunctionComponent<IProps> = (
    {
        post,
        onClick,
        language,
        isCover = false,
        className = ''
    }
) => {
    const { t } = useTranslation();

    const author = post.author;
    const date = dayjs(post.date).format('DD/MM/YYYY');
    const minutes = Math.trunc(readingTime(post.post[language].content).minutes);

    const title = (
        <>
            <div className={style.title}>{post.post[language].title}</div>
            <div className={style.subTitle}>
                {author} | {date} | {minutes} {t('min')}
            </div>
        </>
    )

    return (
        <div
            onClick={() => onClick && onClick(post)}
            key={post.id}
            className={`${style.cover} ${isCover ? style.isCover : ''} ${onClick ? style.pointer : ''} ${className}`}
        >
            {!isCover && title}
            <img
                alt={post.post[language].title}
                src={post.cover}
                className={style.image}
            />
            {isCover && title}
        </div>
    )
}
