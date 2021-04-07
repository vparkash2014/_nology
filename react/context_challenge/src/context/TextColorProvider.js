import { createContext, useState } from 'react';

export const TextColorContext = createContext({});

const TextColorProvider = ({ children }) => {
    const [darkText, setDarkText] = useState(false)

    const setTextColor = () => {
        return darkText ? "black" : "white";
    };

    const data = {darkText, setDarkText, setTextColor}; 

    return( 
        <TextColorContext.Provider value={data}>
            { children }
        </TextColorContext.Provider>
    );
};

export default TextColorProvider;
