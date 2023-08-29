import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail'
import ItemSearch from '../ItemSearch'
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setDetail(ItemSearch(id))
    }, [id])
    console.log(detail)
    return (
        <ItemDetail detail={detail}/> 
    )
}
export default ItemDetailContainer