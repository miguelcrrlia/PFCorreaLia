import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail'
import ItemSearch from '../ItemSearch'
import { ArticlesContext } from '../../context/ArticlesContext'

const ItemDetailContainer = () => {
    const {articles, setArticles} = useContext(ArticlesContext)
    const [detail, setDetail] = useState({})
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        setDetail(ItemSearch(id, articles))
    }, [id])
    console.log(detail)
    return (
        <ItemDetail detail={detail}/> 
    )
}
export default ItemDetailContainer