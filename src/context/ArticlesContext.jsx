import { createContext, useState } from "react"
export const ArticlesContext = createContext()

export const ArticlesComponentContext = ({children}) => {
    const [articles, setArticles] = useState([])
    const [cart, setCart] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    return <ArticlesContext.Provider value = { {articles, setArticles, cart, setCart, totalCart, setTotalCart, totalPrice, setTotalPrice}}>
        {children}
    </ArticlesContext.Provider>
}