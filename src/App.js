import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarr from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongListContainer from './components/SongListContainer/SongListContainer';
import SongDetailContainer from './components/SongDetailContainer/SongDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* acá va el navbar */}
      <Navbarr/>
      <Routes>

      {/* contenido normal */}
      <Route path='/' element={<SongListContainer/>} />
      <Route path='/category/:categoryId' element={<SongListContainer/>} />
      <Route path='/item/itemId' element={<SongDetailContainer/>} />
      <Route path='*' element={<h1>404: No encontrado</h1>} />
      </Routes>
      </BrowserRouter>

      {/* footer¿ */}


    </div>
  );



}

export default App;
