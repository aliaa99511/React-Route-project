import React, { createContext } from "react";

export const globalContext = createContext()
const GlobalContextProvider = (props) => {
    return <globalContext.Provider value={{}}>
        {props.childern}
    </globalContext.Provider>
};

export default GlobalContextProvider;
