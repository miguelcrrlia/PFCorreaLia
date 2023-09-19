import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import ItemSearch from '../ItemSearch'
import { ArticlesContext } from '../../context/ArticlesContext'
import { useContext } from 'react'
import AddCart  from '../AddCart' 


const Item = ({item, index}) => {
    // const {articles, setArticles} = useContext(ArticlesContext)
    // const {id} = useParams()
    // const item = ItemSearch(id, articles)
    // useEffect(() => {
    //     setDetail(ItemSearch(id, articles))
    // }, [id])
    return (
        <figure key={index}>
            <img src={item.image} alt="" />
            <figcaption key={index}>
                {item.title}
            </figcaption>
            <p>Precio: ${item.price}</p>
            {/* <Link to={`/detail/${item.id}`}><p>ver mas...</p></Link> */}
            <AddCart item={item}/>
        </figure>
    )
}
export default Item