
const ItemSearchOption = (articles, input) => {
    let newArticles = []
    let articlesAux = [...articles]
    if (input) {
        if (input.which === 13 || input.keyCode === 13 || input.key === "enter" && input.value !== "") {
            newArticles = articlesAux.filter(producto => producto.title.toLowerCase().includes(input.value.toLowerCase()))
        }
    }
    if ((input.which === 13 || input.keyCode === 13 || input.key === "enter") && input.value !== "") {
        return newArticles
    }
    else {
        return articles
    }
}
export default ItemSearchOption