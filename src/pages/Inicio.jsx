import { Carousel, Container, Row, Col , Card,Badge,Image} from 'react-bootstrap';
import "../App.css"


function Inicio() {
    return (
        <div>

        <Container className="mt-5">
            <h1 className="text-center mb-4 bienvenida">¡Bienvenidos a Tech Store!</h1>
            {/* EL CAROUSEL DE OFERTAS/ITEMS DESTACADOS, SI NO LE GUSTA, LO BORRAMOS */}
            <Carousel className="shadow-lg rounded mt-4" >
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
            <Row className='mt-4'>
                <Col md={4}>
                    <Card className='promoBancaria'>
                        <Card.Body>
                            <Row>
                                <Badge bg='secondary' className="badge-custom">
                                    <h4>Todos los dias</h4>
                                </Badge>
                            </Row>
                            <Row className='d-flex justify-content-center'>
                                <Image src="https://www.adeba.com.ar/wp-content/uploads/2018/01/galicia.png"
                                style={{width:"350px", height:"200px"}}></Image>
                                <Badge pill bg='dark' className='d-flex justify-content-center align-items-center w-100 p-3'><p className='promo'>12 cuotas sin interés</p></Badge>
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='promoBancaria'>
                        <Card.Body>
                            <Row>
                                <Badge bg='secondary' className="badge-custom">
                                    <h4>Jueves</h4>
                                </Badge>
                            </Row>
                            <Row className='d-flex justify-content-center'>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_Banco_Credicoop.svg/3840px-Logo_Banco_Credicoop.svg.png"
                                style={{width:"350px", height:"200px"}}></Image> 
                                <Badge pill bg='dark' className='d-flex justify-content-center align-items-center w-100 p-3'><p className='promo'>12 cuotas sin interés</p></Badge>
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} >
                    <Card className='promoBancaria'>
                        <Card.Body>
                            <Row>
                                <Badge bg='secondary' className="badge-custom">
                                    <h4>Sábados y Domingos</h4>
                                </Badge>
                            </Row>
                            <Row className='d-flex justify-content-center'>
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Mercado_Pago.svg/3840px-Mercado_Pago.svg.png"
                                style={{width:"350px", height:"200px"}}></Image>
                                <Badge pill bg='dark' className='d-flex justify-content-center align-items-center w-100 p-3'><p className='promo'>10% de descuento</p></Badge> 
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Inicio;