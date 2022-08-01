import * as SecureStore from "expo-secure-store";
import {
  NativeBaseProvider,
  Modal,
  FormF,
  Input,
  VStack,
  Select,
} from "native-base";
import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// StatesSets
import { db, getStorageData } from "../../utils/db.server";
import { setSecureStates } from "../../utils/states.client";

export default function HomeG({ navigation }) {
  // Contexto de la aplicación
  const [first, setfirst] = useState(null);
  const [typeAccount, setTypeAccount] = useState("");
  const [asyncStorage, setasyncStorage] = useState(null);
  const [showModal, setShowModal] = useState(true);
  let [service, setService] = React.useState("");

  useEffect(async () => {
    setSecureStates(setfirst, setTypeAccount, setasyncStorage);
    console.log("UseEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(first);
    console.log(typeAccount);
    console.log(asyncStorage);
  }, []);

  return (
    <NativeBaseProvider>
      <View>
        <Text>
          {"El uid del usuario " +
            first +
            " El tipo de cuenta es: " +
            typeAccount}
        </Text>
        {asyncStorage == null ? (
          <Button title="No hay datos" />
        ) : (
          <Text>Nombre de la tienda: {asyncStorage.nameStore}</Text>
        )}

        {typeAccount === "vendedor" && asyncStorage == null && (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            size={"xl"}
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header fontWeight={"bold"} fontSize={20}>
                <Text fontWeight={"bold"} fontSize={20}>
                  Crea tu tienda
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Text>Nombre de la tienda</Text>
                <Input name={"nameStore"} placeholder={"Nombre de la tienda"} />
                <Text>Descripción</Text>
                <Input name={"description"} placeholder={"Descripción"} />
                <Text>Categoría</Text>
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
              </Modal.Body>
              <Modal.Footer>
                <Button title={"Si"} />
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        )}
      </View>
    </NativeBaseProvider>
  );
}
