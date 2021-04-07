import { createContext, useState } from 'react';

export const SearchContext = createContext({});

// this will act as a wrapper similar to the way you wrap thing inside Router
const SearchProvider = ({ children }) => {
    // definiing the provider's state
    const [search, setSearch] = useState('');
    // creating an object that all components will have access. Preparing the context object for usage

    const clearSearch = () => setSearch(''); 

    const data = { search, setSearch, clearSearch  } ; 

    return (
        // overriding the SearchContext.provider behavior
        <SearchContext.Provider value={data}>
            { children } 
            {/* wrapping the children */}
        </SearchContext.Provider>
    );
};

export default SearchProvider