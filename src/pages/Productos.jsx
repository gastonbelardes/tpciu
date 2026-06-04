import React, { useState } from "react";
import { Badge, Container, Row, Col, Form } from "react-bootstrap";
import { useSearchParams,Link } from 'react-router-dom';
import ProductoCard from "../components/ProductoCard";
import { productos } from "../data/productos";

function Productos({ agregarAlCarrito }) {
    const [busqueda, setBusqueda] = useState("");
    
    const [busquedaParams] = useSearchParams();

    const categoriaSeleccionada = busquedaParams.get("categoria"); 

    const productosFiltrados = productos.filter(producto => {
        
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());

        const coincideCategoria = categoriaSeleccionada 
            ? producto.tags && producto.tags.includes(categoriaSeleccionada) 
            : true;

        
        return coincideBusqueda && coincideCategoria;
    });

    return (
        <Container className="mt-4">
            <div className="text-center mb-4">
                <h2>
                    Catálogo{" "}
                    <Badge bg="primary">
                        {productosFiltrados.length}
                    </Badge>
                </h2>

                <Form.Control
                    type="text"
                    placeholder="Buscar producto..."
                    style={{ width: "300px", margin: "0 auto" }}
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            <Row className="g-5 mb-5">
                {productosFiltrados.map(p => (
                    <Col md={4} key={p.id}>
                        <ProductoCard
                            p={p}
                        />
                    </Col>
                ))}
            </Row>

            {productosFiltrados.length === 0 && (
                <div className="text-center w-100 mb-5">
                    <p>
                        No se encontraron productos con la palabra "{busqueda}".
                    </p>
                </div>
            )}
        </Container>
    );
}

export default Productos;