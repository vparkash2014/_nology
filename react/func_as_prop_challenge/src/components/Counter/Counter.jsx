import { useState } from 'react';
import MyBtn from './../MyBtn';
import styles from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <div className={styles.Counter}>
            <h1>The count is: <span className={styles.Counter_count}>{count}</span> </h1>
            <div className={styles.Counter_btn}>
                <MyBtn variant='info' name='increment' clickFunction={increment} />
                <MyBtn variant='danger' name='decrement' clickFunction={decrement}/>
            </div>
        </div>
    );
};

export default Counter;