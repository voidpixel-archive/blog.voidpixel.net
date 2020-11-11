import React from "react";
import {Cookies} from "./cookies/Cookies.component";
import {useHistory} from "react-router-dom";
import {Language} from "./language/Language.component";

import style from './Header.module.scss';

export const Header: React.FunctionComponent = () => {

    const history = useHistory();

    const onClickTitle = () => history.push('/');

    return (
        <div
            className={style.header}
        >
            <div
                className={style.title}
                onClick={onClickTitle}
            >
                <i className="fas fa-code" />
                voidpixel blog
            </div>
            <div
                className={style.subHeader}
            >
                <Language/>
                <Cookies/>
            </div>
        </div>
    )
}
