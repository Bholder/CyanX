import { useContext } from "react";
import ContextManager from "./contextManager.js";

/**
 * 获取相应cyanxContext的state
 * @param {*} contextName 
 */
export const useGetCyanxState = (contextName) => {
    const { state } = useContext(ContextManager.getContext(contextName));

    return state;
}

/**
 * 获取相应cyanxContext的dispatch
 * @param {*} contextName 
 */
export const useGetCyanxDispatch = (contextName) => {
    const { dispatch } = useContext(ContextManager.getContext(contextName));

    return dispatch;
}
