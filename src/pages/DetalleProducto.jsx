import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";
import { Container, Button } from "react-bootstrap";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();

  const producto = productos.find(
    (p) => p.id === parseInt(id)
  );

  if (!producto) {
    return <h2 className="texto">Producto no encontrado</h2>;
  }

  const [imagenSeleccionada, setImagenSeleccionada] = useState(
    producto.imagenes[0]
  );

  return (
    <Container className="mt-4">

      <Link to="/productos">
        <Button variant="secondary" className="mb-3">
          ← Volver
        </Button>
      </Link>

      <h2 className="productoNombre">{producto.nombre}</h2>

      {/* Imagen principal */}
      <img
        src={imagenSeleccionada}
        alt={producto.nombre}
        style={{
          width: "500px",
          maxWidth: "100%",
          borderRadius: "10px"
        }}
      />

      {/* Miniaturas */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
          marginBottom: "20px"
        }}
      >
        {producto.imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`vista-${index}`}
            onClick={() => setImagenSeleccionada(img)}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer",
              border: "2px solid #ddd",
              borderRadius: "5px"
            }}
          />
        ))}
      </div>

      <h3 className="mt-3 texto">${producto.precio}</h3>

      <p className="texto">{producto.descripcion}</p>

      <p className="texto">
        <strong>Categorías:</strong> {producto.tags.join(", ")}
      </p>

      {producto.stock > 0 ? (
        <p style={{ color: "green" }}>
          Stock: {producto.stock}
        </p>
      ) : (
        <p style={{ color: "red" }}>
          Sin stock
        </p>
      )}

      <Button
        variant="primary"
        disabled={producto.stock === 0}
        onClick={() => agregarAlCarrito(producto)}
      >
        {producto.stock === 0
          ? "No disponible"
          : "Agregar al carrito"}
      </Button>

    </Container>
  );
}

export default DetalleProducto;