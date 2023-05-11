import "./checkout.styles.scss";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CartCard from "../cart/cart-card/cart-card.component";
import visaIcon from "../../assets/external-icons/001-visa.png";
import cashIcon from "../../assets/external-icons/002-cash-payment.png";
import creditCardIcon from "../../assets/external-icons/003-credit-card.png";

// custom-btn
import Button from "../button/button.component";
import { Link } from "react-router-dom";
const CheckOut = () => {
    const { cartItems } = useContext(CartContext);

    const subTotal = cartItems.reduce(function (acc, obj) { return acc + obj.price * obj.quantity; }, 0);
    const totalGST = subTotal * 18 / 100;
    const deliveryCharge = subTotal ? 120 : 0;
    const grandTotal = Math.ceil(subTotal + totalGST + deliveryCharge);

    return (
        <div className="checkout-container">
            <div className="products-container">
                {cartItems.map((item) => <CartCard className="checkout-item" item={item} />)}
            </div>
            <div className="sub-total_container">
                <div className="payment-details">
                    <div className="sub-total">
                        <div className="sub">
                            <span>SubTotal</span>
                            <span>{subTotal}₹</span>
                        </div>
                        <hr />
                        <div className="delivery">
                            <span>Estimated Shipping</span>
                            <span>{deliveryCharge}₹</span>
                        </div>
                        <div className="delivery gst">
                            <span>GST 18%</span>
                            <span>{totalGST}₹</span>
                        </div>
                        <hr />
                        <div className="total">
                            <span>Grand Total</span>
                            <span>{grandTotal}₹</span>
                        </div>
                        <p>Additonal fees and taxes may apply.</p>
                    </div>
                </div>
                <div className="Payment-methods">
                    <img className="method" src={visaIcon} alt="img" />
                    <img className="method" src={cashIcon} alt="img" />
                    <img className="method" src={creditCardIcon} alt="img" />
                </div>
                <Link className="proceed-btn" to={"payments"}>
                    <Button buttonType={"inverted"} buttonTitle={"Proceed"} />
                </Link>
            </div>
        </div>
    );
};

export default CheckOut;