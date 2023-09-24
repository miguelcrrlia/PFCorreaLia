import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import { ArticlesContext } from '../../context/ArticlesContext'
import  ItemList  from '../ItemList'
import ItemFilter from '../ItemFilter'
import ItemFilterOption from '../ItemFilterOption'
import ItemSearchOption from '../ItemSearchOption'
import Error from '../Error'

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const {articles, setArticles} = useContext(ArticlesContext)
    const [articlesFilter, setArticlesFilter] = useState([])
    const [error, setError] = useState(false)
    const [searchVerf, setSearchVerf] = useState(true)
    const {filterOption, setFilterOption} = useContext(ArticlesContext)
    const {searchInputInfo, setSearchInputInfo} = useContext(ArticlesContext)
    const productRef = collection(db, "articles")
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
        const datInf = ItemFilter(articles, categoryId)
        setArticlesFilter(datInf)
    }, [categoryId, articles])
        useEffect(() => {
            const dat = ItemFilterOption(articles, filterOption)
            setArticlesFilter(dat)
        }, [filterOption])
        useEffect(() => {
            if (searchInputInfo.which === 13 || searchInputInfo.keyCode === 13 || searchInputInfo.key === "enter" && searchInputInfo.value !== "") {
                const datafilter = ItemSearchOption(articles, searchInputInfo)
                setArticlesFilter(datafilter)
                articlesFilter.length > 0 ? setSearchVerf(false) : setSearchVerf(true)
            }
        }, [searchInputInfo])
        if (error) {
            return <Error />
        }
        return (
            <ItemList articlesFilter={articlesFilter} searchVerf={searchVerf} />
    )
}
export default ItemListContainer