import { BsCart4 } from "react-icons/bs";
import "./cart-icon.styles.scss";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import BackDrop from "../../back-drop/back-drop.component";
import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
const CartIcon = (props) => {
    const { isCartToggle, setIsCartToggle, cartItems } = useContext(CartContext);
    const dropDownToggle = () => {
        setIsCartToggle(false);
    };
    return (
        <div className="icon-container">
            <BsCart4 onClick={() => setIsCartToggle(true)} className="cart-icon" />
            <span className="item-counter">{cartItems.length}</span>
            <CartDropDown className={isCartToggle ? "active" : ""} />
            <BackDrop onToggle={dropDownToggle} className={isCartToggle ? "active" : ""} />
        </div>
    );
};
export default CartIcon;