import { useParams, Link } from "react-router-dom";
import { productos } from "../data/productos";
import { Container, Button } from "react-bootstrap";

function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();

  const producto = productos.find(
    (p) => p.id === parseInt(id)
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <Container className="mt-4">

      <Link to="/">
        <Button variant="secondary" className="mb-3">
          ← Volver
        </Button>
      </Link>

      <h2>{producto.nombre}</h2>

      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        style={{ width: "300px" }}
      />

      <h3 className="mt-3">${producto.precio}</h3>

      <p>{producto.descripcion}</p>

      <p>
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