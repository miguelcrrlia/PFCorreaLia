import '../App.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../Components/NavBar"
import ItemListContainer from "../Components/ItemListContainer"
import ItemDetailContainer from '../Components/ItemDetailConteiner';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom"; 

const Router = () => {
    return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
    )
}

export default Router