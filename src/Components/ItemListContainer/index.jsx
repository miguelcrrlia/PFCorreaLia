import ItemsGet from '../ItemsGet'
import LoadingMessage from '../LoadingMessage'
import Error from '../Error'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const ItemListContainer = () => {
    const { id } = useParams()
    const info = ItemsGet(id)
    if (info === true) {
        return <Error />
    }
    return (
        <div  className={styles["list"]}>
            {info.length > 0 ? (
                    info.map((item, index) => 
                        <figure key={index}>
                            <img src={item.image} alt="" />
                            <figcaption key={item.id}>
                                {item.title}
                            </figcaption>
                            <Link to={`/item/${item.id}`}><p>ver mas...</p></Link>
                        </figure>
                    )
                ) : (
                <LoadingMessage />
            )}
        </div>
    )
}
export default ItemListContainer