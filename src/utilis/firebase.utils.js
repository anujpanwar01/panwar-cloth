import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
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
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

//additionaldata => we don't get back displayName in signup method
// so for that we pass addional parameter and other information
//and it will override the displayName method in firebase

export const createUser = async function (userAuth, additonalData) {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      const setUserDetail = await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additonalData,
      });
      console.log(setUserDetail);
    } catch (err) {
      console.log(err.message);
    }
  }
  return userDocRef;
};

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;
//   const user = await createAuthUserWithEmailAndPassword(auth, email, password);
//   return user;
// };
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
