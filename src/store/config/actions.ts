import {ConfigActionTypes, Language} from "./types";

export interface ISetLanguageSuccess  {
    type: typeof ConfigActionTypes.SET_LANGUAGE_SUCCESS
    language: Language
}
export interface IAcceptCookiesSuccess  {
    type: typeof ConfigActionTypes.ACCEPT_COOKIES_SUCCESS
}