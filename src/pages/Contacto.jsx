import { Container, Form,Col, Row , Card, Button, Image,Badge} from "react-bootstrap"
function Contacto(){
    return(
    <Container>
        <Row className="mb-5" >
            <Col>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>¡Contactanos!</Card.Title>
                        <Card.Text>Nuestro equipo atenderá tus dudas y/o quejas y se pondrá en contacto contigo enseguida.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row >
            <Col md={8}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary">Enviar</Button>
                </Form>
            </Col>
            <Col md={4} className="ps-4 text-center" > 
                <Card>
                    <Card.Body>
                        <Row className="mb-4" >
                            <Badge  pill bg="primary"><h5>Encontranos en nuestras redes sociales</h5></Badge>
                        </Row>
                        <Row className="justify-content-center align-items-center mb-4">
                            <Col xs="auto" >
                                <Image src="/instagram.png" /> 
                            </Col>
                            <Col xs="auto" className="ps-4">
                                <Image src="/x.png"/>
                            </Col>
                            <Col xs="auto" className="ps-4">
                                <Image src="/facebook.png"/>
                            </Col>
                        </Row>
                        <Row>
                           <Badge pill bg="primary"><h5>Visitanos en nustras oficinas</h5></Badge>
                        </Row>
                        <Row>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.036742306358!2d-58.384179723392165!3d-34.60369695749844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1780496298300!5m2!1ses!2sar"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Ubicación"
                            />
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>

    )
}
export default Contacto
