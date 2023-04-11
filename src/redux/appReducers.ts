import {CHANGE_TYPE, HIDE_LOADER, IS_EDIT, SHOW_LOADER} from "./types";

const initialState = {
    loader: false,
    edit: true,
    tableType: 'common_base'
}
export const appReducers = (state = initialState, action: any) => {
    switch (action.type){
        case SHOW_LOADER:
            return {...state, loader: true}
        case HIDE_LOADER:
            return {...state, loader: false}
        case IS_EDIT:
            return {...state, edit: !state.edit}
        case CHANGE_TYPE:
            return {...state, tableType: action.payload}
        default:
            return state
    }
}
