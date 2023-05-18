import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import Category from "../../components/category/category.component";

const CategoryPreview = () => {
    const { categories } = useContext(CategoriesContext);
    return (
        <div className="main-container">
            <div className="all-products">
                <Fragment>
                    {Object.keys(categories).map((title) => {
                        const products = categories[title];
                        return <Category key={title} title={title} products={products} />;
                    })}
                </Fragment>
            </div>
        </div>
    );
};
export default CategoryPreview;