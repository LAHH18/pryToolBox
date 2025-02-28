import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Switch, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registro de Usuario</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.subtitle}>Datos Personales</Text>
              <Text>Nombre Completo:</Text>
              <TextInput
                style={styles.input}
                placeholder="Nombre Completo"
                value={nombre}
                onChangeText={setNombre}
              />
              <Text>Teléfono:</Text>
              <TextInput
                style={styles.input}
                placeholder="Teléfono"
                keyboardType="phone-pad"
                value={telefono}
                onChangeText={setTelefono}
              />
              <Text>Dirección:</Text>
              <TextInput
                style={styles.input}
                placeholder="Dirección"
                value={direccion}
                onChangeText={setDireccion}
              />
              <Text>Ciudad:</Text>
              <TextInput
                style={styles.input}
                placeholder="Ciudad"
                value={ciudad}
                onChangeText={setCiudad}
              />
              <Text>Código Postal:</Text>
              <TextInput
                style={styles.input}
                placeholder="Código Postal"
                keyboardType="numeric"
                value={codigoPostal}
                onChangeText={setCodigoPostal}
              />
            </View>

            <View style={styles.column}>
              <Text style={styles.subtitle}>Datos de Cuenta</Text>
              <Text>Correo Electrónico:</Text>
              <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                keyboardType="email-address"
                value={correo}
                onChangeText={setCorreo}
              />
              <Text>Contraseña:</Text>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={contrasena}
                onChangeText={setContrasena}
              />
              <Text>Confirmar Contraseña:</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirmar Contraseña"
                secureTextEntry
                value={confirmarContrasena}
                onChangeText={setConfirmarContrasena}
              />
              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>
                  Acepto los <Text style={styles.link}>términos y condiciones</Text>
                </Text>
                <Switch
                  value={aceptarTerminos}
                  onValueChange={setAceptarTerminos}
                  trackColor={{ false: "#999", true: "#8AB3CF" }}
                  thumbColor={aceptarTerminos ? "#FFF" : "#CCC"}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  formContainer: {
    width: "90%",
    maxWidth: 750,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: '#4180AB'
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    minWidth: 300,
    paddingRight: 10,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  switchText: {
    color: "#555",
    fontSize: 14,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#8AB3CF",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Registro;