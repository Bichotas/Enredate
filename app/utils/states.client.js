import * as SecureStore from "expo-secure-store";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

function setSecureStates(setUid, setTypeAccount) {
  SecureStore.getItemAsync("uid").then((uid) => {
    setUid(uid);
  });

  SecureStore.getItemAsync("typeAccount").then((typeAccount) => {
    setTypeAccount(typeAccount);
  });
}

async function setStoreState(setStore) {
  await AsyncStorageLib.getItem("store_data").then((store) => {
    setStore(store);
  });
}
export { setSecureStates, setStoreState };
