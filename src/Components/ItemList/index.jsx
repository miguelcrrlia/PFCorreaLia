import LoadingMessage from "../LoadingMessage"
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import Item from '../Item'


const ItemList = ({ articlesFilter }) =>{
    console.log(articlesFilter)
return <div key="ItemList" className={styles["list"]}>
            {articlesFilter.length > 0 ? (
                    articlesFilter.map((item, index) => 
                                <Item key={index} item={item} index={index+1} />
                    )
                ) : (
                <LoadingMessage />
            )}
        </div>
}
export default ItemList