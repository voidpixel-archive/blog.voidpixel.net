import {ExampleActionTypes} from "./types";

export interface SetTest {
    type: typeof ExampleActionTypes.SET_TEST
    test: any;
}