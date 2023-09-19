const ItemFilter = (articles, categoryId) => {
    console.log(categoryId)
    const articlesFilter = categoryId == undefined || categoryId === "all"  ? articles : articles.filter(art => art.categoryId === categoryId)
    // console.log(articlesFilter + " " + "articlesFilter dentro del ItemFilter")
     return articlesFilter
}
export default ItemFilter