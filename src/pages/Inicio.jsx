import React from 'react';
import { Carousel, Container, Row, Col , Card,Badge,Image} from 'react-bootstrap';


function Inicio() {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Bienvenidos a Tech Store</h1>
            {/* EL CAROUSEL DE OFERTAS/ITEMS DESTACADOS, SI NO LE GUSTA, LO BORRAMOS */}
            <Carousel className="shadow-lg rounded">
                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="./nvidia5090.jpg" alt="Oferta 1" />
                    <Carousel.Caption>
                        <h3>Nvidia RTX 5090</h3>
                        <p>La GeForce más potente jamás creada.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="./teclado.jpg" alt="Oferta 2" />
                    <Carousel.Caption>
                        <h3>Teclados Mecánicos</h3>
                        <p>La precisión que necesitás para tus partidas.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="./monitor.avif" alt="Oferta 2" />
                    <Carousel.Caption>
                        <h3>Monitores MSI Pro</h3>
                        <p>Calidad visual para largas jornadas de estudio y gaming.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="./envios.jpg" alt="Oferta 3" />
                    <Carousel.Caption>
                        <h3>Envíos a todo el país</h3>
                        <p>Comprá hoy y recibilo en la puerta de tu casa.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Badge bg='secondary'>
                                    <h4>Todos los dias</h4>
                                </Badge>
                            </Row>
                            <Row>
                                <Image src="https://www.adeba.com.ar/wp-content/uploads/2018/01/galicia.png"
                                style={{width:"250px", height:"100px"}}></Image> <p>12 cuotas sin interés</p>
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Badge bg='secondary'>
                                    <h4>Todos los dias</h4>
                                </Badge>
                            </Row>
                            <Row>
                                <Image src="https://www.sirchandler.com.ar/wp-content/uploads/2019/06/logo-bbva-01-700x408.png"
                                style={{width:"250px", height:"100px"}}></Image> <p>12 cuotas sin interés</p>
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Badge bg='secondary'>
                                    <h4>Todos los dias</h4>
                                </Badge>
                            </Row>
                            <Row>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Logo_Banco_Hipotecario.svg/330px-Logo_Banco_Hipotecario.svg.png"
                                style={{width:"250px", height:"100px"}}></Image> <p>12 cuotas sin interés</p>
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Inicio;