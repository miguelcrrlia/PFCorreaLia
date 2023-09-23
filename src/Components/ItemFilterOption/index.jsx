const ItemFilterOption = (articles, option, input) => {
    console.log("itemfliteroption")
    console.log(articles)
    let articlesAux = [...articles]
    let newArticles = []
    console.log(option)
    const higgerOption = () => {
//Más práctico es => newArticles.sort((a, b) => b.price - a.price)
        let auxIndex
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
    const azOption = () => {
        newArticles = articlesAux.sort(function(a, b) {
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
            // let lengthArticles = articles.length
            // console.log(lengthArticles)
            console.log(articles.length)
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
        
    return newArticles
}
export default ItemFilterOption