import ButtonAddCart from '../ButtonAddCart'
import ItemCount from '../ItemCount'
import styles from './styles.module.css'
import { useState } from 'react'

const ItemDetail = ({ detail }) => {
    const [count, setCount] = useState(1)
    const changeCount = (amount) => {
        setCount(amount)
    }
    return (
        <figure className={styles["detailFigure"]} key={detail.id}>
            <img src={detail.image} alt="" />
            <figcaption>
                {detail.title}
            </figcaption>
            <p>{detail.description}</p>
            <ItemCount changeCount={changeCount} />
            <p>Precio: ${detail.price * count}</p>
            <ButtonAddCart item={detail} amount={count} />
        </figure>
    )
}
export default ItemDetail