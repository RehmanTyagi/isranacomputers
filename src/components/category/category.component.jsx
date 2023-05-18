import "./category.style.scss";
import ProductCard from "../product-card/product-card.component";
const Category = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <h2 className="category-title"><span>{title.toUpperCase()}</span></h2>
            <div className="preview">
                {
                    products.filter((_, index) => index < 4).map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Category;