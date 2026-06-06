import { Container, Form, Col, Row, Card, Button, Image, Badge, Alert } from "react-bootstrap";
import { useState } from "react";
import "../App.css";

function Contacto() {
    const [datos, setDatos] = useState({
        email: "",
        asunto: "",
        mensaje: ""
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value
        });
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!datos.email.trim()) {
            nuevosErrores.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
            nuevosErrores.email = "El correo debe ser válido y contener '@'.";
        }

        if (!datos.asunto.trim()) {
            nuevosErrores.asunto = "El asunto no puede estar vacío.";
        }

        if (!datos.mensaje.trim()) {
            nuevosErrores.mensaje = "Por favor, escribí un mensaje antes de enviar.";
        }

        return nuevosErrores;
    };

    const manejarSubmit = (e) => {
        e.preventDefault();

        const erroresEncontrados = validar();

        if (Object.keys(erroresEncontrados).length > 0) {
            setErrores(erroresEncontrados);
            setEnviado(false);
            return;
        }

        setErrores({});
        setEnviado(true);

        setDatos({ email: "", asunto: "", mensaje: "" });
    };

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>
                                <h1>¡Contactanos!</h1>
                            </Card.Title>
                            <Card.Text>
                                Nuestro equipo atenderá tus dudas y/o quejas y se pondrá en contacto contigo enseguida.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={8}>
                    
                    {enviado && (
                        <Alert variant="success" className="mb-4">
                            ¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.
                        </Alert>
                    )}

                    <Form onSubmit={manejarSubmit}>
                        <Form.Group className="mb-3" controlId="contactoEmail">
                            <Form.Label>
                                <Badge bg="secondary" className="badge-custom">
                                    <h5>Correo Electrónico</h5>
                                </Badge>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={datos.email}
                                onChange={manejarCambio}
                            />
                            
                            <small className="text-danger fw-bold">{errores.email}</small>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="contactoAsunto">
                            <Form.Label>
                                <Badge bg="secondary" className="badge-custom">
                                    <h5>Asunto</h5>
                                </Badge>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="asunto"
                                value={datos.asunto}
                                onChange={manejarCambio}
                            />
                            <small className="text-danger fw-bold">{errores.asunto}</small>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="contactoMensaje">
                            <Form.Label>
                                <Badge bg="secondary" className="badge-custom">
                                    <h5>Mensaje</h5>
                                </Badge>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="mensaje"
                                value={datos.mensaje}
                                onChange={manejarCambio}
                            />
                            <small className="text-danger fw-bold">{errores.mensaje}</small>
                        </Form.Group>

                        
                        <Button type="submit" variant="primary" className="btn-primary mt-2">
                            Enviar
                        </Button>
                    </Form>
                </Col>

                <Col md={4} className="ps-4 text-center">
                    <Card>
                        <Card.Body>
                            <Row className="mb-4">
                                <Badge pill bg="primary" className="badge-custom">
                                    <h6>Encontranos en nuestras Redes</h6>
                                </Badge>
                            </Row>
                            <Row className="justify-content-center align-items-center mb-4">
                                <Col xs="auto">
                                    <Image src="/instagram.png" />
                                </Col>
                                <Col xs="auto" className="ps-4">
                                    <Image src="/x.png" />
                                </Col>
                                <Col xs="auto" className="ps-4">
                                    <Image src="/facebook.png" />
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Badge pill bg="primary" className="badge-custom">
                                    <h6>Visitanos en nuestras oficinas</h6>
                                </Badge>
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
    );
}

export default Contacto;