import * as actions from "./actions";


export enum ExampleActionTypes {
    SET_TEST = '@@example/SET_TEST'
}

export type ExampleActions = actions.SetTest;

export interface ExampleState {
    test: any;
}