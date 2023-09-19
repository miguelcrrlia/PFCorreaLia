import { useState, useEffect} from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import ItemSearch from '../ItemSearch'
import { useContext } from 'react'


const ButtonAddCart = ({item}) => {
    // count=false
    const {cart, setCart} = useContext(ArticlesContext)
     console.log(item)
    const addCart = () => {
        let aux = cart.findIndex((el) => el.id === item.id)
        console.log(aux)
        if (aux !== -1) {
            cart[aux].amount++
            // setCart([...cart, newItem])// cart[aux].amount = count || 1
        }
        else {
            // cart[aux].amount = cart[aux].amount + (count || 1)
            let newItem = {
                title: item.title,
                price: item.price,
                id: item.id,
                amount: 1
            }
            console.log(newItem)
            setCart([...cart, newItem])
        }
        console.log(cart)
    }
    return (
        item.stock > 0 ? <button className={styles['figure__button']} type='button' onClick={addCart}>añadir al carrito</button> : 
        <button className={styles['figure__button__empty']} type='button'>no existe stock</button>
    )
}
export default ButtonAddCart