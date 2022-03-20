// import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
// import {
//   // auth,
//   signInWithGooglePopup,
//   createUser,
//   // signInWithGoogleRedirect,
// } from "../../utilis/firebase.utils";

import SignUpForm from "../sign-up/sign-up-form.component";
import SignInForm from "../sign-in/sign-in-form";
import "./authentication.styles.scss";
//when we always call the database that one be async call

const Authentication = function () {
  //   useEffect(async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //       createUser(res.user);
  //     }
  //     console.log(res);
  //   }, []);
  // run at once []

  return (
    <div className="authentication-container">
      {/* <h1>Sign in Page</h1> */}
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={logGoogleUser}>Login with Google</button> */}
    </div>
  );
};
export default Authentication;
