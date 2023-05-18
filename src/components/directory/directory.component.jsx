import CategoryItem from "../categories/categories.component";
import "./directory.style.scss";
const CategoriesDirectory = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default CategoriesDirectory;
