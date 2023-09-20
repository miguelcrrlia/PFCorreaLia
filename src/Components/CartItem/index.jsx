import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import DeleteItem from '../DeleteItem'

const CartItem = ({item, index}) => {
    console.log(index)
    return (
        <tr key={item.id+8}>
            <td className={styles['delete']}><div className={styles['delete-container']}><DeleteItem id={item.id} /> <img src={item.image} /></div></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
            <td>$ {item.amount * item.price}</td>
        </tr>
    )
}
export default CartItem