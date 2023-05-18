import "./categories.style.scss";
import { Link } from "react-router-dom";
const CategoryItem = ({ category }) => {
  const { categoryTitle, categoryImg, pageURL } = category;
  return (
    <div className="category-container">
      <div className="category-body_container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${categoryImg})` }}
        />
        <h1>{categoryTitle}</h1>
        <Link to={`/products/${pageURL}`} className="shop-now_btn">Shop Now</Link>
      </div>
    </div>
  );
};

export default CategoryItem;
