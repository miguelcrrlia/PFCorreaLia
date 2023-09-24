import { db } from '../../firebase/client'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail'
import Error from '../Error'
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    const productRefFilter = doc(db, "articles", id)
    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await getDoc(productRefFilter)
                const dataFiltrada = { ...data.data(), id: data.id }
                setDetail(dataFiltrada)
            } catch (error) {
                <Error />
                console.error("Error", error)
            }
        }
        getArticles()
    }, [id])
    return (
        <ItemDetail detail={detail} />
    )
}
export default ItemDetailContainer