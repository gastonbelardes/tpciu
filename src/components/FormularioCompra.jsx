// src/components/FormularioCompra.jsx

import { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

function FormularioCompra({ carrito, vaciarCarrito }) {

    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        entrega: "Retiro en local",
        mensaje: ""
    });

    const [errores, setErrores] = useState({});
    const [compraRealizada, setCompraRealizada] = useState(false);

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value
        });
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!datos.nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio";
        }

        if (!datos.email.trim()) {
            nuevosErrores.email = "El email es obligatorio";
        } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
            nuevosErrores.email = "Email inválido";
        }

        if (!datos.telefono.trim()) {
            nuevosErrores.telefono = "El teléfono es obligatorio";
        }

        if (!datos.direccion.trim()) {
            nuevosErrores.direccion = "La dirección es obligatoria";
        }

        return nuevosErrores;
    };

    const manejarSubmit = (e) => {
        e.preventDefault();

        if (carrito.length === 0) {
            alert("No podés finalizar una compra con el carrito vacío");
            return;
        }

        const erroresEncontrados = validar();

        if (Object.keys(erroresEncontrados).length > 0) {
            setErrores(erroresEncontrados);
            return;
        }

        setErrores({});
        setCompraRealizada(true);
        vaciarCarrito();
    };

    return (
        <Container className="mt-4">

            <h2 className="texto">Finalizar Compra</h2>

            {compraRealizada && (
                <Alert variant="success">
                    ¡Compra realizada correctamente!
                </Alert>
            )}

            <Form onSubmit={manejarSubmit} className="texto">

                <Form.Group className="mb-3" >
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={datos.nombre}
                        onChange={manejarCambio}
                    />
                    <small className="text-danger fw-bold">
                        {errores.nombre}
                    </small>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={datos.email}
                        onChange={manejarCambio}
                    />
                    <small className="text-danger fw-bold">
                        {errores.email}
                    </small>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={datos.telefono}
                        onChange={manejarCambio}
                    />
                    <small className="text-danger fw-bold">
                        {errores.telefono}
                    </small>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        name="direccion"
                        value={datos.direccion}
                        onChange={manejarCambio}
                    />
                    <small className="text-danger fw-bold">
                        {errores.direccion}
                    </small>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Método de entrega</Form.Label>

                    <Form.Select
                        name="entrega"
                        value={datos.entrega}
                        onChange={manejarCambio}
                    >
                        <option>Retiro en local</option>
                        <option>Envío a domicilio</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Mensaje adicional</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="mensaje"
                        value={datos.mensaje}
                        onChange={manejarCambio}
                    />
                    <small className="text-danger fw-bold">
                        {errores.mensaje}
                    </small>
                </Form.Group>

                <Button type="submit">
                    Confirmar Compra
                </Button>

            </Form>

        </Container>
    );
}

export default FormularioCompra;