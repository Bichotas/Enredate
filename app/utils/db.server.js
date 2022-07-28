// En este archivo se van a poner las funciones para hacer las modificaciones en la base de datos de firebase
import { Firebases } from "./firebaseConfig";
import {
  getFirestore,
  doc,
  collection,
  setDoc,
  query,
  getDoc,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(Firebases);

// Funcion para crear un documento en la colección usuario
async function setUserDoc(data, uid) {
  const docRef = doc(db, `users/${uid}`);
  return await setDoc(docRef, {
    ...data,
    uid: uid,
  });
}

async function getStorageData(userUid) {
  const uidStoreRef = collection(db, "stores");
  const queryGANG = query(uidStoreRef, where("uid", "==", userUid));
  const snapshot = await getDocs(queryGANG);
  return snapshot;
}
export { db, setUserDoc, getStorageData };
