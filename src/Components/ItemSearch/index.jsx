// import { ArticlesContext } from '../../context/ArticlesContext'
// import { useContext } from 'react'

const ItemSearch = (id, articles) => {
    // const {articles, setArticles} = useContext(ArticlesContext)
    console.log(articles + id + " " + "datos")
    const articleSearched = articles.find(art => art.id === id)
    console.log(articleSearched)
    return articleSearched
}
export default ItemSearch