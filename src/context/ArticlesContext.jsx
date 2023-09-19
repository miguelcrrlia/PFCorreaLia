import { createContext, useState } from "react"
export const ArticlesContext = createContext()

export const ArticlesComponentContext = ({children}) => {
    const [articles, setArticles] = useState([])
    const [cart, setCart] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    const [user, setUser] = useState()

    return <ArticlesContext.Provider value = { {articles, setArticles, cart, setCart, totalCart, setTotalCart}}>
        {children}
    </ArticlesContext.Provider>
}