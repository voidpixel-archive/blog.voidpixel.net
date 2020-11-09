import { combineReducers } from 'redux';
import {postsReducer, PostsActions, PostsState} from "./posts";
import {ConfigActions, configReducer, ConfigState} from "./config";

export interface DefaultState {
    postsState: PostsState
    configState: ConfigState
}

export const rootReducer = combineReducers({
    postsState: postsReducer,
    configState: configReducer
})

export type Actions =
    | PostsActions
    | ConfigActions