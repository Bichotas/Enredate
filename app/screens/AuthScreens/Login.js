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
import React from "react";
{
  /* Podemos usar ya sea AsyncStorage o SecureStore para guardar el token del usuario 
  https://github.com/firebase/firebase-admin-node/issues/1488 */
}

import { Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "../../utils/auth.client";
import { setUserPropsStore } from "../../utils/session.client";
import { getUserDoc } from "../../utils/db.server";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters") // .required("Required")
    .required("Required"),
});
export default class Login extends React.Component {
  render() {
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

              // Después de que el usuario se loguea, debemos de guardar el token en el expo-secure-store
              // user.user.getIdToken().then(token => {
              //   console.log(token)
              // })

              // Para el segundo parametro se necesita hacer una llamada a la base de datos y buscar un documento con su uid, de ahí sacar el tipo de cuenta
              const userData = (await getUserDoc(user.user.uid)).data();
              setUserPropsStore(user.user.uid, userData.typeAccount);
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
                    null;
              await AsyncStorageLib.setItem("@store", documento);
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
}
