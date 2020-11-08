import {Reducer} from 'redux'
import {ExampleState, ExampleActionTypes, ExampleActions} from "./types";
import {produce} from 'immer'

export const initialState: ExampleState = {
    test: 'test'
}

const reducer: Reducer<ExampleState, ExampleActions> = (
    state = initialState,
    action: ExampleActions
) => {
    switch (action.type) {
        case ExampleActionTypes.SET_TEST:
            return produce(state, (copyState: ExampleState) => {
                copyState.test = action.test;
            });
        default:
            return state
    }
}

export { reducer as exampleReducer }