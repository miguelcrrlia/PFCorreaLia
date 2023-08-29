const ItemFilter = (articles, id) => {
    const articlesFilter = id== undefined || id === "all"  ? articles : articles.filter(art => art.category === id)
     return articlesFilter
}
export default ItemFilter