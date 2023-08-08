// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"

function App() {
  return (
    <div className='pages__grid'>
      <NavBar />
      <header className="App-header">
      </header>
      <main>
        <ItemListContainer greeting={"Oops, parece que no hay artículos"}/>
      </main>
    </div>
  );
}

export default App;
