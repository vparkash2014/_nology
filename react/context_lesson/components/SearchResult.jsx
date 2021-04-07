import { useContext } from 'react';
import { SearchContext } from '../context/SearchProvider';

const SearchResults = () => {
    const { search, setSearch } = useContext(SearchContext);

    return (
        <div>
            <p>{search ? search : 'There is no search query'}</p>
        </div>
    )
}

export default SearchResults;