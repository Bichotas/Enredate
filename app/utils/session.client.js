import * as SecureStore from "expo-secure-store";
import { getSessionToken } from "./auth.server";

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
};
