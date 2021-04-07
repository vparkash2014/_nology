import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchProvider';

const SearchBar = () => {
    // asling react for value associated with SearchContext
    const { search, setSearch, clearSearch} = useContext(SearchContext); // the context is an object so we need to call it as an object

    // defining internal state for onChange, as to not update conext to often
    const [ internal, setInternal] = useState(search); // just incase search has a defualt string

    return(
        <>
            <input onChange={(event) => setInternal(event.target.value)} value={internal}/>
            {/* calling the setter from context, to update the shared state  */}
            <button onClick={() => setSearch(internal)}>Search</button>
            <button onClick={() => clearSearch(internal)}>Clear</button>
        </>
    )
}

export default SearchBar;