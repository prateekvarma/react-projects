import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider= ({ children }) => {
    return (
        <AppContext.Provider value="Dummy Data">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    //custom hook
    return useContext(AppContext)
}

export { AppContext, AppProvider }