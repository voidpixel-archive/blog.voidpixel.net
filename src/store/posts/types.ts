
import {IFetchPosts, IFetchPostsError, IFetchPostsSuccess} from "./actions";
import {Language} from "../config";

export enum PostsActionTypes {
    FETCH_POSTS = '@@POSTS/FETCH_POSTS',
    FETCH_POSTS_SUCCESS = '@@POSTS/FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = '@@POSTS/FETCH_POSTS_ERROR',
}

export type PostsActions =
    | IFetchPosts
    | IFetchPostsSuccess
    | IFetchPostsError

export interface PostsState {
    postList: Post[];
}

export type Post = {
    id: string,
    date: number,
    author: string,
    cover: string,
    post: {
        [Language.EN]: PostTranslation,
        [Language.ES]: PostTranslation,
        [Language.CAT]: PostTranslation
    }
}

export type PostTranslation = {
    title: string;
    content: string;
}
