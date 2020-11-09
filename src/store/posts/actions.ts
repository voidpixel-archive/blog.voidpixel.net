import {Post, PostsActionTypes} from "./types";

export interface IFetchPosts  {
    type: typeof PostsActionTypes.FETCH_POSTS
}
export interface IFetchPostsSuccess  {
    type: typeof PostsActionTypes.FETCH_POSTS_SUCCESS
    postList: Post[];
}
export interface IFetchPostsError  {
    type: typeof PostsActionTypes.FETCH_POSTS_ERROR
    status: number;
}