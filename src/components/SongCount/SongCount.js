import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// esta funcion se encarga de sumar a la playlist 
const SongCount = ({ cantidad }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(cantidad);
  
    const handleMas = () => {
      setCantidadAgregada(cantidadAgregada + 1);
    };
  
    const handleMenos = () => {
      setCantidadAgregada(cantidadAgregada - 1);
    };
  
    const handleAgregar = () => {
      console.log(`Cantidad agregada: ${cantidadAgregada}`);
    };
  
    return (

      // esta es la parte que vemos en la web
      <Col>
       
       <div className="d-flex justify-content-between">
           <Row>
        <Button variant="light" onClick={handleMas}>+</Button> 
        <p>{cantidadAgregada}</p>
        <Button variant="light"  onClick={handleMenos}>-</Button>
        </Row>
        <Button variant="secondary" onClick={handleAgregar}>Agregar a la playlist</Button>
      </div>
      </Col>
    );
  };
  
  export default SongCount;