import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKeZv3yr1Vr-DHoPjRvREDytvFQ_6BW3s",
  authDomain: "panwar-cloth.firebaseapp.com",
  projectId: "panwar-cloth",
  storageBucket: "panwar-cloth.appspot.com",
  messagingSenderId: "914394677845",
  appId: "1:914394677845:web:835328d3baca7b70cb8adc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

//imp to for use google always use the setCustomProvider
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUser = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      const setUserDetail = await setDoc(userDocRef, {
        name: displayName,
        email,
        createAt,
      });
      console.log(setUserDetail);
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef;
};
