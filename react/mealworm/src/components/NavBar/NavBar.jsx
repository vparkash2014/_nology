import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import styles from './NavBar.module.scss'
import logo from "../../assets/plate-secondary.png";
import SearchBar from './../SearchBar'

const NavBar = ( {pages, pageNames, setSearch} ) => {
    return (
        <div className={styles.NavBar}>
            <Link to='/'  className={styles.NavBar_link}>
                <div className={styles.NavBar_logo}>
                    <img alt="MealWorm Company logo" src={logo} alt="FoodWorm logo" />
                    <h1>MealWorm</h1>
                </div>
            </Link>


            {pages.map( (page, ind) => 
                    <Link to={page} key={page} className={styles.NavBar_link}>{pageNames[ind]}</Link>
            )}

            
            <div className={styles.NavBar_search}>
                <SearchBar setSearch={setSearch} />
            </div>
        </div>

        
    )
}

export default NavBar;