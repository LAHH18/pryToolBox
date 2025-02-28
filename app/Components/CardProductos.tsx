import React from 'react';
import { Dimensions, View, Text, Image, Button, StyleSheet } from 'react-native';

export interface Product {
  image: string;
  title: string;
  description: string;
}

interface CardProps {
  product: Product;
}

const screenWidth = Dimensions.get('window').width;
const isMobile = screenWidth < 768;

const CardProduc: React.FC<CardProps> = ({ product }) => {
  return (
    <View style={[styles.card, isMobile && { width: '100%' }]}>
      <Image source={{ uri: product.image }} style={styles.cardImgTop} />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{product.title}</Text>
        <Text style={styles.cardText}>{product.description}</Text>
        <View style={styles.cardButtons}>
          <Button title="Ver más" color="#34495e" onPress={() => {}} />
          <Button title="Favoritos" color="#8AB3CF" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#BDD1DE',
    width: '23%',
    marginBottom: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  cardImgTop: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CardProduc;
