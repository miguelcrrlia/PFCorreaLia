import styles from './styles.module.css'

const OrderItem = ({ item, index }) => {
    return (
        <li className={styles["li__format"]}><img className={styles["img__format"]} src={item.image} /> <div>{item.title} x {item.amount}</div></li>
    )
}
export default OrderItem