import {
  BsPhone,
  BsEnvelope,
  BsSearch,
  BsHeart,
} from "react-icons/bs";
import "./header.style.scss";
import LogoIcon from "./../../assets/logos/logo-svg (1).svg";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { signOutCurrentUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart/cart-icon/cart-icon.component";
import AlertPopup from "../alert/alert.component";

const Header = (props) => {
  const { currentUser } = useContext(UserContext);


  return (
    <Fragment>
      <AlertPopup />
      <div className="header-container">
        <div className="top-header">
          <div className="contact-area">
            <span className="medium">
              <BsPhone className="icon" />
              <a href="tel:917210708977">+91 7210708977</a>
            </span>
            <span className="medium">
              <BsEnvelope className="icon" />
              <a href="mailto:irontyagi4@gmail.com">irontyagi4@gmail.com</a>
            </span>
          </div>
          <div className="offer-container">
            10% of on new users <Link to={'auth'}>Shop Now</Link>
          </div>
        </div>
        <div className="main-header">
          <Link to="/home">
            <img className="company-logo" src={LogoIcon} alt="logo" />
          </Link>
          <nav className="navbar">
            <ul className="list">
              <li className="list-item">
                <Link className="link" to="/home">
                  Home
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/products">
                  Products
                </Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/blogs">
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
          <div className="user-area">
            <BsSearch className="icon" />
            {currentUser ?
              (
                <Link to={"#"} className="list-item" onClick={signOutCurrentUser}>Sign Out</Link>
              ) :
              (
                <Link to={'/auth'}>Sign In</Link>
              )
            }
            <BsHeart className="icon" />
            <CartIcon />
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
