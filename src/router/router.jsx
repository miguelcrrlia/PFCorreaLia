import '../App.css';
import NavBar from "../Components/NavBar"
import ItemListContainer from "../Components/ItemListContainer"
import ItemDetailContainer from '../Components/ItemDetailConteiner';
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
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ArticlesComponentContext>  
    )
}

export default Router