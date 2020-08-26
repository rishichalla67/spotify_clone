import React, {createContext, useContext, useReducer } from "react";


export const StateContext = createContext();

//Children means anything wrapped inside StateProvider in index.js (<App />)
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateProviderValue = () => useContext(StateContext);