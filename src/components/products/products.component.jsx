import { Routes, Route } from "react-router-dom";
import CategoryPreview from "../../routes/category-preview/category-preview.component";
import CategoriesPage from "../category-page/category-page.component";
import "./products.style.scss";

const Products = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<CategoriesPage />} />
        </Routes>
    );
};
export default Products;