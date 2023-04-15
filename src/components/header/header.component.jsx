import {
  BsPhone,
  BsEnvelope,
  BsPerson,
  BsSearch,
  BsHeart,
  BsCart2,
} from "react-icons/bs";
import "./header.style.scss";
import LogoIcon from "./../../assets/logos/logo-for-web-transparent.png";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
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
            10% of on new users <a href="shop">Shop Now</a>
          </div>
        </div>
        <div className="main-header">
          <Link to="/">
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
            <Link to={"auth"}>
              <BsPerson className="icon" />
            </Link>
            <BsHeart className="icon" />
            <BsCart2 className="icon" />
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
