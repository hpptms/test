/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen } from './screens/ArticleScreens';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (   
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Article" component={ArticleScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;
