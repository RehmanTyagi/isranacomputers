import './product-card.styles.scss';
import Button from "../button/button.component";

// cartContext
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
const ProductCard = ({ product }) => {
    const { name, price, imageURL } = product;
    const { addItemToCart } = useContext(CartContext);

    const addItem = () => {
        addItemToCart(product);
    };
    return (
        <div className="Card-container">
            <img className="product-img" src={imageURL} alt={name} />
            <h4 className="product-title">{name}</h4>
            <p className="product-price">Price: {price}</p>
            <Button buttonTitle={"Add to Cart"} onClick={addItem} buttonType={"inverted"} className="add-to-cart_btn" />
            <Button buttonTitle={"View"} buttonType={"inverted"} className="buy-now_btn" />
        </div>
    );
};

export default ProductCard;