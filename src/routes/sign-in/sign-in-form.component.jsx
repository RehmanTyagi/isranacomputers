import { Link } from "react-router-dom";
import "./sign-in-form.styles.scss";
import Button from "../../components/button/button.component";
import {
  signInWithGooglePopup,
  signInUserAuthWithEmailPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/formInput/form-input.component";
import { useState } from "react";
import useAlert from "../../hooks/alert-custom-hook/alert.hook";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setAlert } = useAlert();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);

  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      setAlert('user is logged in', 'success');
      window.location.href = "products";

    } catch (error) {
      setAlert(error.code, 'error');
    }
  };

  const formhandler = async (event) => {
    event.preventDefault();
    try {
      await signInUserAuthWithEmailPassword(email, password);
      resetFormFields();
      setAlert("User logged in!", 'success');
      window.location.href = "products";

    }
    catch (error) {
      setAlert(error.code, 'error');
    }

  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <div className="sign-in_form_container">
      <div className="form-wrapper">
        <h2>Login</h2>
        <form onSubmit={formhandler} className="login-form">
          <div className="inputs-container">
            <FormInput label='Email' inputoptions={{ required: true, type: 'email', placeholder: "Your Email", name: 'email', value: email, onChange: inputChangeHandler }} />
            <FormInput label='password' inputoptions={{ required: true, type: 'password', placeholder: "Your Password", name: 'password', value: password, onChange: inputChangeHandler }} />
          </div>
          <Link className="forget-password" to={"password_recovery"}>
            Forget Password
          </Link>
          <Button buttonTitle='Login' buttonType='inverted' />
          <p className="button-seperation_element">Or</p>
          <Button type="button" onClick={signInWithGoogle} buttonTitle='Login With Google' buttonType='google' />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
