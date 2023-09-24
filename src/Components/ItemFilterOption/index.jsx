const ItemFilterOption = (articles, option, input) => {
    let articlesAux = [...articles]
    let newArticles = []
    const higgerOption = () => {
        //Más práctico es => newArticles.sort((a, b) => b.price - a.price)
        let auxIndex
        for (let i = 0; i < articles.length; i++) {
            let aux = 0
            let indexaux
            articlesAux.map((item, index) => {
                if (item.price > aux) {
                    aux = item.price
                    indexaux = index
                }
            })
            newArticles.push(articlesAux[indexaux])
            articlesAux.splice(indexaux, 1)
        }
    }
    const azOption = () => {
        newArticles = articlesAux.sort(function (a, b) {
            let x = a.title.toLowerCase()
            let y = b.title.toLowerCase()
            if (x < y) {
                return -1
            }
            else if (x > y) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    if (option === "mayor") {
        higgerOption()
    }
    else if (option === "menor") {
        higgerOption()
        newArticles.reverse()
    }
    else if (option === "a-z") {
        azOption()

    }
    else if (option === "z-a") {
        azOption()
        newArticles.reverse()

    }
    else if (option === "") {
        newArticles = articles
    }

    return newArticles
}
export default ItemFilterOption