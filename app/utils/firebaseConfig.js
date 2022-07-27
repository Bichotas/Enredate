const firebaseConfig = {
  apiKey: "AIzaSyCchMYGa1ksvA5luMWUa90jFpol1Bglubg",
  authDomain: "enredate-efa90.firebaseapp.com",
  projectId: "enredate-efa90",
  storageBucket: "enredate-efa90.appspot.com",
  messagingSenderId: "458146939088",
  appId: "1:458146939088:web:25aa10dd80c919066d9ed5",
};

export default firebaseConfig;


import { initializeApp } from "firebase/app";
let Firebase;

if (!Firebase?.apps?.length) {
  Firebase = initializeApp(firebaseConfig);
}
export {Firebase}