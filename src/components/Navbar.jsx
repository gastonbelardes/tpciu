import React, { useState } from 'react';
import { Container, Nav, Navbar, Badge, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function MiNavbar({ carrito = [] }) {
   
    const [mostrarMenu, setMostrarMenu] = useState(false);

    const handleClose = () => setMostrarMenu(false);
    const handleShow = () => setMostrarMenu(true);
  
    const cantidadTotal = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);

    return (
        <>
            {/* LA BARRA DE NAVEGACIÓN SUPERIOR */}
            <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
                <Container>
                    
                    {/* Menu hamburguesa desplegable */}
                    <Button 
                        variant="outline-light" 
                        className="btn-hover-verde me-3 d-flex align-items-center fw-bold" 
                        onClick={handleShow}
                    >
                        <span className="me-2 fs-5">☰</span> Productos
                    </Button>

                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="/logofinal.png" 
                            height="120" 
                            style={{ marginTop: "-40px", marginBottom: "-40px", marginLeft: "-40px", marginRight: "-40px" }}
                            className="d-inline-block align-top"
                            alt="Logo TechStore"
                        />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="link-custom">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/contacto" className="link-custom">Contacto</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link as={Link} to="/carrito" className="link-custom">
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

            {/* MENU LATERAL (OFFCANVAS) CON LAS CATEGORÍAS */}
            <Offcanvas show={mostrarMenu} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold">Categorías</Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body className="p-0">
                    <ListGroup variant="flush">
                        
                        <ListGroup.Item action as={Link} to="/productos?categoria=monitores" onClick={handleClose}>
                            🖥️ Monitores y Pantallas
                        </ListGroup.Item>
                        
                        <ListGroup.Item action as={Link} to="/productos?categoria=perifericos" onClick={handleClose}>
                            ⌨️ Periféricos
                        </ListGroup.Item>
                        
                        <ListGroup.Item action as={Link} to="/productos?categoria=placas" onClick={handleClose}>
                            🎮 Placas de Video
                        </ListGroup.Item>
                        
                        <ListGroup.Item action as={Link} to="/productos" onClick={handleClose}>
                            🔄 Ver todo el catálogo
                        </ListGroup.Item>

                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default MiNavbar;