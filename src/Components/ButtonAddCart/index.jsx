import { useState, useEffect} from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import ItemSearch from '../ItemSearch'
import { useContext } from 'react'


const ButtonAddCart = ({item, amount}) => {
    // amount = isNaN(amount) ? 1 : amount
    const [controlStock, setControlStock] = useState(true)
    const {cart, setCart} = useContext(ArticlesContext)
    const {totalCart, setTotalCart} = useContext(ArticlesContext)

    //  console.log(item)
    useEffect(() => {
       if (amount > item.stock) {
        setControlStock(false)
       }
       else {
        setControlStock(true)
       }
       let aux = cart.findIndex((el) => el.id === item.id)
       if (aux !== -1) {
        if( cart[aux].amount >= item.stock) {
            setControlStock(false)
        }
        // setCart([...cart, newItem])// cart[aux].amount = count || 1
    }
    }, [amount])
    const addCart = () => {
        let aux = cart.findIndex((el) => el.id === item.id)
        // console.log(aux)
        if (aux !== -1) {
            cart[aux].amount = cart[aux].amount + amount
            setTotalCart(totalCart + amount)
            if( cart[aux].amount > item.stock) {
                setControlStock(false)
                cart[aux].amount = cart[aux].amount - amount
            }
            // setCart([...cart, newItem])// cart[aux].amount = count || 1
        }
        else {
            // cart[aux].amount = cart[aux].amount + (count || 1)
            let newItem = {
                title: item.title,
                price: item.price,
                id: item.id,
                amount: amount,
                image: item.image,
                description: item.description
            }
            setTotalCart(totalCart + newItem.amount)
            if( newItem.amount > item.stock) {
                setControlStock(false)
            }
            else {
                setCart([...cart, newItem])
            }
            // console.log(newItem)
        }
        console.log(cart)
        console.log(controlStock)
        // if (cart.length > 0) {
        //     cart.map((el) => {
        //         contextInfo.setTotalCart(contextInfo.totalCart + el.amount)
        //     })
        // }
        console.log(totalCart)
    }
    return (
        item.stock > 0 && controlStock ? <button className={styles['figure__button']} type='button' onClick={addCart}>añadir al carrito</button> : 
        <button className={styles['figure__button__empty']} type='button'>artículo agotado</button>
    )
}
export default ButtonAddCart