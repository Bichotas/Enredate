import {
  Center,
  Container,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
  View,
  Stack,
  Button,
} from "native-base";
import React, { useContext, useState } from "react";
{
  /* Podemos usar ya sea AsyncStorage o SecureStore para guardar el token del usuario 
  https://github.com/firebase/firebase-admin-node/issues/1488 */
}

import { Formik } from "formik";
import * as Yup from "yup";
import { auth, signIn } from "../../utils/auth.client";
import {
  setAsyncStorageData,
  setUserPropsStore,
} from "../../utils/session.client";
import { getStorageData, getUserDoc } from "../../utils/db.server";
import ProfileContext from "../../context/ProfileContext";
import StoreContext from "../../context/StoreContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters") // .required("Required")
    .required("Required"),
});
export default function Login() {
  const { store, setStore } = useContext(StoreContext);
  let Profile = useContext(ProfileContext);
  async function handleSignIn({ email, password }) {
    const infoUsuario = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    const docRef = doc(firestore, `users/${infoUsuario.user.uid}`);
    const docSnap = await getDoc(docRef);
    Profile.setProfile({ ...docSnap.data() });
  }
  return (1 
    <NativeBaseProvider>
      <View justifyContent={"center"} alignItems={"center"}>
        <Heading size={"3xl"} color="fuchsia.700" padding={2}>
          Login
        </Heading>
        <Text fontSize={"lg"} px={"2rem"} py={5}>
          Esta pantalla es para ingresar
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => handleSignIn(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <Container width={"100%"}>
                {/* Email */}
                <Text>Email</Text>
                <Input
                  onChangeText={handleChange("email")}
                  placeholder={"name"}
                  width={"100%"}
                  onBlur={() => setFieldTouched("email")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                ></Input>
                {touched.email && (
                  <Text style={{ color: "red" }}>{errors.email}</Text>
                )}

                {/* Password */}
                <Text>COntraseña</Text>
                <Input
                  onChangeText={handleChange("password")}
                  placeholder={"name"}
                  width={"100%"}
                  onBlur={() => setFieldTouched("password")}
                ></Input>
                {touched.password && (
                  <Text style={{ color: "red" }}>{errors.password}</Text>
                )}
              </Container>
              <Button m={4} onPress={handleSubmit} success>
                Login
              </Button>
            </>
          )}
        </Formik>
      </View>
    </NativeBaseProvider>
  );
}
