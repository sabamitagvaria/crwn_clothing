import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utilities/firebase/firebase-utility.js";
export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesContextProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    useEffect(() => {
        const getCategories = async () => {
            const categories = await getCategoriesAndDocument()
            setCategoriesMap(categories)

        }
        getCategories()

    }, [])
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

