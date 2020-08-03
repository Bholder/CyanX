import React from 'react';
import ContextManager from "./contextManager.js";

/**
 * 赋予组件为全局观察者-HOC
 * @param {*} Component 
 * @param {*} contextName 
 * @param {*} defaultValue 
 */
const withCyanxObserver = (Component, contextName, defaultValue) => (props) => {
    const CyanxContextProvider = ContextManager.createContext(contextName, defaultValue);

    return (
        <CyanxContextProvider>
            <Component {...props} />
        </CyanxContextProvider>
    );
};

export default withCyanxObserver;