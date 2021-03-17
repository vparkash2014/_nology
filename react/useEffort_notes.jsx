import { useEffect, useState, useRef} from 'react';

const App = () => {

    const [counter, setCounter] = useState(0); 
    const [reverseCounter, setReverseCounter] = useState(100); 

    useEffect(() => {
        // this is my mounted block
        console.log('I have mounted')

        return () => {
            // this is my unmounted block
            console.log('I have unmounted')
        };
    }, []);

    useEffect(() => {
       setReverseCounter(reverseCounter -1) 
    }, [counter])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)} > Increment </button>
        </>
    )
}