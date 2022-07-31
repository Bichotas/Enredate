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
import { signIn } from "../../utils/auth.client";
import {
  setAsyncStorageData,
  setUserPropsStore,
} from "../../utils/session.client";
import { getStorageData, getUserDoc } from "../../utils/db.server";

import StoreContext from "../../context/StoreContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters") // .required("Required")
    .required("Required"),
});
export default function Login() {
  const storeContext = useContext(StoreContext);
  return (
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
          onSubmit={async (values) => {
            const user = await signIn(values.email, values.password);
            const userData = (await getUserDoc(user.user.uid)).data();
            // Condición ternaria ---> Si el usuario es un vendedor entonces mandamos a llamar un documento si es que existe
            const documento =
              // Se compara si el valor es igaul al de "vendedor"
              userData.typeAccount === "vendedor"
                ? // Si es true, entonces se llama al documento y se convierte
                  JSON.stringify(
                    (await getStorageData(user.user.uid)).docs[0].data()
                  )
                : // False: entonces devolvemos un undefined
                  // Pero en la funcion setUserPropStore
                  // Se compara si el tipo de cuenta es typeAccount para sobreescribir el valor del secureStore
                  // Asi para evitar que se cree y tenga un valor
                  undefined;
            //documentO.toString()
            setUserPropsStore(user.user.uid, userData.typeAccount, documento);
            // Comentario AsyncStorage ---> Se puede usar más adelante
            //await setAsyncStorageData("store_data", "Async desde el login");
          }}
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
