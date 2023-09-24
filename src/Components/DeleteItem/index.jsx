import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import { useContext } from 'react'

const DeleteItem = ({ id }) => {
    const { cart, setCart } = useContext(ArticlesContext)
    const { totalCart, setTotalCart } = useContext(ArticlesContext)
    const deleteItemCart = () => {
        const itemDelete = cart.find((el) => el.id === id)
        setTotalCart(totalCart - itemDelete.amount)
        const newCart = cart.filter((el) => el.id !== id)
        setCart(newCart)

    }
    return (
        <input className={styles['button_delete']} type='button' onClick={deleteItemCart} />
    )
}
export default DeleteItem