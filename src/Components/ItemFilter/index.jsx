import { useEffect } from "react"
// import { useParams } from "react-router-dom"

const ItemFilter = (articles, id) => {
    // const { id } = useParams()
    console.log({id})
    console.log(articles)
    const articlesFilter = id== undefined || id === "all"  ? articles : articles.filter(art => art.category === id)
        console.log(articlesFilter)
     return articlesFilter
}
export default ItemFilter