import * as Actions from "./actions";
import {ExampleActionTypes} from "./types";

export const SetTest = (message: string): Actions.SetTest => ({
    type: ExampleActionTypes.SET_TEST,
    test: message
})