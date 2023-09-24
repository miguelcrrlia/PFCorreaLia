import styles from './styles.module.css'

const PurchaseCompleted = ({ id }) => {
    return (
        <>
            <h2>¡Muchas gracias por su compra!</h2>
            <p>Su id de la compra es: {id}</p>
        </>
    )
}
export default PurchaseCompleted