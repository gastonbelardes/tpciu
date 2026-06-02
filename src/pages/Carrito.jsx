import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';


function VistaCarrito({ carrito, eliminarDelCarrito, sumarCantidad, restarCantidad }) {
    

    const totalPagar = carrito.reduce((acumulador, item) => {
        return acumulador + (item.precio * item.cantidad);
    }, 0);

    return (
        <Container className="mt-5">
            <h2>Tu Changuito de Compras</h2>

            
            {carrito.length === 0 ? (
                <div className="text-center mt-5">
                    <h4>Tu carrito está vacío</h4>
                </div>
            ) : (
                <>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>
                                        
                                        <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => restarCantidad(item.id)}>-</Button>
                                        {item.cantidad}
                                        <Button variant="outline-secondary" size="sm" className="ms-2" onClick={() => sumarCantidad(item.id)}>+</Button>
                                    </td>
                                    
                                    
                                    <td>${item.precio * item.cantidad}</td>
                                    
                                    <td>
                                        <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(item.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <div className="d-flex justify-content-end mt-4">
                        <h3>Total a pagar: ${totalPagar}</h3>
                    </div>
                </>
            )}
        </Container>
    );
}

export default VistaCarrito;