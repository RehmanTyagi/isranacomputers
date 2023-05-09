import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner, createUserDocFromAuth } from '../utils/firebase/firebase.utils';
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            setCurrentUser(user);
            createUserDocFromAuth(user);
        });
        return unsubscribe;
    }, [currentUser]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};