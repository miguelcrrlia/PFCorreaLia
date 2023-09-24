const ItemFilter = (articles, categoryId) => {
    const articlesFilter = categoryId == undefined || categoryId === "all" ? articles : articles.filter(art => art.categoryId === categoryId)
    return articlesFilter
}
export default ItemFilter