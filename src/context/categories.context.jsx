import { createContext, useState, useEffect } from "react";
// import STORE_DATA from "../store-data.js";
import { getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
    products: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});;

    useEffect(() => {
        const getCategoriesData = async () => {
            const categoryData = await getCollectionAndDocuments();
            // console.log(categoryData);
            setCategories(categoryData);
        };
        getCategoriesData();
    }, []);

    const value = { categories };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};

