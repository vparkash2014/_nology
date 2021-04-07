import CardFront from './../CardFront';
import CardBack from './../CardBack';
import { useState } from 'react';

const Card = ({ dishInformation, toggleFav }) => {
    const [isFront, setIsFront] = useState(true);

    return (
        <div onClick={() => setIsFront(!isFront)}>
            {isFront 
                ? <CardFront dishInformation={dishInformation} />
                : <CardBack dishInformation={dishInformation} toggleFav={toggleFav} />}
        </div>
    );
}

export default Card;