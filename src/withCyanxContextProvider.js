import React, { useReducer } from 'react';

/**
 * 包裹CyanxContextProvider-HOC
 * @param {*} context 
 * @param {*} defaultValue 
 */
const withCyanxContextProvider = (context, defaultValue) => (props) => {
    const reducer = (state, action) => {
        return { ...state, ...action };
    }

    const [state, dispatch] = useReducer(reducer, { ...defaultValue });

    return <context.Provider value={{ state, dispatch }} {...props} />
};

export default withCyanxContextProvider;
