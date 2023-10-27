import { products } from "../data/products.json";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    if (!document.startViewTransition) {
      navigate(`/${id}`);
    } 
      document.startViewTransition(() => {   
        flushSync(() => navigate(`/${id}`))

    })
  };
  return (
   <>
    <section className="hero">
    <div className="hero-content">
        <h1>Descubre nuestros productos exclusivos</h1>
        <p>Calidad, diseño y las mejores ofertas te esperan.</p>
        <a href="#shop" className="shop-now-btn">Comprar ahora</a>
    </div>
</section>

    <div className="container">
      {products.map((product) => (
        <div
          key={product.id}
          className="card"
          onClick={() => handleNavigate(product.id)}
        >
          <img
            src={product.thumbnail}
            style={{ viewTransitionName: `art-${product.id}` }}
          />
          <div className="card-body">
            <span>{product.title}</span>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
   </>
  );
};
