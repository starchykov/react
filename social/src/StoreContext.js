import React from "react";

export const StoreContext = React.createContext('default');

export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
};

export default StoreContext;
