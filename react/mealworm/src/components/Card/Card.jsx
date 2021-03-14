import CardBack from './../CardBack'
import CardFront from './../CardFront'
import { useState } from 'react';

const toggleState = (state, setState) => setState(!state);

const Card = ({dishInformation}) => {
    const [isFront, setIsFront] = useState(true);

    return (
        <div onClick={() => toggleState(isFront, setIsFront)}>
            {isFront
                ? <CardFront key={dishInformation.IdMeal} dishInformation={dishInformation} />
                : <CardBack key={dishInformation.IdMeal} dishInformation={dishInformation} />
            }
        </div>
    );
}


export default Card;
