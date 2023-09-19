import LoadingMessage from "../LoadingMessage"
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Item from '../Item'


const ItemList = ({ articlesFilter }) =>{
    console.log(articlesFilter)
return <div  className={styles["list"]}>
            {articlesFilter.length > 0 ? (
                    articlesFilter.map((item, index) => 
                                <Item item={item} index={index} />
                    )
                ) : (
                <LoadingMessage />
            )}
        </div>
}
export default ItemList