import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import { useContext } from 'react'

const ButtonAddCart = ({ item, amount }) => {
    const [controlStock, setControlStock] = useState(true)
    const { cart, setCart } = useContext(ArticlesContext)
    const { totalCart, setTotalCart } = useContext(ArticlesContext)
    useEffect(() => {
        if (amount > item.stock) {
            setControlStock(false)
        }
        else {
            setControlStock(true)
        }
        //Reviso el stock del item que existe en el carrito
        let aux = cart.findIndex((el) => el.id === item.id)
        if (aux !== -1) {
            if (cart[aux].amount + amount > item.stock) {
                setControlStock(false)
            }
        }
    }, [amount])
    const addCart = () => {
        let aux = cart.findIndex((el) => el.id === item.id)
        if (aux !== -1) {
            cart[aux].amount = cart[aux].amount + amount
            if (cart[aux].amount > item.stock) {
                setControlStock(false)
                cart[aux].amount = cart[aux].amount - amount
            }
            else {
                setTotalCart(totalCart + amount)
            }
        }
        else {
            let newItem = {
                title: item.title,
                price: item.price,
                id: item.id,
                amount: amount,
                image: item.image,
                description: item.description
            }
            setTotalCart(totalCart + newItem.amount)
            if (newItem.amount > item.stock) {
                setControlStock(false)
            }
            else {
                setCart([...cart, newItem])
            }
        }
    }
    return (
        item.stock > 0 && controlStock ? <button className={styles['figure__button']} type='button' onClick={addCart}>añadir al carrito</button> :
            <button className={styles['figure__button__empty']} type='button'>artículo agotado</button>
    )
}
export default ButtonAddCart