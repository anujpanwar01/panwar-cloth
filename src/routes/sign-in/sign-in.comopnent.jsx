// import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";
import { signInWithGooglePopup, createUser } from "../../utilis/firebase.utils";

// import "./sign-in.styles.scss";
//when we always call the database that one be async call
const SignIn = function () {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUser(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Login with Google</button>
    </div>
  );
};
export default SignIn;
