import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import './config/StatusBarConfig';
import Main from './pages/main';
import Product from './pages/product';

const stk = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
          <stk.Navigator>
            <stk.Screen
              name="main"
              component={Main}
              options={{
                title: 'JSHunt',
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              }}
            />
            { <stk.Screen 
              name="product"
              component={Product}
              options={{
                title: 'Produto',
                headerStyle: {
                  backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  textAlign: 'center',
                },
              }}
            /> }
          </stk.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
