import {Person} from "../variables/makeData";
import {FETCH_TABLE_DATA} from "./types";

interface IState {
    data: Person[]
}

const initialState: IState = {
    data: []
}

export const tableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_TABLE_DATA:
            return {...state, data: action.payload}
        default:
            return state
    }
}
