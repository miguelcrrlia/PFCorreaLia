import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import DeleteItem from '../DeleteItem'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'
const CartView = ({itemsCart}) => {
    // const contextTotal= useContext(ArticlesContext)
    const {totalCart, setTotalCart} = useContext(ArticlesContext)
    // const [subTotal, setSubTotal] = useState(0)
    console.log(itemsCart)
    let subTotalTemp = 0
        itemsCart.map((el) => {
            subTotalTemp += el.price * el.amount
        })
    // setSubTotal(subTotalTemp)
    return (
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
                    <CartItem key={index}item={item} index={index}/>
                ))}
                <tr id="total">
                <td></td>
                <td></td>
                <td></td>
                <td id="totalCantidad"><span className={styles["fontWeigth"]}>Total:</span><br/>{totalCart}</td>
                <td id="totalPrecio"><span className={styles["fontWeigth"]}>Total:</span><br/>$ {subTotalTemp}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default CartView