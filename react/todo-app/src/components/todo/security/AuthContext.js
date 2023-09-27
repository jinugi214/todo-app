import { createContext, useState, useContext } from "react";

//1: Create a Context
export const AuthContext = createContext()
// AuthContext 접근 제공을 위해 export

export const useAuth = () => useContext(AuthContext)

// Share the created context with ohter components
export default function AuthProvider({ children }) {

    // Put some state in the context
    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        
    }

    return (
        <AuthContext.Provider value={  {number, isAuthenticated, setAuthenticated} }>
            {children}
        </AuthContext.Provider>
    )
}