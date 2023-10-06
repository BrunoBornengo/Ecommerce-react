import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
        </Routes>
        </BrowserRouter>

        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/> 
      </div>

    
  );
}

export default App;
