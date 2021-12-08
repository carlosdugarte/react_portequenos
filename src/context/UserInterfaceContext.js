import React, { createContext, useState } from 'react'


export const UserInterfaceContext = createContext()

export const UserInterfaceProvider = ({children}) => {

    const [loading, setLoading] = useState(false)

    return (
        <UserInterfaceContext.Provider value={{
            loading,
            setLoading
        }}>
            {children}
        </UserInterfaceContext.Provider>
    )
}