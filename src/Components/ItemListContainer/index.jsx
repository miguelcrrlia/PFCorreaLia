import styles from "./styles.modules.css"
const ItemListContainer = ({greeting}) => {
    return (
    <p className= {styles["p"]}>
        {greeting}
    </p>
    )
}
export default ItemListContainer