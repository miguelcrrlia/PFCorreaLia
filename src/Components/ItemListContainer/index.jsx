import { useEffect } from "react"
import ItemsGet from "../ItemsGet"
import LoadingMessage from "../LoadingMessage"
import Error from "../Error"
import styles from "./styles.module.css"
const ItemListContainer = () => {
    
    const info = ItemsGet()
    console.log(info)
    // console.log(info[0])
    if (info === true) {
        return <Error />
    }
    return (
        <div>
            {info.length > 0 ? (
                    info.map((item) => <p key={item.id}>{item.title}</p>)
                ) : (
                <LoadingMessage />
            )}
        </div>
    )
}
export default ItemListContainer