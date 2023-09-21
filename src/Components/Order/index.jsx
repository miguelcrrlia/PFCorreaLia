import { useState, useRef, useContext } from 'react'
import styles from './styles.module.css'
import { ArticlesContext } from '../../context/ArticlesContext'
import OrderItem from '../OrderItem'
import { collection, getDocs, getDoc, doc, addDoc, updateDoc, getFirestore } from 'firebase/firestore'
import { db } from '../../firebase/client'
import Error from '../Error'
import PurchaseCompleted from '../PurchaseCompleted'
import LoadingMessage from '../LoadingMessage'

const Order = () => {
    const {cart, setCart} = useContext(ArticlesContext)
    const {totalCart, setTotalCart} = useContext(ArticlesContext)
    const {totalPrice, setTotalPrice} = useContext(ArticlesContext)
    const [orderId, setOrderId] = useState("")
    //Creo este useState para controlar si se tocó el botón de confirmar compra
    //por si se actualiza la página
    const [controlSubmit, setcontrolSubmit] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: 0,
        email: "",
        newsletter: true,
        comment: ""
    })
    const sendOrder = () => {
        const resumeCart = cart.map(item => ({
            id: item.id,
            title: item.title,
            amount: item.amount,
            price: item.price
        }))
        const order = {
            buyer: {name: formData.name, surname: formData.surname, phone: formData.phone, 
            email: formData.email, newsletter: formData.newsletter, comment: formData.comment},
            items: resumeCart,
            total: totalPrice
            }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id)
            console.log(id)
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
        setFormData({...formData, [name]: info})
    }
    const submitFunction = (e) => {
        e.preventDefault()
        console.log(formData)
        if (cart.length > 0) {
            setcontrolSubmit(true)
            sendOrder()
        }
        if (buttonReset.current) {
            buttonReset.current.click();
        }
        
        
    }
    return (
        <div>
            {controlSubmit ? (orderId !== "" ? (<PurchaseCompleted id={orderId} />) : (<LoadingMessage />)) :
            (
        <form  onSubmit={submitFunction} className={styles["contacto__form"]} action="#">
            <fieldset>
                <legend>Formulario de compra</legend>
                <ul>
                    <li>
                        <label htmlFor="nombre">Nombre:</label>
                        <input className={styles["input--format"]} onChange={inputChange} id="nombre" name="name" type="text" placeholder="*escriba su nombre aquí*"  required/>
                    </li>
                    <li>
                        <label htmlFor="apellido">Apellido:</label>
                        <input className={styles["input--format"]} onChange={inputChange} id="apellido" name="surname" type="text" placeholder="*escriba su apellido aquí*" required/>
                        
                        
                    </li>
                    <li>
                        <label htmlFor="telefono">Teléfono:</label>
                        <input className={styles["input--format"]} onChange={inputChange} id="telefono" name="phone" type="number" placeholder="*escriba su número de teléfono aquí*" required/>
                        
                        
                    </li>
                    <li>
                        <label htmlFor="email">Email:</label>
                        <input className={styles["input--format"]} onChange={inputChange} id="email" name="email" type="email" placeholder="*escriba su correo aquí*" required />
                        
                        
                    </li>
                    <li className={styles["contacto__li-row"]}>
                        <label htmlFor="newsletter">¿Desea recibir  el Newsletter?</label>
                        <input className={styles["contacto__input-margin"]}  id="newsletter" name="newsletter" type="checkbox" onChange={inputChange} defaultChecked  />
                    </li>
                    <li className={styles["contacto__mensaje"]}>
                        <label htmlFor="mensaje">Comentario:</label>
                        <textarea className={styles["input--format"]} onChange={inputChange} name="comment" id="mensaje" cols="60" rows="10" placeholder="*escriba su comentario aquí*"></textarea>
                    </li>    
                </ul>

            <ul className={styles["none__border"]}>
                    <li className={styles["bold"]}>Artículos:</li>
                    {cart.map((item, index) => {
                        return <OrderItem key={index} item={item} index={index}/>
                    })}
                    
                    <li id="totalCantidad" className={styles["bold"]}>Cantidad total de artículos:<span className={styles["light"]}> {totalCart}</span> </li>
                    
                   
                    <li id="totalPrecio" className={styles["bold"]}>Precio final:<span className={styles["light"]}> $ {totalPrice}</span> </li>
                   
                
            </ul>
            </fieldset>
            <div className={styles["contacto__inputs"]}>
                <input className={styles["button--format"]} name="limpiar" type="reset" title="limpiar formulario" value="limpiar formulario" ref={buttonReset}/>
                <input className={styles["button--format"]} name="enviar" type="submit" title="confirmar compra" value="confirmar compra" />      
            </div>
        </form>
            )}
        </div>
    )
}
export default Order