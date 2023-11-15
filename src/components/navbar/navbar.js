import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import Playwidget from '../playwidget/playwidget';
import { NavLink } from 'react-router-dom';

const Navbarr = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" className="título" >Músik</Navbar.Brand>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

             {/* elementos del nav (agregar align right) */}
              <Nav className="me-auto">
                <Nav.Link href="#home">Random</Nav.Link>
                <Nav.Link href="#link">Pendientes</Nav.Link>
                <NavDropdown title="Categorías" id="basic-nav-dropdown">
                  
                <NavDropdown.Item>< NavLink to={'category/gritar'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Para gritar</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>< NavLink to={'category/cerrar'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Para cerrar los ojos</NavLink></NavDropdown.Item>                 
                 <NavDropdown.Divider />
                 <NavDropdown.Item>< NavLink to={'category/metro'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Para romantizar el metro</NavLink></NavDropdown.Item>
             
                </NavDropdown>
              </Nav>
            
            <Playwidget/>


            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
} 

export default Navbarr