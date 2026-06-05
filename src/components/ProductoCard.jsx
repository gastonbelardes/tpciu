import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductoCard.css"; 

function ProductoCard({ p, agregarAlCarrito }) {
    return (
        <Card className="product-card h-100 shadow-sm">
            {/* Imagen(falta) */}
            <Card.Img
                className="product-img"
                variant="top"
                src={p.imagenes?.[0] || p.imagen}
                alt={p.nombre}
            />
            
            <Card.Body className="d-flex flex-column">
                <Card.Title className="titulo">{p.nombre}</Card.Title>
                
                {/* Descripción cortita */}
                <Card.Text className="text-muted mb-4">{p.descripcion}</Card.Text>
                
                {/* Precio bien visible */}
                <h4 className="mt-auto mb-3">${p.precio}</h4>
                
                {/* Validación de stock para el botón */}
              
                <Link to={`/producto/${p.id}`}>
                        <Button 
                            variant={p.stock > 0 ? "primary" : "secondary"} 
                            disabled={p.stock === 0}
                            className="w-100"
                        >
                            {p.stock > 0 ? "Ver Detalle" : "Sin stock"}
                        </Button>
                    </Link>

            </Card.Body>
        </Card>
    );
}

export default ProductoCard;