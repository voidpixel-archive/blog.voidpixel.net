import {ConfigActionTypes, Language} from "./types";
import {Actions} from "../index";

export const AcceptCookies = (): Actions => ({
    type: ConfigActionTypes.ACCEPT_COOKIES_SUCCESS,
})

export const SetLanguage = (
    language: Language
): Actions => ({
    type: ConfigActionTypes.SET_LANGUAGE_SUCCESS,
    language
});