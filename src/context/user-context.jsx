import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utilities/firebase/firebase-utility";
// value that i want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        onAuthStateChangedListener(user => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

    }, [])
    const value = { currentUser, setCurrentUser }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

