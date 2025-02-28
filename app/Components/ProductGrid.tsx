import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card, { Product } from '../Components/CardProductos';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <View style={styles.productGrid}>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default ProductGrid;
