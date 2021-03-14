import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './SearchBar.module.scss'

// const SearchBar = () => {
//     return (
//         <div>
//             <input className={styles.SearchBar_input} type="text" placeholder="Search"></input>
//             <FontAwesomeIcon className={styles.SearchBar_icon} icon={faSearch} size="lg"/>
//         </div>
//     )
// }
// export default SearchBar;



import { useState } from 'react';

const toggleState = (state, setState) => setState(!state);

const SearchBar = ({dishInformation}) => {
    const [isOpen, setIsOpen] = useState(false) // useState a react hook--hooks tell react to watch things

    
    return (
        <div onClick={() => toggleState(isOpen, setIsOpen)}>
            {isOpen
                ? <>
                <input className={styles.SearchBar_input} type="text" placeholder="Search"></input>
                <FontAwesomeIcon className={styles.SearchBar_icon} icon={faSearch} size="lg"/>
                </>
                : <FontAwesomeIcon className={styles.SearchBar_icon} icon={faSearch} size="lg"/>
            }
        </div>
    );
}


export default SearchBar;
