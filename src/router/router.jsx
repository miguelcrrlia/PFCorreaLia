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

const Router = () => {
    return (
    // <CartComponentContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    // </CartComponentContext>  
    )
}

export default Router