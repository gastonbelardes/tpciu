import React from 'react';
import { Card, Button } from "react-bootstrap";

function ProductoCard({ p, agregarAlCarrito }) {
    return (
        <Card className="h-100 shadow-sm">
            {/* Imagen(falta) */}
            <Card.Img variant="top" src={p.imagen} alt={p.nombre} />
            
            <Card.Body className="d-flex flex-column">
                <Card.Title className="titulo">{p.nombre}</Card.Title>
                
                {/* Descripción cortita */}
                <Card.Text className="text-muted mb-4">{p.descripcion}</Card.Text>
                
                {/* Precio bien visible */}
                <h4 className="mt-auto mb-3">${p.precio}</h4>
                
                {/* Validación de stock para el botón */}
                <Button 
                    variant={p.stock > 0 ? "primary" : "secondary"} 
                    onClick={() => agregarAlCarrito(p)}
                    disabled={p.stock === 0} // Si no hay stock, no se puede hacer click
                    className="w-100"
                >
                    {p.stock > 0 ? "Agregar al carrito" : "Sin stock"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductoCard;