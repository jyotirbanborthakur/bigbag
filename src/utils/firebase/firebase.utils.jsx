// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR9uByLVf0ZszeNcl1dxnX9ljlG18wRo8",
  authDomain: "crwn-clothing-db-6e873.firebaseapp.com",
  projectId: "crwn-clothing-db-6e873",
  storageBucket: "crwn-clothing-db-6e873.appspot.com",
  messagingSenderId: "3213041817",
  appId: "1:3213041817:web:db1ea4e38e52d0db379808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider =new GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider) 
export const db=getFirestore();
export const createUserDocumentFromAuth = async(userAuth)=>
{
  const userDocRef=doc(db,'users', userAuth.uid);
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  if(!userSnapshot.exists()){
    const {displayName,email}=userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef,{displayName,email,createdAt})
    }catch (error){
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef;
}