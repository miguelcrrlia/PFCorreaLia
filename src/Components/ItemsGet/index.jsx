import { useEffect, useState } from 'react'
import ItemFilter from '../ItemFilter'
import { useParams } from "react-router-dom"


const ItemsGet = (id) => {
 const [articles, setArticles] = useState([])
 const [articlesFilter, setArticlesFilter] = useState([])
 const [error, setError] = useState(false)
//  const { id } = useParams()
 console.log("entra en el ItemsGet")
 useEffect(() => {
     fetch('https://fakestoreapi.com/products')
     .then(res => res.json())
     .then(data => {
         setArticles(data)
         setArticlesFilter(data)
        })
        .catch((e) => {
            console.log(e.message)
            setError(true)
        })
    }, [])
    
    console.log(id)
    useEffect(() => {
        setArticlesFilter(ItemFilter(articles, id))
    }, [id])
    if (error) {
        return error
    }
    console.log(articles)
return articlesFilter
}

export default ItemsGet