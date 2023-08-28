import { useEffect, useState } from 'react'

const ItemsGet = () => {
 const [articles, setArticles] = useState([])
 const [error, setError] = useState(false)
 
 useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            setArticles(data)
        })
        .catch((e) => {
            console.log(e.message)
            setError(true)
        })
}, [])
if (error) {
    return error
}
return articles
}

export default ItemsGet