import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge'; 
import { Link } from 'react-router-dom'; 

function MiNavbar({ carrito = [] }) {
  
  const cantidadTotal = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        
        <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="me-auto">
            {/* Enlace a Inicio */}
            {/* reemplazamos href por Link y to para que no recargue la página al hacer click */}
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            
            {/* Enlace al catálogo */}
            <Nav.Link as={Link} to="/productos">Catálogo</Nav.Link>

            {/* Enlace al contacto */}
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>

          {/* Enlace al carrito con el numerito de cantidad total */}
          <Nav>
            <Nav.Link as={Link} to="/carrito">
              🛒 Mi Changuito
              {cantidadTotal > 0 && (
                <Badge bg="danger" className="ms-2">
                  {cantidadTotal}
                </Badge>
              )}
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MiNavbar;