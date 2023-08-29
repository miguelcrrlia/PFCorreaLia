import ItemCount from '../ItemCount'
import styles from './styles.module.css'
const ItemDetail = ({detail}) => {   
    return (
        <figure  className={styles["detailFigure"]} key={detail.id}>
            <img src={detail.image} alt="" />
            <figcaption>
                {detail.title}
            </figcaption>
            <p>{detail.description}</p>
            <ItemCount />
            <p>Precio: ${detail.price}</p>
        </figure>
    )
}
export default ItemDetail