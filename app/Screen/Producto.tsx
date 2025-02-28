import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Producto: React.FC = () => {
  const imagenes = [
    "https://ferreflex.mx/cdn/shop/products/63372.jpg?v=1709273768&width=750",
    "https://ferreflex.mx/cdn/shop/files/7638.jpg?v=1716848475&width=650",
    "https://ferreflex.mx/cdn/shop/files/62004.jpg?v=1712105450&width=650",
    "https://ferreflex.mx/cdn/shop/files/77243.jpg?v=1712086261&width=750",
    "https://ferreflex.mx/cdn/shop/products/63372.jpg?v=1709273768&width=750",
  ];
  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);

  return (
    <View style={styles.containerGlobal}>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.productoContainer}>
          <View style={styles.imagenesContainer}>
            <View style={styles.miniaturasContainer}>
              {imagenes.map((img, index) => (
                <TouchableOpacity key={index} onPress={() => setImagenSeleccionada(img)}>
                  <Image source={{ uri: img }} style={styles.miniatura} />
                </TouchableOpacity>
              ))}
            </View>
            <Image source={{ uri: imagenSeleccionada }} style={styles.imagenPrincipal} />
          </View>

          <View style={styles.detallesContainer}>
            <Text style={styles.titulo}>Nombre del Producto</Text>
            <Text style={styles.precio}>$999.99</Text>
            <Text>
              <Text style={styles.negrita}>Marca:</Text> Marca Ejemplo
            </Text>
            <Text>
              <Text style={styles.negrita}>Modelo:</Text> Modelo X
            </Text>
            <Text>
              <Text style={styles.negrita}>Peso:</Text> 1.5 kg
            </Text>
            <Text>
              <Text style={styles.negrita}>Tamaño:</Text> 20x10x5 cm
            </Text>
            <Text>
              <Text style={styles.negrita}>Stock:</Text> 20 unidades disponibles
            </Text>

            <View style={styles.botonesContainer}>
              <TouchableOpacity style={styles.botonComprar}>
                <Text style={styles.botonTexto}>Comprar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botonFavoritos}>
                <Text style={styles.botonTexto}>Favoritos</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.metodosPago}>
              <Text style={styles.subtitulo}>Métodos de pago</Text>
              <Text>- Tarjeta de crédito</Text>
              <Text>- PayPal</Text>
              <Text>- Transferencia bancaria</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    backgroundColor: "#E4EBF0",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  productoContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "85%",
    flexDirection: "column",
  },
  imagenesContainer: {
    alignItems: "center",
  },
  miniaturasContainer: {
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: "wrap", 
    justifyContent: "center",
  },
  miniatura: {
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 5,
  },
  imagenPrincipal: {
    width: "50%",      
    aspectRatio: 1,   
    borderRadius: 10,
  },
  detallesContainer: {
    marginTop: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  precio: {
    fontSize: 20,
    color: "#D32F2F",
    fontWeight: "bold",
    marginBottom: 10,
  },
  negrita: {
    fontWeight: "bold",
  },
  botonesContainer: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
  },
  botonComprar: {
    backgroundColor: "#34495e",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  botonFavoritos: {
    backgroundColor: "#8AB3CF",
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },
  metodosPago: {
    marginTop: 15,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Producto;