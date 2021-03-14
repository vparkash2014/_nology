import styles from './CardFront.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


const CardFront = ({ dishInformation }) => {
    const recipe = dishInformation;

    return (
        <div className={styles.CardFront}>
            <img alt={recipe.strMeal} src={recipe.strMealThumb} />
            <div className={styles.CardFront_content}>
                <div>
                    <h2 className={styles.CardFront_header}>{recipe.strMeal}</h2>
                    <p className={styles.CardFront_country}>
                    <FontAwesomeIcon className={styles.CardFront_icon} icon={faGlobe} /> {recipe.strArea}
                    </p>
                </div>

                <div className={styles.CardFront_footer}>
                    <div>
                        <a className={styles.CardFront_link} href={recipe.strSource}>Full Recipe</a>
                    </div>
                    <div onClick={(event) => event.stopPropagation()}>
                        <a target="_blank" className={styles.CardFront_link} href={recipe.strYoutube}><FontAwesomeIcon className={styles.CardFront_icon} icon={faYoutube} /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFront;