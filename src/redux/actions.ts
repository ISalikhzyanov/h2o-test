import {CHANGE_TYPE, FETCH_TABLE_DATA, HIDE_LOADER, IS_EDIT, SHOW_LOADER} from "./types";
import {tableData} from "../variables/makeData";


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function isEdit() {
    return {
        type: IS_EDIT
    }
}

export function changeTableType (type: string) {
    return {
        type: CHANGE_TYPE,
        payload: type
    }
}
export function fetchProjects() {
    return async (dispatch: any) => {
        dispatch(showLoader())
        await tableData.getData()
            .then((r:Awaited<any>)=>{
                setTimeout(()=>{
                    dispatch({
                        type: FETCH_TABLE_DATA,
                        payload: r.data
                    })
                    dispatch(hideLoader())
                }, 2000)
            })
    }
}
