import { Container, Form,Col, Row , Card, Button, Image} from "react-bootstrap"
function Contacto(){
    return(
    <Container>
        <Row >
            <Col>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>¡Contactanos!</Card.Title>
                        <Card.Text>Nuestro equipo atenderá tus dudas y/o quejas y se pondrá en contacto contigo enseguida.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
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
            <Col md={4}> 
                <Image src="/instagram.png" rounded></Image> <Image src="/x.png"></Image>
            </Col>
        </Row>
        </Container>

    )
}
export default Contacto
