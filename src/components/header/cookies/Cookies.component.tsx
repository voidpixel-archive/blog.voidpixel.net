import React, {useEffect, useState} from "react";
import {AcceptCookies} from "../../../store/config/dispatchers";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {DefaultState} from "../../../store";
import {ConfigState} from "../../../store/config";

export const Cookies: React.FunctionComponent = () => {

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
            maxAge: Date.now() + (10 * 365 * 24 * 60 * 60)
        })
    }

    return (
        <div>
            {configState.cookies ? 'cookies' : 'no-cookies'}
            <p/>
            {isGoogleAnalyticsRunning ? 'ga!' : 'no-ga'}
            <button
                onClick={onAcceptCookies}
            >Accept cookies</button>
        </div>
    )
}