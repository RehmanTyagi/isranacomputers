import { Link } from "react-router-dom";
import "./sign-in-form.styles.scss";
import Button from "../../components/button/button.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInUserAuthWithEmailPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/formInput/form-input.component";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user-context.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {

  const { setCurrentUser, } = useContext(UserContext)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocFromAuth(user);
    setCurrentUser(user)
  };

  const formhandler = async (event) => {
    event.preventDefault()

    try {
      const user = await signInUserAuthWithEmailPassword(email, password)
      setCurrentUser(user)
      console.log(user)
      resetFormFields()

    }
    catch (error) {
      console.log(error)
      alert(error)
    }

  }

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
