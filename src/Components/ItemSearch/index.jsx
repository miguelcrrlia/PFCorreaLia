const ItemSearch = (id, articles) => {
    const articleSearched = articles.find(art => art.id === id)
    return articleSearched
}
export default ItemSearch