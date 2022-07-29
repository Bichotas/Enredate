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

async function getStorageData(userUid, setStore) {
  const uidStoreRef = collection(db, "stores");
  const queryGANG = query(uidStoreRef, where("userUid", "==", userUid));
  const querySnapshot = await getDocs(queryGANG);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  return querySnapshot;
}

async function getUserDoc(userUid) {
  const docRef = doc(db, `users/${userUid}`);
  return await getDoc(docRef);
}
export { db, setUserDoc, getStorageData, getUserDoc };
