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
  Select,
  VStack,
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
  nameStore: Yup.string().required("Required"),
});
export default function CreateStore() {
  let [service, setService] = React.useState("");

  return (
    <NativeBaseProvider>
      <View justifyContent={"center"} alignItems={"center"}>
        <Heading size={"3xl"} color="indigo.600" padding={2}>
          Crea tu tienda
        </Heading>
        <Formik
          initialValues={{
            nameStore: "",
            description: "",
          }}
          onSubmit={(values) => {
            console.log(values);
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
                <Text>Nombre de la tienda</Text>
                <Input
                  onChangeText={handleChange("nameStore")}
                  placeholder={"Nombre de la tienda"}
                  width={"100%"}
                  onBlur={() => setFieldTouched("nameStore")}
                  autoCorrect={false}
                ></Input>
                {touched.nameStore && (
                  <Text style={{ color: "red" }}>{errors.nameStore}</Text>
                )}

                {/* Password */}
                <Text>Descripcion</Text>
                <Input
                  onChangeText={handleChange("description")}
                  placeholder={"Descripcion"}
                  width={"100%"}
                  onBlur={() => setFieldTouched("description")}
                ></Input>
                <VStack alignItems="center" space={4}>
                  {/* Hacer luego un componente picker para tenerlo y que use una Flatlist para terminarlo */}
                  <Select
                    selectedValue={service}
                    width={"100%"}
                    variant="filled"
                    accessibilityLabel="Choose Service"
                    placeholder="Choose Service"
                    mt={1}
                    onValueChange={(itemValue) => setService(itemValue)}
                  >
                    <Select.Item label="Furniture" value="furniture" />
                    <Select.Item label="Cars" value="cars" />
                    <Select.Item label="Cameras" value="cameras" />
                    <Select.Item label="Games" value="games" />
                    <Select.Item label="Clothes" value="clothes" />
                    <Select.Item label="Sports" value="sports" />
                    <Select.Item label="Movies" value="movies" />
                    <Select.Item label="Books" value="books" />
                    <Select.Item label="Others" value="others" />
                  </Select>
                </VStack>
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
