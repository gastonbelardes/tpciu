import { useState, useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import './App.css';


import MiNavbar from './components/Navbar';
import VistaCarrito from './pages/Carrito';
import Productos from './pages/Productos';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import FormularioCompra from './components/FormularioCompra';
import DetalleProducto from "./pages/DetalleProducto";

function App() {

    
    const [carrito, setCarrito] = useState(() => {
        const data = localStorage.getItem("carrito");
        return data ? JSON.parse(data) : [];
    });
    
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);


    const [mensajeToast, setMensajeToast] = useState("");
    const [mostrarToast, setMostrarToast] = useState(false);

    const avisarUsuario = (mensaje) => {
        setMensajeToast(mensaje);
        setMostrarToast(true);
    };

    const agregarAlCarrito = (productoSeleccionado) => {
        const productoExistente = carrito.find(
            p => p.id === productoSeleccionado.id
        );

        if (productoExistente) {

            if (productoExistente.cantidad >= productoSeleccionado.stock) {

                // Ahora solo agrega si hay stock, sino muestra un toast avisando que no hay mas stock.
                avisarUsuario(`¡Ups! Solo hay ${productoSeleccionado.stock} unidades de "${productoSeleccionado.nombre}" en stock.`);
                return; // Return para no agregar más al carrito en caso de que se alcance el límite de stock
            }

            setCarrito(
                carrito.map(item =>
                    item.id === productoSeleccionado.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            );

            avisarUsuario(
                `Sumaste otro "${productoSeleccionado.nombre}"`
            );

        } else {

            setCarrito([
                ...carrito,
                { ...productoSeleccionado, cantidad: 1 }
            ]);

            avisarUsuario(
                `¡"${productoSeleccionado.nombre}" agregado!`
            );
        }
    };

    const eliminarDelCarrito = (idProducto) => {
        setCarrito(
            carrito.filter(item => item.id !== idProducto)
        );

        avisarUsuario("Producto eliminado del carrito");
    };

    const sumarCantidad = (idProducto) => {
        setCarrito(
            carrito.map(item =>
                item.id === idProducto && item.cantidad < item.stock
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const restarCantidad = (idProducto) => {
        setCarrito(
            carrito.map(item =>
                item.id === idProducto && item.cantidad > 1
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
        );
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };
    
    return (
        <div>
            <MiNavbar carrito={carrito} />

            <ToastContainer
                position="bottom-end"
                className="p-3"
                style={{
                    zIndex: 1000,
                    position: 'fixed'
                }}
            >
                <Toast
                    show={mostrarToast}
                    onClose={() => setMostrarToast(false)}
                    delay={3000}
                    autohide
                    bg="dark"
                >
                    <Toast.Body className="text-white fw-bold">
                        {mensajeToast}
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            <Routes>

                    {/* Inicio */}
                    <Route path="/" element={<Inicio />} />

                    {/* Catálogo */}
                    <Route 
                        path="/productos" 
                        element={<Productos agregarAlCarrito={agregarAlCarrito} />} 
                    />

                    {/* Detalle producto */}
                    <Route 
                        path="/producto/:id" 
                        element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} 
                    />

                    {/* Contacto */}
                    <Route path="/contacto" element={<Contacto />} />

                    {/* Carrito */}
                    <Route 
                        path="/carrito"
                        element={
                        <VistaCarrito
                            carrito={carrito}
                            eliminarDelCarrito={eliminarDelCarrito}
                            sumarCantidad={sumarCantidad}
                            restarCantidad={restarCantidad}
                        />
                        }
                    />

                    {/* Checkout */}
                    <Route 
                        path="/checkout"
                        element={
                        <FormularioCompra
                            carrito={carrito}
                            vaciarCarrito={vaciarCarrito}
                        />
                        }
                    />

            </Routes>


            <Footer />
        </div>
    );
}

export default App;