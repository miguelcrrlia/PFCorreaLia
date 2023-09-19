// import { useEffect, useState } from 'react'
// import ItemFilter from '../ItemFilter'
// import { useParams } from 'react-router-dom'
// import { db } from '../../firebase/client'
// import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

// const ItemsGetFirebase = () => {
//    console.log("entra en el ItemGetFireBase")
// //  const [articles, setArticles] = useState([])
// //  const [articlesFilter, setArticlesFilter] = useState([])
// //  const [error, setError] = useState(false)
// //  const productRef = doc(db, "articles", "9BH3l4yT4vYXvzu85S1w")

// //Esto habría que hacerlo en el context
//  const productRef = collection(db, "articles")
//  //traigo todos los documentos
//  const getArticles = async () => {
//     const data = await getDocs(productRef)
//     const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
//     console.log(dataFiltrada)
//     return dataFiltrada
//  }

// //  const getArticle = () => {
// //     getDoc(productRef).then((snapshot => {
// //         if(snapshot.exists()){
// //             console.log(snapshot)
// //             console.log({id: snapshot.id, ...snapshot.data()})
// //         }
// //     }))
// //  }
//  //para usar filtros
//  const productsRefFiltetr = query (
//     collection(db, "articles"),
//     where("price", ">", 200), 
//     //el limit limita la respuesta, la cantidad que devuelve
//     limit(1)
//  )
// //  getArticle()
//  getArticles()
// }
// export default ItemsGetFirebase