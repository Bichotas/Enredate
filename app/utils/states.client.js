import * as SecureStore from "expo-secure-store";

function setSecureStates(setUid, setTypeAccount) {
  SecureStore.getItemAsync("uid").then((uid) => {
    setUid(uid);
  });

  SecureStore.getItemAsync("typeAccount").then((typeAccount) => {
    setTypeAccount(typeAccount);
  });
}

export { setSecureStates };
