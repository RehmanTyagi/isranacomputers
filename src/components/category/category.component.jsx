import "./category-item.style.scss";
const CategoryItem = ({ category }) => {
  const { categoryTitle, categoryImg } = category;
  return (
    <div className="category-container">
      <div className="category-body_container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${categoryImg})` }}
        />
        <h1>{categoryTitle}</h1>
        <button className="shop-now_btn">Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
