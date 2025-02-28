import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View>
      <View style={styles.navbar1}>
        <Text style={styles.navbarBrand}>ToolBox</Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar producto"
          placeholderTextColor="#ccc"
        />
        <View style={styles.navLinksContainer}>
          <TouchableOpacity style={styles.navLinkWrapper}>
            <Text style={styles.navLink}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLinkWrapper}>
            <Text style={styles.navLink}>Ubicación</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navbar2}>
        <View style={styles.navbarMenu}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Catálogo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Marcas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Ofertas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Ayuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Acerca de Nosotros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar1: {
    backgroundColor: '#34495e',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  navbarBrand: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    flexBasis: '100%', 
    textAlign: 'center',
    marginBottom: 5,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 35,
    flexGrow: 1,
    minWidth: 200, 
    marginBottom: 5,
  },
  navLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  navLinkWrapper: {
    marginHorizontal: 5,
  },
  navLink: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  navbar2: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  navbarMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  navItem: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Header;