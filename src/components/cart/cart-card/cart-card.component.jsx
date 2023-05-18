
import "./cart-card.styles.scss";
import { BsFillXCircleFill, BsFileMinus, BsFilePlus } from "react-icons/bs";
// cart context
import { CartContext } from "../../../context/cart.context";
import { useContext } from "react";
import useAlert from "../../../hooks/alert-custom-hook/alert.hook";
const CartCard = (props) => {
    const { removeItemFromCart, quantityMinusHandler, quantityPlusHandler } = useContext(CartContext);
    const { name, imageURL, price, quantity, } = props.item;
    const { setAlert } = useAlert();

    const removeCartItemHandler = () => {
        removeItemFromCart(props.item);
        setAlert(`${name + " "}Removed From Cart`, 'info');

    };
    const cartQuantityHandlerMinus = () => {
        quantityMinusHandler(props.item);
    };
    const cartQuantityHandlerPlus = () => {
        quantityPlusHandler(props.item);
    };
    return (
        <div className={`card-container ${props.className}`}>
            <BsFillXCircleFill onClick={removeCartItemHandler} className="remove-item_btn" />
            <img className="product-img" src={imageURL} alt="s" />
            <p className="product-title">{name}</p>
            <p className="product-price">Price: {price}</p>
            <p className="product-quantity">
                <span>Quantity:</span>
                <BsFileMinus onClick={cartQuantityHandlerMinus} className="quantity-minus_btn" />
                {quantity}
                <BsFilePlus onClick={cartQuantityHandlerPlus} className="quantity-plus_btn" />
            </p>
        </div>
    );
};

export default CartCard;