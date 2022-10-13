import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home'
import Pro1 from './component/Pro1'
import Pro2 from './component/Pro2'
import Pro2 from './component/Pro2'
import Pro3 from './component/Pro3'

const Stack = createNativeStackNavigator();



const App = () => {

  
      

  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Confident Insurance',
            }}
          />
          <Stack.Screen
            name="Pro1"
            component={Pro1}
            options={{
              title: 'Profile',
            }}
          />
          
          <Stack.Screen
            name="Pro2"
            component={Pro2}
            options={{
              title: 'Profile',
            }}
          />

          <Stack.Screen
            name="Pro3"
            component={Pro3}
            options={{
              title: 'Profile',
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})