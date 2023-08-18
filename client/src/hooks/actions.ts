import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "./redux"

const actions = {
    // ...actions
}

export const useActions = ()=> {
    const dispatch = useAppDispatch()
    return bindActionCreators(actions, dispatch)
}