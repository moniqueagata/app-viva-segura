import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/Pages/Splash";
import Welcome from "./src/Pages/Welcome";
import LoadingCadastro from "./src/Pages/LoadingCadastro";
import CadastroPerfil from "./src/Pages/CadastroPerfil";
import CadastroUsuaria1 from "./src/Pages/CadastroUsuaria1";
import CadastroUsuaria2 from "./src/Pages/CadastroUsuaria2";
import ConfirmacaoCadastro from "./src/Pages/ConfirmacaoCadastro";
import LoadingLogin from "./src/Pages/LoadingLogin";
import Login from "./src/Pages/Login";

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
        <Stack.Screen name="LoadingCadastro" component={LoadingCadastro} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CadastroPerfil" component={CadastroPerfil} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CadastroUsuaria1" component={CadastroUsuaria1} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="CadastroUsuaria2" component={CadastroUsuaria2} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="ConfirmacaoCadastro" component={ConfirmacaoCadastro} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="LoadingLogin" component={LoadingLogin} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

