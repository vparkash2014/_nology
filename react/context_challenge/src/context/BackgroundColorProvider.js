import { createContext, useState } from 'react';

export const BackgroundColorContext = createContext({});

const BackgroundColorProvider = ({ children }) => {
    const [darkBackground, setDarkBackground] = useState(false)

    const setColor = () => {
        return darkBackground ? "black" : "white";
    };

    const data = {darkBackground, setDarkBackground, setColor}; 

    return( 
        <BackgroundColorContext.Provider value={data}>
            { children }
        </BackgroundColorContext.Provider>
    );
};

export default BackgroundColorProvider;