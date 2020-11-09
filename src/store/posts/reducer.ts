import {Reducer} from 'redux'
import {PostsState, PostsActionTypes, PostsActions} from "./types";
import {produce} from 'immer'

export const initialState: PostsState = {
    postList: []
}

export const postsReducer: Reducer<PostsState, PostsActions> = (
    state = initialState,
    action: PostsActions
) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return produce(state, (copyState: PostsState) => {
                copyState.postList = action.postList;
            });
        default:
            return state
    }
}