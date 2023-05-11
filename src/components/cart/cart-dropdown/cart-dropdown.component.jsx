import CartCard from "../cart-card/cart-card.component";
import "./cart-dropdown.styles.scss";
import { BsFillXCircleFill } from "react-icons/bs";
import Button from "../../button/button.component";

// cartContext
import { CartContext } from "../../../context/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

// ract router 

// main function
const CartDropDown = (props) => {
    const { setIsCartToggle } = useContext(CartContext);
    const { className } = props;

    const { cartItems } = useContext(CartContext);
    return (

        <div className={`dropdown-container ${className}`}>
            <BsFillXCircleFill onClick={() => setIsCartToggle(false)} className="remove-btn" />
            <div className="cards-container">
                {cartItems.map(item => <CartCard key={item.id} item={item} />)}
            </div>
            <Link to={cartItems.length ? "checkout" : "#"}>
                <Button onClick={() => setIsCartToggle(false)} buttonTitle={"Checkout"} buttonType={"inverted"} />
            </Link>

        </div >
    );

};
export default CartDropDown;