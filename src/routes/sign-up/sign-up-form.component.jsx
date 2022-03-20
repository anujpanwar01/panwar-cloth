import { useState } from "react";
import {
  //   createAuthUserWithEmailAndPassword,
  auth,
  createUser,
} from "../../utilis/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

import FormInput from "../../components/form-input/Form-Input.component";
import "./sign-up-form.styles.scss";
import CustomBtn from "../../components/custom-btn/Cutom-btn.component";
const SignUpForm = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    //password match
    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      createUser(user, { displayName });
      //   console.log(res);
    } catch (err) {
      console.log(err);
    }
    // console.log(email, password);
    // createAuthUserWithEmailAndPassword(email, password);
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

  const { displayName, email, password, confirmPassword } = state;
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          inputOptions={{
            onChange: inputChangeHandler,
            value: displayName,
            name: "displayName",
            type: "text",
            required: true,
          }}
        />

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

        <FormInput
          label={"Confirm Password"}
          inputOptions={{
            onChange: inputChangeHandler,
            value: confirmPassword,
            name: "confirmPassword",
            type: "password",
            required: true,
          }}
        />
        <CustomBtn type="submit">submit</CustomBtn>
      </form>
    </div>
  );
};
export default SignUpForm;
