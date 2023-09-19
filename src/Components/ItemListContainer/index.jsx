// import ItemsGet from '../ItemsGet'
import LoadingMessage from '../LoadingMessage'
import Error from '../Error'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ItemFilter from '../ItemFilter'
import { db } from '../../firebase/client'
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { ArticlesContext } from '../../context/ArticlesContext'
import  ItemList  from '../ItemList'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const {articles, setArticles} = useContext(ArticlesContext)
    // const [articles, setArticles] = useState([])
    const [articlesFilter, setArticlesFilter] = useState([])
    const [error, setError] = useState(false)
    const productRef = collection(db, "articles")
    const getArticles = async () => {
        try {
            const data = await getDocs(productRef)
            const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            console.log(dataFiltrada + "dentro del getArticles")
            return dataFiltrada
        } catch (error) {
            setError(true)
            console.error("Error", error)
        }
     }
    useEffect(() => {
        const auxFunction = async () => {
            const data = await getArticles()
            setArticles(data)
        }
        auxFunction()
        //  console.log(articles)
        }, [])
        useEffect(() => {
            setArticlesFilter(ItemFilter(articles, categoryId))
        }, [categoryId, articles])
        console.log(articlesFilter)
        // if (articlesFilter.length > 0) {
            
            //     return articlesFilter
            // }
    if (error) {
        return <Error />
    }
    // const info = articlesFilter
    // console.log(info)
    // if (info === true) {
    //     return <Error />
    // }
    console.log("llega hasta acá")
    return (
        <ItemList articlesFilter={articlesFilter} />
        // <div  className={styles["list"]}>
        //     {articlesFilter.length > 0 ? (
        //             articlesFilter.map((item, index) => 
        //                 <figure key={index}>
        //                     <img src={item.image} alt="" />
        //                     <figcaption key={index}>
        //                         {item.title}
        //                     </figcaption>
        //                     <Link to={`/item/${item.id}`}><p>ver mas...</p></Link>
        //                 </figure>
        //             )
        //         ) : (
        //         <LoadingMessage />
        //     )}
        // </div>
    )
}
export default ItemListContainer