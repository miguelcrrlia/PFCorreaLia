import { Link } from 'react-router-dom'
import ButtonAddCart from '../ButtonAddCart'

const Item = ({ item, index }) => {
    return (
        <figure key={index}>
            <img src={item.image} alt="" />
            <figcaption key={index}>
                {item.title}
            </figcaption>
            <p>Precio: ${item.price}</p>
            <Link to={`/detail/${item.id}`}><p>ver mas...</p></Link>
            <ButtonAddCart item={item} amount={1} />
        </figure>
    )
}
export default Item