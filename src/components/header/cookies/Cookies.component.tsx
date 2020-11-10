import React, {useEffect, useState} from "react";
import {AcceptCookies} from "../../../store/config/dispatchers";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {ConfigState} from "../../../store/config";
import {useTranslation} from "react-i18next";

import style from './Cookies.module.scss';

export const Cookies: React.FunctionComponent = () => {

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const configState = useSelector<DefaultState, ConfigState>(state => state.configState);

    const [isGoogleAnalyticsRunning, setGoogleAnalyticsRunning] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        if(!cookies.accepted || configState.cookies) return;
        dispatch(AcceptCookies())
    }, [cookies, configState, dispatch]);

    useEffect(() => {
        if(isGoogleAnalyticsRunning || !configState.cookies) return;
        // @ts-ignore
        googleAnalytics();
        console.log('googleAnalytics!')
        setGoogleAnalyticsRunning(true)
    }, [isGoogleAnalyticsRunning, configState]);

    const onAcceptCookies = () => {
        setCookie('accepted', true, {
            maxAge: Date.now() + (10 * 365 * 24 * 60 * 60),
            path: '/'
        })
    }

    const gaURL = 'https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage';
    const gaComponent =
        <a
            target='_blank'
            rel="noopener noreferrer"
            href={gaURL}
        >Google Analytics</a>
    return configState.cookies
        ? <></>
        : (
            <div className={style.cookies}>
                <label>{t('This website needs')} {gaComponent} {t('cookies')}</label>
                <i className="fas fa-cookie-bite"/>
                <label
                    className={style.accept}
                    onClick={onAcceptCookies}
                >{t('Accept')}</label>
            </div>
        );
}
