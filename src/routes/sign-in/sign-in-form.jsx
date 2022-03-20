import { useState } from "react";

import {
  //   createAuthUserWithEmailAndPassword,
  signInAuthUserWithEmailAndPassword,
  auth,
  signInWithGooglePopup,
  createUser,
} from "../../utilis/firebase.utils";

import CustomBtn from "../../components/custom-btn/Cutom-btn.component";
import FormInput from "../../components/form-input/Form-Input.component";
import "./sign-in-form.styles.scss";
const SignInForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    //password match

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(user);
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
            type="button"
            className="google-sign-in"
            buttontype="google"
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
