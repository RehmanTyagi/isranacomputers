import { Link } from "react-router-dom";
import Poster from "./../../assets/logos/company box mockup.jpg";
import "./sign-in.styles.scss";
import { BsGoogle } from "react-icons/bs";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
  };
  return (
    <div className="sign-in_form_container">
      <div className="form-wrapper">
        <form className="login-form">
          <h2>Welcome Back</h2>
          <p>below you can login to your own account</p>
          <div className="inputs-container">
            <label>Email</label>
            <input type={"email"} placeholder="Enter your email" required />
            <label>Password</label>
            <input type={"password"} placeholder="********" required />
          </div>
          <Link className="forget-password" to={"forget"}>
            Forget Password
          </Link>
          <button className="sign-in_btn">Login</button>
        </form>
        <button onClick={logUserGoogle} className="google-sign_in_btn">
          <BsGoogle />
          Sign-in with Google
        </button>
      </div>
      <img src={Poster} alt="poster" />
    </div>
  );
};

export default SignIn;
