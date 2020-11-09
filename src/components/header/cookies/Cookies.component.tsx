import React, {useEffect, useState} from "react";
import {AcceptCookies} from "../../../store/config/dispatchers";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {ConfigState} from "../../../store/config";
import {useTranslation} from "react-i18next";

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

    return (
        <div>
            {configState.cookies ? 'cookies' : 'no-cookies'}
            <p/>
            {isGoogleAnalyticsRunning ? 'ga!' : 'no-ga'}
            <button
                onClick={onAcceptCookies}
            >{t('accept-cookies')}</button>
        </div>
    )
}