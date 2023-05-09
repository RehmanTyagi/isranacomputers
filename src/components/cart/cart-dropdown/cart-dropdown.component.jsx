import CartCard from "../cart-card/cart-card.component";
import "./cart-dropdown.styles.scss";
import { BsFillXCircleFill } from "react-icons/bs";
import Button from "../../button/button.component";

// cartContext
import { CartContext } from "../../../context/cart.context";
import { useContext } from "react";

// main function
const CartDropDown = (props) => {
    const { setIsCartToggle } = useContext(CartContext);
    const { className } = props;

    const { cartItems } = useContext(CartContext);
    return (

        <div className={`dropdown-container ${className}`}>
            <BsFillXCircleFill onClick={() => setIsCartToggle(true)} className="remove-btn" />
            <div className="cards-container">
                {cartItems.map(item => <CartCard key={item.id} item={item} />)}
            </div>
            <Button buttonTitle={"CheckOut"} buttonType={"inverted"} />
        </div>
    );

};
export default CartDropDown;