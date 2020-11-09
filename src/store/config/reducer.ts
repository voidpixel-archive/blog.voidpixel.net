import {Reducer} from 'redux'
import {ConfigActions, ConfigActionTypes, ConfigState, Language} from "./types";
import {produce} from 'immer'

export const initialState: ConfigState = {
    language: Language.EN,
    cookies: false
}

export const configReducer: Reducer<ConfigState, ConfigActions> = (
    state = initialState,
    action: ConfigActions
) => {
    switch (action.type) {
        case ConfigActionTypes.SET_LANGUAGE_SUCCESS:
            return produce(state, (copyState: ConfigState) => {
                copyState.language = action.language;
            });
        case ConfigActionTypes.ACCEPT_COOKIES_SUCCESS:
            return produce(state, (copyState: ConfigState) => {
                copyState.cookies = true
            });
        default:
            return state
    }
}