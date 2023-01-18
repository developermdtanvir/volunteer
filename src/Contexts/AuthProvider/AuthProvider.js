import { createContext } from "react"


export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const info = {
        name: 'Tanvir'
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )

}
