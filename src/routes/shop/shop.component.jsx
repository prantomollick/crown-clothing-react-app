import "./shop.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";
import { useProducts } from "../../hooks/useProducts";

const Shop = () => {
  const products = useProducts();

  return (
    <div className="products-container">
      {products.map(({ id, ...product }) => (
        <ProductCard key={id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;