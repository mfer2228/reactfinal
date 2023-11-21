import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarr from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongListContainer from './components/SongListContainer/SongListContainer';
import SongDetailContainer from './components/SongDetailContainer/SongDetailContainer';
import { PlayProvider } from './context/PlayContext';
import Playlist from './components/Playlist/playlist';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PlayProvider>
      {/* acá va el navbar */}
      <Navbarr/>
      <Routes>
      {/* contenido normal */}
      <Route path='/' element={<SongListContainer epale={'Estas son nuestras canciones'} />} />
      <Route path='/category/:categoryId' element={<SongListContainer/>} />
      <Route path='/item/itemId' element={<SongDetailContainer/>} />
      <Route path='/playlist' element={< Playlist/> } /> 
      <Route path='*' element={<h1>404: No encontrado</h1>} />
      </Routes>
      </PlayProvider>
      </BrowserRouter>
    </div>
  );



}

export default App;
