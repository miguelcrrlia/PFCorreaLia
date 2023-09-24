import { useState, useEffect } from 'react'
import styles from './styles.module.css'

const ItemCount = ({ changeCount }) => {
    const [count, setCount] = useState(1)
    const increment = () => {
        setCount(count + 1)
        changeCount(count + 1)
    }
    const decrement = () => {
        count > 1 && setCount(count - 1)
        count > 1 && changeCount(count - 1)
    }
    const changeValue = (e) => {
        setCount(e.target.value)
    }

    return (
        <div className={styles["boxInput"]}>
            <button className={styles['input__button']} onClick={decrement}>-</button>
            <input value={count} onChange={changeValue} type="number" />
            <button className={styles['input__button']} onClick={increment}>+</button>
        </div>
    )
}
export default ItemCount