import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'; // 

import Header from './components/Header'; 
import Contenido from './components/Contenido';
import VistaCarrito from './pages/Carrito';

// DESCOMENTEN A MEDIDA QUE VAYAN CREANDO LAS PÁGINAS
// import Inicio from './pages/Inicio';
// import Productos from './pages/Productos';
// import DetalleProducto from './pages/DetalleProducto';
// import FormularioCompra from './components/FormularioCompra';


//ACÁ VA LA LÓGICA PRINCIPAL DE LA PÁGINA, ACA SE MANEJA EL ESTADO DEL CARRITO, LAS FUNCIONES PARA AGREGAR, ELIMINAR, SUMAR Y RESTAR PRODUCTOS, Y LA LÓGICA DEL TOAST DE AVISO AL USUARIO. 
// TAMBIÉN ACÁ SE DEFINEN LAS RUTAS DE LA PÁGINA.

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
            // NUEVO: Verificamos si ya alcanzó el límite de stock
            if (productoExistente.cantidad >= productoSeleccionado.stock) {
                avisarUsuario(`¡Ups! Solo hay ${productoSeleccionado.stock} unidades de "${productoSeleccionado.nombre}" en stock.`);
                return; // Return para no agregar más al carrito en caso de que se alcance el límite de stock
            }

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
            // NUEVO: Solo suma si hay stock, sino muestra un toast avisando que no hay mas stock.
            item.id === idProducto && item.cantidad < item.stock
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

    
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <>
            {/* 1. Header recibe el carrito para actualizar el numerito */}
            <Header carrito={carrito} />
            
            {/* 2. Toast fachero que avisa al usuario cuando agregan o eliminan productos del carrito, desaparece automáticamente */}
            <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1000, position: 'fixed' }}>
                <Toast show={mostrarToast} onClose={() => setMostrarToast(false)} delay={3000} autohide bg="dark">
                    <Toast.Body className="text-white fw-bold">
                        {mensajeToast}
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            {/* 3. SPA(Single Page Application) como pide el enunciado */}
            <Routes>
                {/* RUTA INICIO (ANDA PERO FALTA IMPLEMENTAR VISUALES)*/}
                <Route path="/" element={
                    <div className="text-center mt-5">
                        <h1>Bienvenido a nuestra Tienda</h1>
                        <p>Elegí la opción "Catálogo" en el menú para ver nuestros productos.</p>
                    </div>
                } />

                {/* RUTA DEL CATÁLOGO(FUNCIONANDO) */}
                <Route path="/productos" element={<Contenido agregarAlCarrito={agregarAlCarrito} />} />
                
                {/* RUTA DEL CARRITO(FUNCIONANDO) */}
                <Route path="/carrito" element={
                    <VistaCarrito 
                        carrito={carrito} 
                        eliminarDelCarrito={eliminarDelCarrito}
                        sumarCantidad={sumarCantidad}
                        restarCantidad={restarCantidad}
                    />
                } />

                {/* ============================================================== */}
                {/* RUTAS QUE FALTAN*/}
                {/* ============================================================== */}
                
                {/* <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} /> */}
                {/* <Route path="/checkout" element={<FormularioCompra carrito={carrito} vaciarCarrito={vaciarCarrito} />} /> */}
            </Routes>
        </>
    );
}

export default App;