import React from "react";
import {Cookies} from "./cookies/Cookies.component";
import {useHistory} from "react-router-dom";

export const Header: React.FunctionComponent = () => {

    const history = useHistory();

    const onClickTitle = () => history.push('/');

    return (
        <div>
            <h3
                onClick={onClickTitle}
            >voidpixel blog</h3>
            <Cookies/>
        </div>
    )
}