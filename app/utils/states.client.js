import * as SecureStore from "expo-secure-store";

function setSecureStates(setUid, setTypeAccount, setUser) {
  SecureStore.getItemAsync("uid").then((uid) => {
    setUid(uid);
  });

  let typeAccount = SecureStore.getItemAsync("typeAccount").then(
    (typeAccount) => {
      setTypeAccount(typeAccount);
    }
  );

  // Temporal -- Usuario
  let user = SecureStore.getItemAsync("user").then((user) => {
    setUser(JSON.parse(user));
  });
  return user;
}

export { setSecureStates };
