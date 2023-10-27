import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products.json";

export const Details = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === +id);
  return product ? (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
        style={{ viewTransitionName: `art-${product.id}` }}
      />
      <div className="product-info">
        <h1>{product.title}</h1>
        <span className="brand">{product.brand}</span>
        <p className="description">{product.description}</p>
        <div className="price-section">
          <span className="price">{product.price}$</span>
          <button className="buy-now">Compra Ahora</button>
        </div>
      </div>
    </div>
  ) : (
    <span>Página no encontrada</span>
  );
};
