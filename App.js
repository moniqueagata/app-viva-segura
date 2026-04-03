import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Telas
import Splash from "./src/Screens/Splash";
import Welcome from "./src/Screens/Welcome";
import Login from "./src/Screens/Login";

// Cadastro Usuaria
import Passo1 from "./src/Screens/Cadastro/Passo1";
import Passo2 from "./src/Screens/Cadastro/Passo2";
import Passo3 from "./src/Screens/Cadastro/Passo3";
import Confirmacao from "./src/Screens/Cadastro/Confirmacao";

// Main do aplicativo
import Home from "./src/Screens/Main/Home";
import Perfil from "./src/Screens/Main/Perfil";

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Welcome" component={Welcome} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo1" component={Passo1}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo2" component={Passo2}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Passo3" component={Passo3}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Confirmacao" component={Confirmacao}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen name="Perfil" component={Perfil} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

