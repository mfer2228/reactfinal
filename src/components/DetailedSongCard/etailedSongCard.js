import { useState } from "react";
import {  Card, CardBody, CardFooter, CardTitle} from "react-bootstrap";
import SongCount from "../SongCount/SongCount";
import { Link } from "react-router-dom";

// este componente se encarga de la info más detallada de las canciones 


const DetailedSongCard = ({ id, nombre, artista, album, frase, categoria, año, duracion}) => {
   
  const [quantityAdded, setQuantityAdded] = useState(0)
  
  const handleOnAdd = (cantidad) => {
    setQuantityAdded(cantidad)
  }
  
  return (
      <Card>
        <CardBody>
          <CardTitle>{nombre}</CardTitle>
          <p><b>Artista: </b> {artista}</p>
          <p><b>Álbum: </b> {album}</p>
          <p><b>Año: </b> {año}</p>
          <p><b>Frase: </b> {frase}</p>
          <p><b>Duración: </b> {duracion}</p>
          <p><b>Categoría: </b> {categoria}</p>
        </CardBody>
        <CardFooter>

     {
         quantityAdded > 0 ? (
           <Link to='/playlist' className='Option'> Agregar a la playlist</Link>
          ) : (
          <SongCount initial={1} onAdd={ handleOnAdd } />
        )
      }
        
          </CardFooter>

      </Card>
    );
  };

  export default DetailedSongCard

