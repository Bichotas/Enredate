import * as SecureStore from "expo-secure-store";

function setSecureStates(setUid, setTypeAccount) {
  SecureStore.getItemAsync("uid").then((token) => {
    console.log(token);
    setUid(token);
  });

  SecureStore.getItemAsync("typeAccount").then((typeAccount) => {
    console.log(typeAccount);
    setTypeAccount(typeAccount);
  });
}

export { setSecureStates };
