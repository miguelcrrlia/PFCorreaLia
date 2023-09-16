import { useEffect, useState } from 'react'
import ItemFilter from '../ItemFilter'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/client'
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import ItemsGetFirebase from '../ItemsGetFirebase'

const ItemsGet = () => {
 const [articles, setArticles] = useState([])
 const [articlesFilter, setArticlesFilter] = useState([])
 const [error, setError] = useState(false)
 const productRef = doc(db, "articles", "9BH3l4yT4vYXvzu85S1w")
    let aux
    ItemsGetFirebase()
 const { id } = useParams()
 useEffect(() => {
     fetch('https://fakestoreapi.com/products')
     .then(res => res.json())
     .then(data => {
         setArticles(data)
         setArticlesFilter(data)
        aux = JSON.stringify(data)
         localStorage.setItem("articles", aux)
        })
        .catch((e) => {
            console.log(e.message)
            setError(true)
        })
    }, [])
    
    useEffect(() => {
        setArticlesFilter(ItemFilter(articles, id))
    }, [id])
    if (error) {
        return error
    }
return articlesFilter
}
export default ItemsGet