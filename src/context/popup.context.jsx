import { createContext, useState } from "react";
const popupTimer = 1000;
const initialState = {
    text: '',
    type: '',
};

export const AlertContext = createContext({
    ...initialState,
    setAlert: () => { },
});


export const AlertProvider = ({ children }) => {
    const [text, setText] = useState('');
    const [type, setType] = useState('');

    const setAlert = (text, type) => {
        setText(text);
        setType(type);

        setTimeout(() => {
            setText('');
            setType('');
        }, popupTimer);
    };

    return <AlertContext.Provider value={{ text, type, setAlert }}>{children}</AlertContext.Provider>;

};;