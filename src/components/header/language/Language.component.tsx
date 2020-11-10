import React, {useCallback, useEffect} from "react";
import {SetLanguage} from "../../../store/config/dispatchers";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {ConfigState, Language as TLanguage} from "../../../store/config";
import { useTranslation } from 'react-i18next';

import style from './Language.module.scss';

export const Language: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();

    const configState = useSelector<DefaultState, ConfigState>(state => state.configState);

    const [cookies, setCookie] = useCookies();

    const setLanguage = useCallback( (language: TLanguage) => {
        dispatch(SetLanguage(language));
        setCookie('language', language, {
            maxAge: Date.now() + (10 * 365 * 24 * 60 * 60),
            path: '/'
        });
        i18n.changeLanguage(language);
    }, [dispatch, setCookie, i18n]);

    useEffect(() => {
        if(!cookies.language || configState.language === cookies.language) return;
        setLanguage(cookies.language);
    }, [cookies, configState, dispatch, setLanguage]);

    const onClick = (language: TLanguage) => setLanguage(language);

    return (
        <div
            className={style.languages}
        >
            <label
                onClick={() => onClick(TLanguage.EN)}
            >
                {t('english')}
            </label>
            <label
                onClick={() => onClick(TLanguage.ES)}
            >
                {t('spanish')}
            </label>
            <label
                onClick={() => onClick(TLanguage.CAT)}
            >
                {t('catalan')}
            </label>
        </div>
    )
}
