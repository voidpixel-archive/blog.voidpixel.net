import * as React from "react";
import {RouteComponentProps} from "react-router";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

export const NotFound: React.FunctionComponent<RouteComponentProps> = (
    props: RouteComponentProps
) => {

    const history = useHistory();

    useEffect(() => {
        if(props.location.pathname !== '/404')
            history.push('/404')
    }, [props, history])

    return (
        <h1>
            404
        </h1>
    )
}