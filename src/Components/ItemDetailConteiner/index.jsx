import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail"
import ItemsGet from "../ItemsGet"
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()
    let detailSearch = true
    useEffect(() => {
        setDetail(ItemsGet(id, detailSearch))
    }, [id])
    return (
        <ItemDetail detail={detail}/> 
    )
}
export default ItemDetailContainer