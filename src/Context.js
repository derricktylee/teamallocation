import React, { createContext, useContext, useState } from 'react'
import { data } from './data'

const AppContext = createContext()

export function AppProvider ({children}){
    const [employees, setEmployees] = useState(data)
    return <AppContext.Provider value={{employees}}>{children}</AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}