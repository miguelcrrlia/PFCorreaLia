import { ArticlesContext } from '../../context/ArticlesContext'
import { useContext } from 'react'
import styles from './styles.module.css'
import CartView from '../CartView'

const CartProvider = () => {
    const { cart, setCart } = useContext(ArticlesContext)
    const cleanCart = () => {
        setCart([])
    }
    return (
        cart.length > 0 ? <CartView itemsCart={cart} cleanCart={cleanCart} /> : <h3>El carrito está vacio.</h3>
    )
}
export default CartProvider
