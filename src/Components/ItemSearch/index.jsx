const ItemSearch = (id) => {
    let aux = JSON.parse(localStorage.getItem("articles"))
    console.log(aux)
    const articleSearched = aux.find(art => Number(art.id) === Number(id))
    console.log(articleSearched)
    return articleSearched
}
export default ItemSearch