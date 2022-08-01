import * as SecureStore from "expo-secure-store";

function setSecureStates(setUid, setTypeAccount, setUser) {
  SecureStore.getItemAsync("uid").then((uid) => {
    setUid(uid);
  });

  SecureStore.getItemAsync("typeAccount").then((typeAccount) => {
    setTypeAccount(typeAccount);
  });

  // Temporal -- Usuario
  SecureStore.getItemAsync("user").then((user) => {
    setUser(user);
  });
}

export { setSecureStates };
