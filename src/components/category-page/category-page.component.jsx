import "./category-page.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../product-card/product-card.component";
const CategoriesPage = () => {
    const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categories[category]);
    }, [categories, category]);
    return (
        <div className="products-container">
            {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    );
};

export default CategoriesPage;