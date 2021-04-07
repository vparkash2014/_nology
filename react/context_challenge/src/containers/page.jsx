import { TextColorContext } from './../context/TextColorProvider.js';
import { BackgroundColorContext } from './../context/BackgroundColorProvider.js'
import { useContext } from 'react';

const Page = () => {
    const { setColor } = useContext(BackgroundColorContext);

    const { setTextColor } = useContext(TextColorContext)

    const buttonStyle = {
        color: setTextColor(),
        backgroundColor: setColor()
    };

    return (
        <>
            <button style={buttonStyle} >Test</button>
            {/* <p>{darkBackground ? 'true' : 'false'}</p> */}
        </>

    );
};

export default Page;