import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';


import Header from './components/Header'; 
import Contenido from './components/Contenido';
import VistaCarrito from './pages/Carrito';

function App() {
    
    const [carrito, setCarrito] = useState([]);
    const [mensajeToast, setMensajeToast] = useState("");
    const [mostrarToast, setMostrarToast] = useState(false);

    
    const avisarUsuario = (mensaje) => {
        setMensajeToast(mensaje);
        setMostrarToast(true);
    };

    const agregarAlCarrito = (productoSeleccionado) => {
        const productoExistente = carrito.find(p => p.id === productoSeleccionado.id);
        if (productoExistente) {
            setCarrito(carrito.map(item =>
                item.id === productoSeleccionado.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
            avisarUsuario(`Sumaste otro "${productoSeleccionado.nombre}"`);
        } else {
            setCarrito([...carrito, { ...productoSeleccionado, cantidad: 1 }]);
            avisarUsuario(`¡"${productoSeleccionado.nombre}" agregado!`);
        }
    };

    const eliminarDelCarrito = (idProducto) => {
        setCarrito(carrito.filter(item => item.id !== idProducto));
        avisarUsuario("Producto eliminado del carrito");
    };

    const sumarCantidad = (idProducto) => {
        setCarrito(carrito.map(item => 
            item.id === idProducto 
                ? { ...item, cantidad: item.cantidad + 1 } 
                : item
        ));
    };

    const restarCantidad = (idProducto) => {
        setCarrito(carrito.map(item => 
            item.id === idProducto && item.cantidad > 1
                ? { ...item, cantidad: item.cantidad - 1 } 
                : item
        ));
    };

    return (
        <>
            
            <Header />
            
            
            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1000, position: 'fixed' }}>
                <Toast show={mostrarToast} onClose={() => setMostrarToast(false)} delay={3000} autohide bg="dark">
                    <Toast.Body className="text-white fw-bold">
                        {mensajeToast}
                    </Toast.Body>
                </Toast>
            </ToastContainer>

           
            <Contenido agregarAlCarrito={agregarAlCarrito} />
            
            <VistaCarrito 
                carrito={carrito} 
                eliminarDelCarrito={eliminarDelCarrito}
                sumarCantidad={sumarCantidad}
                restarCantidad={restarCantidad}
            />
        </>
    );
}

export default App;