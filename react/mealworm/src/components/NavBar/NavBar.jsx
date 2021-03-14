

import styles from './NavBar.module.scss'
import logo from "../../assets/plate-secondary.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './../SearchBar'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <div className={styles.NavBar_logo}>
                <img alt="MealWorm Company logo" src={logo} alt="FoodWorm logo" />
                <h1>MealWorm</h1>
            </div>
            
            <div className={styles.NavBar_search}>
                <SearchBar />
                <FontAwesomeIcon className={styles.NavBar_icon} icon={faBookOpen} size='lg' />
            </div>
        </div>

        
    )
}

export default NavBar;