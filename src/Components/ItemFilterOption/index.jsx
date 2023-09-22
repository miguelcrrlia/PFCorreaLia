const ItemFilterOption = (articles, option) => {
    console.log("itemfliteroption")
    console.log(articles)
    let articlesAux = [...articles]
    let newArticles = []
        if (option === "mayor") {
            // let lengthArticles = articles.length
            // console.log(lengthArticles)
            let auxIndex
            console.log(articles.length)
            for (let i=0; i < articles.length; i++) {
                let aux = 0
                let indexaux 
                articlesAux.map((item, index) => {
                    if (item.price > aux) {
                        aux = item.price
                        indexaux = index
                        console.log(index)
                        console.log(aux)
                    }
                })
                newArticles.push(articlesAux[indexaux])
                articlesAux.splice(indexaux, 1)
                console.log(articlesAux)
                // indexaux = 0
                console.log("sale del map")
                console.log("i " + i)
            }
        }
    return newArticles
}
export default ItemFilterOption