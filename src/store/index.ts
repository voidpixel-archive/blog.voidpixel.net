import { combineReducers } from 'redux';
import {exampleReducer, ExampleState} from "./example";

export interface DefaultState {
    example: ExampleState
}

export const rootReducer = combineReducers({
    example: exampleReducer
})