import * as SecureStore from "expo-secure-store";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

function setSecureStates(setUid, setTypeAccount, setStore) {
  SecureStore.getItemAsync("uid").then((uid) => {
    setUid(uid);
  });

  SecureStore.getItemAsync("typeAccount").then((typeAccount) => {
    setTypeAccount(typeAccount);
  });

  SecureStore.getItemAsync("store-data").then((store) => {
    console.log(typeof store);
    console.log(typeof JSON.parse(store));
    setStore(JSON.parse(store));
  });
}

async function setStoreState(setStore) {
  await AsyncStorageLib.getItem("store_data").then((store) => {
    setStore(store);
  });
}
export { setSecureStates, setStoreState };
