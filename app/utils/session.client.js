import AsyncStorageLib from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

{
  /* Token -- THINGS*/
}

async function createUserSession(idToken) {
  const token = await getSessionToken(idToken);
  await SecureStore.setItemAsync("sessionToken", token);
}

async function getUserSession() {
  const token = await SecureStore.getItemAsync("sessionToken");
  return token;
}

async function deleteUserSession() {
  await SecureStore.deleteItemAsync("sessionToken");
}

{
  /* Expo Secure -- UID */
}

async function getUserUid() {
  const uid = await SecureStore.getItemAsync("uid");
  return uid;
}

async function setUserUid(uid) {
  await SecureStore.setItemAsync("uid", uid);
}
async function deleteUserUid() {
  await SecureStore.deleteItemAsync("uid");
}

{
  /* Expo Secure -- TypeAccount */
}
async function getTypeAccount() {
  const uid = await SecureStore.getItemAsync("typeAccount");
  return uid;
}

async function setTypeAccount(typeAccount) {
  await SecureStore.setItemAsync("typeAccount", typeAccount);
}
async function deleteTypeAccount() {
  await SecureStore.deleteItemAsync("typeAccount");
}

{
  /* functionWith all Functiuon */
}

async function setUserPropsStore(uid, typeAccount, store) {
  console.log(typeAccount);
  await setUserUid(uid);
  await setTypeAccount(typeAccount);
  if (typeAccount === "vendedor") {
    await setUserStore(store);
  }
}
async function setUserStore(store) {
  await setStoreData(store);
}
async function getUserPropStore() {
  const uid = await getUserUid();
  const typeAccount = await getTypeAccount();
  return { uid, typeAccount };
}

async function deleteUserPropStore() {
  await deleteUserUid();
  await deleteTypeAccount();
}

async function setStoreData(store) {
  let value = JSON.stringify(store);
  await SecureStore.setItemAsync("store-data", store);
}
{
  /* --- Async Storage --- */
}

const store = async (values) => {
  try {
    await AsyncStorageLib.setItem("store", JSON.stringify(values));
  } catch (error) {}
};
store({
  name: "sex",
});

async function getAsyncStorageData(key, setKey) {
  try {
    const value = await AsyncStorageLib.getItem(key);
    if (value !== null) {
      setKey(value);
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  createUserSession,
  getUserSession,
  deleteUserSession,
  getUserUid,
  setUserUid,
  deleteUserUid,
  getTypeAccount,
  setTypeAccount,
  deleteTypeAccount,
  setUserPropsStore,
  getUserPropStore,
  deleteUserPropStore,
  getAsyncStorageData,
};
