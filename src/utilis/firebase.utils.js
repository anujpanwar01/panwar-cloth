import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

//set the data into firebase
export const addCollectionAndDocument = async (
  collectionKey,
  objectToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey); //collectionKey is identifier of collections
  // ex :=> users collection, categories collection
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCollectionAndDocRef = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((ele) => ele.data());
};
/*
{
  title:'hats',
  items:[
    {},
    {}
  ]
}
*/
// for this structure we need to map over the data

// const categoryMap = querySnapShot.docs.reduce((acc, ele) => {
//   const { title, items } = ele.data();
//   acc[title.toLowerCase()] = items;
//   return acc;
// }, {});
// return categoryMap;

//additionaldata => we don't get back displayName in signup method
// so for that we pass addional parameter and other information
//and it will override the displayName method in firebase

export const createUser = async function (userAuth, additonalData = {}) {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);

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

export const userObserver = (callback) => onAuthStateChanged(auth, callback);
