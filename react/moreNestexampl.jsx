import { useEffect, useState} from 'react';

const Component3 = ( {setCount} ) => {
    return <button onClick={() => setCount(Math.random())}>Increment</button>
}

const Component2 = ( {setCount} ) => {
    return <Component3 setCount={setCount} />
}

const Component1 = ( {setCount} ) => {
    return <Component2 setCount={setCount} />
}

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count])

    return <Component1 setCount={setCount} />
}