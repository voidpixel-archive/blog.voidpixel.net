import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {SetTest} from "../store/example/dispatchers";
import {DefaultState} from "../store";
import {ExampleState} from "../store/example";
import {useEffect} from "react";
import Button from "./button/Button.component";

const App = () => {

    const dispatch = useDispatch();
    const exampleState = useSelector<DefaultState, ExampleState>(state => state.example);


    useEffect(() => {
        console.log(exampleState)
    }, [exampleState])

    const _onClick = () => {
        dispatch(SetTest('un dos tres'))
    }

    return (
        <div>
            <Button onClick={_onClick}>Dispatch</Button>
            <h1>{exampleState.test}</h1>
        </div>
    );
}

export default App;