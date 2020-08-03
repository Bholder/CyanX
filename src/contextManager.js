import React from "react";
import withCyanxContextProvider from "./withCyanxContextProvider.js";

const contextStore = new Map(); // context&context.Provider仓库

/**
 * 生成&储存Context&ContextProvider;返回ContextProvider
 * @param {*} name 
 * @param {*} defaultValue 
 */
const createContext = (name, defaultValue) => {
    if (getContextProvider(name)) {
        return getContextProvider(name);
    } else {
        const context = React.createContext();

        const contextProvider = withCyanxContextProvider(context, defaultValue);

        setContextAndContextProvider(name, context, contextProvider);

        return contextProvider;
    }
}

/**
 * 储存Context
 * @param {*} name 
 * @param {*} context 
 * @param {*} contextProvider 
 */
const setContextAndContextProvider = (name, context, contextProvider) => {
    contextStore.set(name, { context, contextProvider });
}

/**
 * 获取Context；如果不存在，则返回undefined
 * @param {*} name 
 */
const getContext = (name) => {
    return contextStore.get(name) && contextStore.get(name).context ? contextStore.get(name).context : undefined;
}

/**
 * 获取ContextProvider；如果不存在，则返回undefined
 * @param {*} name 
 */
const getContextProvider = (name) => {
    return contextStore.get(name) && contextStore.get(name).contextProvider ? contextStore.get(name).contextProvider : undefined;
}

export default { createContext, getContext };
