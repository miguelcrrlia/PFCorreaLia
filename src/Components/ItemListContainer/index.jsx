import styles from "./styles.module.css"
const ItemListContainer = ({greeting}) => {
    return (
    <p className= {styles["p"]}>
        {greeting}
    </p>
    )
}
export default ItemListContainer