import { useState, useRef, useContext } from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import OrderItem from '../OrderItem'
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, getFirestore, FieldValue } from 'firebase/firestore'
import Error from '../Error'
import PurchaseCompleted from '../PurchaseCompleted'
import LoadingMessage from '../LoadingMessage'

const Order = () => {
    const { cart, setCart } = useContext(ArticlesContext)
    const { totalCart, setTotalCart } = useContext(ArticlesContext)
    const { totalPrice, setTotalPrice } = useContext(ArticlesContext)
    const [orderId, setOrderId] = useState("")
    //Creo este useState para controlar si se tocó el botón de confirmar compra
    //por si se actualiza la página
    const [controlSubmit, setcontrolSubmit] = useState(false)
    const [finishOrder, setFinishOrder] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: 0,
        email: "",
        newsletter: true,
        comment: ""
    })
    const sendOrder = () => {
        //Me quedo con la información relevante del cart 
        const resumeCart = cart.map(item => ({
            id: item.id,
            title: item.title,
            amount: item.amount,
            price: item.price
        }))
        const order = {
            buyer: {
                name: formData.name, surname: formData.surname, phone: formData.phone,
                email: formData.email, newsletter: formData.newsletter, comment: formData.comment
            },
            items: resumeCart,
            total: totalPrice
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id)
            setCart([])
            setTotalCart(0)
        })
            .catch((error) => {
                console.error("Error al agregar el documento a la colección", error)
                return <Error />
            })
    }
    const buttonReset = useRef(null)
    const inputChange = (e) => {
        const { name, value, type, checked } = e.target
        const info = type === 'checkbox' ? checked : value
        setFormData({ ...formData, [name]: info })
    }
    const submitFunction = async (e) => {
        e.preventDefault()
        //Pongo esta condición para que no envie una orden en caso que se actualice la página estando el formulario,
        //sino enviaría una orden con la propiedad items vacía.
        if (cart.length > 0) {
            setcontrolSubmit(true)
            sendOrder()
            await Promise.all(cart.map(async (item) => {
                await updateStock(item.id, item.amount)
            }))
        }
        //Para que cuando se entregue el formulario se reinicie aprovechando el mismo botón de limpiar el formulario.
        if (buttonReset.current) {
            buttonReset.current.click()
        }
        setFinishOrder(true)
    }
    const updateStock = async (id, amount) => {
        try {
            const db = getFirestore()
            const stockUpdate = doc(db, "articles", id)
            const takeStock = await getDoc(stockUpdate)
            const actualStock = takeStock.data().stock
            const newStock = actualStock - amount
            await updateDoc(stockUpdate, { stock: newStock })
        } catch (error) {
            console.error("Error al actualizar el stock:", error)
            return <Error />
        }
    }
    return (
        <div>
            {controlSubmit ? (finishOrder ? (<PurchaseCompleted id={orderId} />) : (<LoadingMessage />)) :
                (
                    <form onSubmit={submitFunction} className={styles["contacto__form"]} action="#">
                        <fieldset>
                            <legend>Formulario de compra</legend>
                            <ul>
                                <li>
                                    <label htmlFor="nombre">Nombre:</label>
                                    <input className={styles["input--format"]} onChange={inputChange} id="nombre" name="name" type="text" placeholder="*escriba su nombre aquí*" required />
                                </li>
                                <li>
                                    <label htmlFor="apellido">Apellido:</label>
                                    <input className={styles["input--format"]} onChange={inputChange} id="apellido" name="surname" type="text" placeholder="*escriba su apellido aquí*" required />


                                </li>
                                <li>
                                    <label htmlFor="telefono">Teléfono:</label>
                                    <input className={styles["input--format"]} onChange={inputChange} id="telefono" name="phone" type="number" placeholder="*escriba su número de teléfono aquí*" required />


                                </li>
                                <li>
                                    <label htmlFor="email">Email:</label>
                                    <input className={styles["input--format"]} onChange={inputChange} id="email" name="email" type="email" placeholder="*escriba su correo aquí*" required />


                                </li>
                                <li className={styles["contacto__li-row"]}>
                                    <label htmlFor="newsletter">¿Desea recibir  el Newsletter?</label>
                                    <input className={styles["contacto__input-margin"]} id="newsletter" name="newsletter" type="checkbox" onChange={inputChange} defaultChecked />
                                </li>
                                <li className={styles["contacto__mensaje"]}>
                                    <label htmlFor="mensaje">Comentario:</label>
                                    <textarea className={styles["input--format"]} onChange={inputChange} name="comment" id="mensaje" cols="60" rows="10" placeholder="*escriba su comentario aquí*"></textarea>
                                </li>
                            </ul>

                            <ul className={styles["none__border"]}>
                                <li className={styles["bold"]}>Artículos:</li>
                                {cart.map((item, index) => {
                                    return <OrderItem key={index} item={item} index={index} />
                                })}
                                <li id="totalCantidad" className={styles["bold"]}>Cantidad total de artículos:<span className={styles["light"]}> {totalCart}</span> </li>
                                <li id="totalPrecio" className={styles["bold"]}>Precio final:<span className={styles["light"]}> $ {totalPrice}</span> </li>
                            </ul>
                        </fieldset>
                        <div className={styles["contacto__inputs"]}>
                            <input className={styles["button--format"]} name="limpiar" type="reset" title="limpiar formulario" value="limpiar formulario" ref={buttonReset} />
                            <input className={styles["button--format"]} name="enviar" type="submit" title="confirmar compra" value="confirmar compra" />
                        </div>
                    </form>
                )}
        </div>
    )
}
export default Order