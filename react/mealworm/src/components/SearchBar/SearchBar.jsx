import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.scss'
import { useState} from 'react';
import { Link } from "react-router-dom";
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


const SearchBar = ({ setSearch}) => {
    const [isOpen, setIsOpen] = useState(false); // useState a react hook--hooks tell react to watch things
    // const [internalSearch, setInternalSearch] = useState('');

    const updateInternalSearch = (event) => {
        setSearch(event.target.value);
    };
    
    return (
        <div>
            {!isOpen || <input className={styles.SearchBar_input} onChange={updateInternalSearch} type="text" placeholder="Search" />}
            <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} className={styles.SearchBar_icon} icon={faSearch} size="lg"/>

            <Link to="/cookbook">
                    <FontAwesomeIcon className={styles.SearchBar_icon} icon={faBookOpen} size='lg' />
            </Link>
        </div>
    );
}


export default SearchBar;
