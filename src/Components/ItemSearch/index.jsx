const ItemSearch = (articles, id) => {
    const articleSearched = articles.find(art => art.id === id)
    console.log(articleSearched)
    return (
        <div></div>
    )
}
export default ItemSearch