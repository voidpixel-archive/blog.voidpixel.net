
import {IAcceptCookiesSuccess, ISetLanguageSuccess} from "./actions";

export enum ConfigActionTypes {
    SET_LANGUAGE_SUCCESS = '@@CONFIG/SET_LANGUAGE_SUCCESS',

    ACCEPT_COOKIES_SUCCESS = '@@CONFIG/ACCEPT_COOKIES_SUCCESS'
}

export type ConfigActions =
    | ISetLanguageSuccess
    | IAcceptCookiesSuccess

export interface ConfigState {
    language: Language,
    cookies: boolean
}

export enum Language {
    ES = 'es',
    EN = 'en',
    CAT = 'cat'
}
