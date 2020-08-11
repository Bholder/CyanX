import React, { useMemo } from 'react';
import { useGetCyanxState, useGetCyanxDispatch } from './cyanxHooks.js';

/**
 * 赋予组件为可观察属性-HOC
 * @param {*} Component 
 * @param {*} contextName 
 * @param {*} observedStateKeys 
 */
const withCyanxObservable = (Component, contextName, observedStateKeys) => (props) => {
    if (!observedStateKeys || observedStateKeys.length === 0) {
        // 获取相应context的dispatch
        const cyanxDispatch = useGetCyanxDispatch(contextName);

        const observableState = {};
        observableState[`${contextName}Dispatch`] = cyanxDispatch;

        // 将此公用仓库的dispatch存入名为${contextName}对象中
        observableState[contextName] = { dispatch: cyanxDispatch };

        return useMemo(() => {
            return <Component {...props} {...observableState} />;
        }, [cyanxDispatch])
    } else {
        // 获取相应context的dispatch
        const cyanxDispatch = useGetCyanxDispatch(contextName);

        // 获取相应context的state
        const cyanxState = useGetCyanxState(contextName);

        // 需要被监听的共享State
        const observableState = {};

        observedStateKeys.forEach(item => {
            observableState[item] = (cyanxState[item]);
        });

        // 将共享State存入名为${contextName}对象中
        observableState[contextName] = { ...observableState, dispatch: cyanxDispatch };

        observableState[`${contextName}Dispatch`] = cyanxDispatch;

        return useMemo(() => {
            return <Component {...props} {...observableState} />;
        }, [...Object.values(observableState), cyanxDispatch])
    }
}

export default withCyanxObservable;