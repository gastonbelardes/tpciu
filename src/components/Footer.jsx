// src/components/Footer.jsx

import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Tech Store</h5>
                        <p>
                            Tu tienda de hardware, periféricos y tecnología.
                        </p>
                    </Col>

                    <Col md={4}>
                        <h5>Navegación</h5>
                        <p>Inicio</p>
                        <p>Productos</p>
                        <p>Contacto</p>
                    </Col>

                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p>Buenos Aires, Argentina</p>
                        <p>contacto@techstore.com</p>
                        <p>+54 11 1234-5678</p>
                    </Col>
                </Row>

                <hr />

                <div className="text-center">
                    © 2026 Tech Store - Construcción de Interfaces de Usuario
                </div>
            </Container>
        </footer>
    );
}

export default Footer;