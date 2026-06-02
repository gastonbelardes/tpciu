import React from 'react';
import { Card, Button } from "react-bootstrap";

function ProductoCard({ p, agregarAlCarrito }) {
    return (
        <Card className="h-100">
            <Card.Body>
                
                <Card.Title className="titulo">{p.nombre}</Card.Title>
                <Card.Text>${p.precio}</Card.Text>
                
                
                <Button variant="primary" onClick={() => agregarAlCarrito(p)}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductoCard;