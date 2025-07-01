import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import gallery from './src/pages/gallery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" 
        component={gallery} 
        options={ () => ({
          title : 'Insta Gallery',
          headerTitleStyle: {fontSize: 24, 
          fontWeight: 'bold', 
          color: '#333'},
          headerStyle: {backgroundColor: '#f8f8f8'},
          headerTintColor: '#333',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerBackTitle: 'Back',
          headerBackTitleStyle: {fontSize: 16, color: '#333'},
          headerBackVisible: true,
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
