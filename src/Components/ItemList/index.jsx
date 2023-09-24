import LoadingMessage from "../LoadingMessage"
import styles from './styles.module.css'
import Item from '../Item'

const ItemList = ({ articlesFilter, searchVerf}) => {
    return <div key="ItemList" className={styles["list"]}>
        {articlesFilter.length > 0 ? (
            articlesFilter.map((item, index) =>
                <Item key={index} item={item} index={index + 1} />
            )
        ) : (searchVerf ? 
            <LoadingMessage /> : <h3>¡Lo sentimos, no hemos encontrado artículos!</h3>
        )}
    </div>
}
export default ItemList