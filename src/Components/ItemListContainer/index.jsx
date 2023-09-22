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
import EventEmitter from '../../emitter'
import { emitter } from '../../router/router'
import ItemFilterOption from '../ItemFilterOption'
const ItemListContainer = () => {
    const { categoryId } = useParams()
    const {articles, setArticles} = useContext(ArticlesContext)
    const [articlesFilter, setArticlesFilter] = useState([])
    const [error, setError] = useState(false)
    const productRef = collection(db, "articles")
    const [filterOption, setFilterOption] = useState("")
    const getArticles = async () => {
        try {
            const data = await getDocs(productRef)
            const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
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
        }, [])
        useEffect(() => {
            setArticlesFilter(ItemFilter(articles, categoryId))
        }, [categoryId, articles])
        useEffect(() => {
            const listener = ({value}) => {
                setFilterOption(value)
                console.log(value)
            }
            emitter.on("selectChangeFilter", listener)
            
            return () => {emitter.off("selectChangeFilter", listener)}
        }, [])
        // const emitter = new EventEmitter()
        useEffect(() => {
            setArticlesFilter(ItemFilterOption(articles, filterOption))
        }, [filterOption])
    if (error) {
        return <Error />
    }
    return (
        <ItemList articlesFilter={articlesFilter} />
    )
}
export default ItemListContainer