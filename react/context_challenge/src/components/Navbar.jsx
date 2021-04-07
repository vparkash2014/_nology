import { TextColorContext } from './../context/TextColorProvider.js';
import { BackgroundColorContext } from './../context/BackgroundColorProvider.js'
import { useContext } from 'react';

const Navbar = () => {
    const {darkText, setDarkText} = useContext(TextColorContext);

    const {darkBackground, setDarkBackground} = useContext(BackgroundColorContext)

    return (
        <>
            <button onClick={() => setDarkText(!darkText)}>Text Color toggle</button>
            <button onClick={() => setDarkBackground(!darkBackground)}>Backgroud Color Toggle</button>
        </>
    )
}

export default Navbar