import LoadingMessage from "../LoadingMessage"
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const ItemList = ({ articlesFilter }) =>{
    console.log(articlesFilter)
return <div  className={styles["list"]}>
            {articlesFilter.length > 0 ? (
                    articlesFilter.map((item, index) => 
                        <figure key={index}>
                            <img src={item.image} alt="" />
                            <figcaption key={index}>
                                {item.title}
                            </figcaption>
                            <Link to={`/item/${item.id}`}><p>ver mas...</p></Link>
                        </figure>
                    )
                ) : (
                <LoadingMessage />
            )}
        </div>
}
export default ItemList