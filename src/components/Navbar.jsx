import React, { useState } from 'react';
// Agrupamos todos los imports de Bootstrap en una sola línea
import { Container, Nav, Navbar, Badge, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function MiNavbar({ carrito = [] }) {
    // 1. Estado para controlar si el menú lateral (Offcanvas) está abierto o cerrado
    const [mostrarMenu, setMostrarMenu] = useState(false);

    // 2. Funciones para abrir y cerrar el menú
    const handleClose = () => setMostrarMenu(false);
    const handleShow = () => setMostrarMenu(true);
  
    // Cálculo del carrito que ya tenían hecho (¡impecable el reduce, por cierto!)
    const cantidadTotal = carrito.reduce((acumulador, item) => acumulador + item.cantidad, 0);

    return (
        <>
            {/* LA BARRA DE NAVEGACIÓN SUPERIOR */}
            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container>
                    
                    {/* Menu hamburguesa desplegable */}
                    <Button 
                        variant="outline-dark" 
                        className="me-3 d-flex align-items-center fw-bold" 
                        onClick={handleShow}
                    >
                        <span className="me-2 fs-5">☰</span> Productos
                    </Button>

                    <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        </Nav>

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

            {/* MENU LATERAL (OFFCANVAS) CON LAS CATEGORÍAS */}
            <Offcanvas show={mostrarMenu} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold">Categorías</Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body className="p-0">
                    <ListGroup variant="flush">
                        
                        <ListGroup.Item action as={Link} to="/productos?categoria=Monitores" onClick={handleClose}>
                            🖥️ Monitores y Pantallas
                        </ListGroup.Item>
                        
                        <ListGroup.Item action as={Link} to="/productos?categoria=Perifericos" onClick={handleClose}>
                            ⌨️ Periféricos
                        </ListGroup.Item>
                        
                        <ListGroup.Item action as={Link} to="/productos?categoria=Placas" onClick={handleClose}>
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