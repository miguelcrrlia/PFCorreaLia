import { useContext, useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import DeleteItem from '../DeleteItem'

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
                    <tr key={index}>
                        <td className={styles['delete']}><div className={styles['delete-container']}><DeleteItem id={item.id} /> <img src={item.image} /></div></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.amount}</td>
                        <td>$ {item.amount * item.price}</td>
                    </tr>
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