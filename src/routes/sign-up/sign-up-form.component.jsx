import "./sign-up-form.styels.scss";
import { useState } from "react";
import { createUserAuthWithEmailPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/formInput/form-input.component";
import Button from "../../components/button/button.component";
import SignInForm from "../sign-in/sign-in-form.component";
import useAlert from "../../hooks/alert-custom-hook/alert.hook";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  passwordRepeat: "",
};
const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, passwordRepeat } = formFields;
  const { setAlert } = useAlert();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // const signUpWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   createUserDocFromAuth(user);
  //   console.log(user);
  // };

  const formhandler = async (event) => {
    event.preventDefault();

    if (password !== passwordRepeat) {
      setAlert('password does not match!', 'error');
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailPassword(email, password);
      createUserDocFromAuth(user, { displayName });
      resetFormFields();
      setAlert(`${displayName + " "} Your Account Created Successfully!`, 'success');
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
    <div className="form_container">
      <SignInForm />
      <div className="user-creation_container">
        <form className="form" onSubmit={formhandler}>
          <h2 className="form-title">Don't have an account?</h2>
          <p>create one for you!</p>
          <FormInput
            label='Display Name'
            inputoptions={{
              required: true,
              type: "text",
              placeholder: "Your Name",
              name: "displayName",
              value: displayName,
              onChange: inputChangeHandler
            }} />
          <FormInput
            label='Email'
            inputoptions={{
              required: true,
              type: "email",
              placeholder: "Your Email",
              name: "email",
              value: email,
              onChange: inputChangeHandler
            }} />
          <FormInput
            label='password'
            inputoptions={{
              required: true,
              type: "password",
              placeholder: "Your Password",
              name: "password",
              value: password,
              onChange: inputChangeHandler
            }} />
          <FormInput
            label='Repeat Password'
            inputoptions={{
              required: true,
              type: "password",
              placeholder: "Repeat your password",
              name: "passwordRepeat",
              value: passwordRepeat,
              onChange: inputChangeHandler
            }} />
          <Button buttonTitle='SignUp' type='submit' buttonType='inverted' />
          {//          <Button type="button" onClick={signUpWithGoogle} buttonTitle='SignUp With Google' buttonType='google' />
          }        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
