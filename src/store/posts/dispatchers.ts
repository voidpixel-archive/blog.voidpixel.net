import {Post, PostsActionTypes} from "./types";
import {apiFetch} from "../../services/apiService";
import {Actions} from "../index";

export const FetchPosts = async (): Promise<Actions> => {
    try {
        const { data } = await apiFetch('posts');
        return FetchPostsSuccess(data);
    } catch (e) {
        return FetchPostsError(500);
    }
};
const FetchPostsSuccess = (
    postList: Post[]
): Actions => ({
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    postList
});
const FetchPostsError = (
    status: number
): Actions => ({
    type: PostsActionTypes.FETCH_POSTS_ERROR,
    status
});