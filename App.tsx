import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from './app/Components/Header';
import Footer from './app/Components/Footer';
import ProductGrid from './app/Components/ProductGrid';
import { Product } from './app/Components/CardProductos';

const products: Product[] = [
  {
    image: 'https://ferreflex.mx/cdn/shop/files/77243.jpg?v=1712086261&width=750',
    title: 'Producto 1',
    description: 'Descripción breve del producto 1.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/products/63372.jpg?v=1709273768&width=750',
    title: 'Producto 2',
    description: 'Descripción breve del producto 2.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/files/7638.jpg?v=1716848475&width=650',
    title: 'Producto 3',
    description: 'Descripción breve del producto 3.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/files/62004.jpg?v=1712105450&width=650',
    title: 'Producto 4',
    description: 'Descripción breve del producto 4.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/files/77243.jpg?v=1712086261&width=750',
    title: 'Producto 1',
    description: 'Descripción breve del producto 1.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/products/63372.jpg?v=1709273768&width=750',
    title: 'Producto 2',
    description: 'Descripción breve del producto 2.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/files/7638.jpg?v=1716848475&width=650',
    title: 'Producto 3',
    description: 'Descripción breve del producto 3.',
  },
  {
    image: 'https://ferreflex.mx/cdn/shop/files/62004.jpg?v=1712105450&width=650',
    title: 'Producto 4',
    description: 'Descripción breve del producto 4.',
  },
];

const App: React.FC = () => {
  return (
    <ScrollView style={styles.body}>
      <Header />
      <View style={styles.container}>
        <View style={styles.nuevoApartado}>
          <Text style={styles.nuevoApartadoTitle}>¡Bienvenido a ToolBox!</Text>
          <Text style={styles.nuevoApartadoText}>
            Encuentra las mejores herramientas y productos para tus proyectos. Explora nuestro catálogo y descubre ofertas exclusivas.
          </Text>
        </View>
        <ProductGrid products={products} />
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#E4EBF0',
    flex: 1,
  },
  container: {
    padding: 15,
    marginHorizontal: '8%',
  },
  nuevoApartado: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nuevoApartadoTitle: {
    color: '#34495e',
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  nuevoApartadoText: {
    color: '#333',
    fontSize: 16,
  },
});

export default App;
