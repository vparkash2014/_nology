import styles from './CardBack.module.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

const CardBack = ({ dishInformation, toggleFav} ) => {
    const recipe = dishInformation;
    const limitInstructions = recipe.strInstructions.substring(0, 300) +'...';
    const favIcon = recipe.isFav ? fasFaHeart : farFaHeart;

    const favouriteHandle = (event) => {
        event.stopPropagation();
        toggleFav(recipe);
    }

    return (
        <div className={styles.CardBack}>
            <div className={styles.CardBack_header}>
                <div><h2>{recipe.strMeal}</h2></div>
                <FontAwesomeIcon onClick={favouriteHandle} className={styles.CardBack_icon} icon={favIcon} />
            </div>
            <h3 className={styles.CardBack_header}>Instructions</h3>
            <p className={styles.CardBack_text}>{recipe.strInstructions.slice(0, 300) + '...'}</p>

            <div>
                <h3  className={styles.CardBack_header}>Ingredients</h3>

                <div className={styles.CardBack_indgredients}>
                    {recipe.ingredients.map((ingredients, index) => {
                        return <p key={index}><FontAwesomeIcon className={styles.CardBack_icon} icon={faArrowRight}/> {ingredients}</p>
                    })};
                </div>
            </div>
        </div>
    );
};


export default CardBack;