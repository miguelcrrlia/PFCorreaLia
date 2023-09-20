import '../App.css';
import NavBar from "../Components/NavBar"
import ItemListContainer from "../Components/ItemListContainer"
import ItemDetailContainer from '../Components/ItemDetailConteiner';
import Item from '../Components/Item'
import CartProvider from '../Components/CartProvider'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"; 
// import { CartComponentContext } from '../context/CartContext';
import { ArticlesComponentContext } from '../context/ArticlesContext';

const Router = () => {
    return (
    <ArticlesComponentContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartProvider />} />
        </Routes>
      </BrowserRouter>
    </ArticlesComponentContext>  
    )
}

export default Router