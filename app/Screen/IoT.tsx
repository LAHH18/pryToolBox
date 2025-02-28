import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const IoT = () => {
  const [temperature] = useState("22°C");
  
  const handleToggle = (action: string) => {
    console.log(`${action} toggled`);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Control Inteligente IoT</Text>
        <Text style={styles.subtitle}>Accede a las funcionalidades avanzadas de tu sistema inteligente.</Text>

        <View style={styles.row}>
          <View style={styles.column}>
            {[
              { title: "Ventana Inteligente", desc: "Abre o cierra tu ventana automáticamente.", action: "toggleWindow" },
              { title: "Alarma Contra Incendios", desc: "Activa o desactiva la alarma contra incendios.", action: "toggleFireAlarm" },
              { title: "Cierre Automático para Lluvia", desc: "Cierra automáticamente la ventana si detecta lluvia.", action: "toggleRainClose" },
              { title: "Alarma para Intrusos", desc: "Protege tu hogar activando la alarma para intrusos.", action: "toggleIntruderAlarm" }
            ].map((item, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleToggle(item.action)}>
                  <Text style={styles.buttonText}>Activar</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.column}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Temperatura Actual</Text>
              <Text style={styles.temp}>{temperature}</Text>
              <Text style={styles.cardText}>Estado climático en tu hogar.</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>Datos del IoT</Text>
              {[
                { label: "Código de Dispositivo", value: "12345-IOT" },
                { label: "Estado de Conexión", value: "Conectado" },
                { label: "Dirección IP", value: "192.168.1.10" },
                { label: "Versión del Sistema", value: "1.0.3" },
                { label: "Última Actualización", value: "15 de Febrero 2025" }
              ].map((item, index) => (
                <Text key={index} style={styles.iotText}><Text style={styles.bold}>{item.label}:</Text> {item.value}</Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#E4EBF0" 
  },
  content: { 
    padding: 20 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    textAlign: "center", 
    marginBottom: 20 
  },
  row: { 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },
  column: { 
    flex: 1, 
    marginHorizontal: 10 
  },
  card: { 
    backgroundColor: "white", 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15, 
    elevation: 3 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 5 
  },
  cardText: { 
    fontSize: 14, 
    textAlign: "center", 
    marginBottom: 10 
  },
  temp: { 
    fontSize: 32, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 5 
  },
  iotText: { 
    fontSize: 14, 
    marginBottom: 5 
  },
  bold: { 
    fontWeight: "bold" 
  },
  button: { 
    backgroundColor: "#007BFF", 
    padding: 10, 
    borderRadius: 5, 
    alignItems: "center" 
  },
  buttonText: { 
    color: "white", 
    fontWeight: "bold" 
  }
});

export default IoT;