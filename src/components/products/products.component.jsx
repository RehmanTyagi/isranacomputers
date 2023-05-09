import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../product-card/product-card.component";
import "./products.style.scss";
const Products = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="main-container">
            <h1>Products</h1>
            <div className="products-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default Products;