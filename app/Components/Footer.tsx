import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Carretera Huejutla - Chalahuiyapa, Km. 2.5 Colonia El Barrio Huejutla de Reyes, Hidalgo C.P. 43000 México.
      </Text>
      <Text style={styles.footerText}>
        Términos y condiciones | Política de privacidad
      </Text>
      <Text style={styles.footerText}>
        Síguenos en nuestras redes sociales: Facebook | Twitter | Instagram
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#34495e',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  footerText: {
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 3,
  },
});

export default Footer;
