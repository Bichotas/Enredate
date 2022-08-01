import { View, Text } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  Modal,
  FormF,
  Input,
  VStack,
  Button,
  Select,
} from "native-base";
export default function StoreModal() {
  let [service, setService] = React.useState("");
  const [showModal, setShowModal] = React.useState(true);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      size={"xl"}
      closeOnOverlayClick={false}
    >
      <Modal.Content>
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
  );
}
