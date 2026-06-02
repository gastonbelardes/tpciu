import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


function Inicio() {
    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Bienvenidos a nuestra Tienda</h1>
            {/* EL CAROUSEL DE OFERTAS/ITEMS DESTACADOS, SI NO LE GUSTA, LO BORRAMOS */}
            <Carousel className="shadow-lg rounded">
                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="https://picsum.photos/1200/400?random=1" alt="Oferta 1" />
                    <Carousel.Caption>
                        <h3>Monitor MSI PRO</h3>
                        <p>Calidad visual para largas jornadas de estudio y gaming.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="https://picsum.photos/1200/400?random=2" alt="Oferta 2" />
                    <Carousel.Caption>
                        <h3>Teclados Mecánicos</h3>
                        <p>La precisión que necesitás para tus partidas.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    {/* Reemplazamos src por la imagen que vayamos a usar */}
                    <img className="d-block w-100" src="https://picsum.photos/1200/400?random=3" alt="Oferta 3" />
                    <Carousel.Caption>
                        <h3>Envíos a todo el país</h3>
                        <p>Comprá hoy y recibilo en la puerta de tu casa.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Inicio;