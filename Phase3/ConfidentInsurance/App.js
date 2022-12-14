import {} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./component/Home";
import Pro1 from "./component/Pro1";
import Pro2 from "./component/Pro2";
import Pro3 from "./component/Pro3";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pro1" component={Pro1} />
        <Stack.Screen name="Pro2" component={Pro2} />
        <Stack.Screen name="Pro3" component={Pro3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
