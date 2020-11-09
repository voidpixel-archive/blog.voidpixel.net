import React from "react";
import {Cookies} from "./cookies/Cookies.component";
import {useHistory} from "react-router-dom";
import {Language} from "./language/Language.component";

export const Header: React.FunctionComponent = () => {

    const history = useHistory();

    const onClickTitle = () => history.push('/');

    return (
        <div>
            <h3
                onClick={onClickTitle}
            >voidpixel blog</h3>
            <Language/>
            <Cookies/>
        </div>
    )
}