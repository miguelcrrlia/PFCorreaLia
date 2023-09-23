const ItemSearchOption = (articles, input) => {
    let newArticles = [...articles]
    let articlesAux = [...articles]
    console.log(input)
    if (input) {

        if (input.which === 13 || input.keyCode === 13 || input.key === "enter") {
            // input.preventDefault()
            console.log("entro")
            newArticles =  articlesAux.filter(producto => producto.title.toLowerCase().includes(input.value.toLowerCase()))
            console.log(newArticles)
          }
    }
          return newArticles
}
export default ItemSearchOption