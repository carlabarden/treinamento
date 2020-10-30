import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default class Main extends Component {

  state = {
    product_info: {},
    docs: [],
    page: 1,
  }

  componentDidMount() {
     this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...product_info } = response.data;
    this.setState({ 
      docs: [...this.state.docs, ...docs], 
      product_info,
      page, 
    });
  }

  load_more = () => {
    const { page, product_info } = this.state;

    if (page === product_info.pages) return;

    const page_number = page + 1;
    this.loadProducts(page_number); 
  }

  render_item = ({ item }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.productButton} onPress={() => {
          this.props.navigation.navigate(
            'product',
            { product: item }
          );
       } }>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}        
          keyExtractor={item => item._id}
          renderItem={this.render_item}
          onEndReached={this.load_more}
          onEndReachedThreshold={0.1}
        />
      </View>
     /*  <View style={styles.container}>
        <Text>
          Página Main:
        </Text>
        {
          this.state.docs.map(product => 
            <Text key={product._id}> {product.title} </Text>)
        }
      </View> */
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  list: {
    padding: 20,
  },

  productContainer: {
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 20, 
    marginBottom: 20,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#333',
  },

  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  productButton: {
    height: 42,
    borderRadius: 5, 
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: 'transparent', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 10
  },

  productButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },

});
