import { useState } from "react";

import {
  auth,
  signInWithGooglePopup,
  createUser,
} from "../../utilis/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import CustomBtn, {
  BUTTON_TYPE_CLASSES,
} from "../../components/custom-btn/Cutom-btn.component";
import FormInput from "../../components/form-input/Form-Input.component";
import "./sign-in-form.styles.scss";

//through this we get back the value or an object of context

const SignInForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    //password match

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setState(() => {
        return {
          email: "",
          password: "",
        };
      });
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;

        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(err);
      }
    }
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUser(user);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const { email, password } = state;
  console.log(email, password);
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          inputOptions={{
            onChange: inputChangeHandler,
            value: email,
            name: "email",
            type: "email",
            required: true,
          }}
        />

        <FormInput
          label={"Password"}
          inputOptions={{
            onChange: inputChangeHandler,
            value: password,
            name: "password",
            type: "password",
            required: true,
          }}
        />
        <div className="buttons-container">
          <CustomBtn type="submit">Sign In</CustomBtn>
          <CustomBtn
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logGoogleUser}
          >
            Google Sign in
          </CustomBtn>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
