// import { createContext, useState } from "react"
// // Creamos el contexto con createConterxt
// export const CartContext = createContext()

// Creamos un  componente provider (para nuestro context)
// export const CartComponentContext = ({children}) => {
//     const [articles, setArticles] = useState([])
//     const [cart, setCart] = useState([])
//     const [totalCart, setTotalCart] = useState(0)
//     const [user, setUser] = useState()

//     return <CartContext.Provider value = { {articles, setArticles, cart, setCart, totalCart, setTotalCart, emptyCart, user, setUser}}>
//         //toma a todos los hijos
//         {children}
//     </CartContext.Provider>
// }

// Luego en el componente que quiera usarlo pongo:
// import CartContext from ''
//const estadoGlobal = useContext(CartContext)
//return (<p>estadoGlobal.articles</p>)

// también lo puedo hacer con desestructuración
//const {articles} = useContext(CartContext)