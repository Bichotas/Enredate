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
import { setUserPropsStore } from "../../utils/session.client";
import { getUserDoc } from "../../utils/db.server";

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
            setUserPropsStore(user.user.uid, userData.typeAccount);
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
