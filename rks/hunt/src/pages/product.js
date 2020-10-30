import React from 'react';
import { Component } from 'react';
import { Text, View, Button} from 'react-native';
import { WebView } from 'react-native-webview';

const Product = ({ route, navigation }) => {
  const params  = route.params;
  return(
     <WebView
      source={{uri: params.product.url}}
      style={{ marginTop: 0 }}
    /> 
  ); 
}

export default Product;
