import * as React from "react";
import {RouteComponentProps} from "react-router";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";

export const NotFound: React.FunctionComponent<RouteComponentProps> = (
    props: RouteComponentProps
) => {

    const history = useHistory();

    useEffect(() => {
        if(props.location.pathname !== '/404')
            history.push('/404')
    }, [props, history])

    return (
        <>
            <Helmet>
                <title>404 / voidpixel blog</title>
            </Helmet>
            <div>
                <h1>Ooops...</h1>
                <h4>
                    I don't know what are you looking for, but the page does not exist.
                </h4>
            </div>
        </>
    )
}
