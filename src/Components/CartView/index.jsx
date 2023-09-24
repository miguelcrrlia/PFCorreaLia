import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'

const CartView = ({ itemsCart, cleanCart }) => {
    const { totalCart, setTotalCart } = useContext(ArticlesContext)
    const { totalPrice, setTotalPrice } = useContext(ArticlesContext)
    const resetTotalCart = () => {
        setTotalCart(0)
    }
    let subTotalTemp = 0
    itemsCart.map((el) => {
        subTotalTemp += el.price * el.amount
    })
    useEffect(() => {
        setTotalPrice(subTotalTemp)
    }, [subTotalTemp])
    return (
        <div className={styles["div__cart"]}>
            <table>
                <thead>
                    <tr className={styles["schedules__days--sticky"]}>
                        <th></th>
                        <th>Nombre</th>
                        <th>Precio por unidad</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsCart.map((item, index) => (
                        <CartItem key={index} item={item} index={index} />
                    ))}
                    <tr id="total">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="totalCantidad"><span className={styles["fontWeigth"]}>Total:</span><br />{totalCart}</td>
                        <td id="totalPrecio"><span className={styles["fontWeigth"]}>Total:</span><br />$ {subTotalTemp}</td>
                    </tr>
                </tbody>
            </table>
            <div className={styles["buttonsCart--format"]}>
                <button id="clean" className={styles["button--format"]} onClick={() => { cleanCart(); resetTotalCart() }} type="button">
                    Limpiar carrito
                </button>
                <Link to='/order'>
                    <button id="finish" className={styles["button--format"]} type="button">
                        Finalizar compra
                    </button>
                </Link>
            </div>
        </ div>
    )
}
export default CartView