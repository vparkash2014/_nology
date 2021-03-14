import styles from './CardBack.module.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react';

const toggleState = (state, setState) => {
    setState(!state);
};


const CardBack = ({ dishInformation} ) => {
    const recipe = dishInformation;
    const [isFav, setIsFav] = useState(false);

    return (
        <div className={styles.CardBack}>
            <div className={styles.CardBack_header}>
                <div><h2>{recipe.strMeal}</h2></div>

                <div onClick={(event) => {event.stopPropagation(); toggleState(isFav, setIsFav); }}>
                    {isFav
                    ? <FontAwesomeIcon className={styles.CardBack_icon} icon={fasFaHeart}/>
                    : <FontAwesomeIcon className={styles.CardBack_icon} icon={farFaHeart}/>
                    }
                </div>

                
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