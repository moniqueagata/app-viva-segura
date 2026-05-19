import React from "react";
import { PaperProvider } from "react-native-paper";
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

// Main principal do app
import Home from "./src/Screens/Home";
import Telefones from "./src/Screens/Telefones";
import MeusEnderecos from "./src/Screens/MeusEnderecos";
import AdicionarEndereco from "./src/Screens/AdicionarEndereco";
import AdicionarPontoSeguro from "./src/Screens/AdicionarPontoSeguro";

// Perfil Usuária
import Perfil from "./src/Screens/Perfil";
import EditarPerfil from "./src/Screens/EditarPerfil";
import Notificacoes from "./src/Screens/Notificacoes";
import Central from "./src/Screens/Central";
import HelpChat from "./src/Screens/HelpChat";

//Tela meus guardiões
import MeusGuardioes from "./src/Screens/MeusGuardioes";
import AddGuardiao from "./src/Screens/MeusGuardioes/AddGuardiao";

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Splash" component={Splash} 
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
          <Stack.Screen name="Login" component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Home" component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Telefones" component={Telefones}
          options={{ 
            headerShown: false
           }}
          />
          <Stack.Screen name="MeusEnderecos" component={MeusEnderecos}
            options={{ 
              headerShown: false 
            }}
          />
          <Stack.Screen name="AdicionarEndereco" component={AdicionarEndereco}
            options={{
              headerShown: false 
            }}
          />
            <Stack.Screen  name="AdicionarPontoSeguro" component={AdicionarPontoSeguro}
            options={{ 
              headerShown: false
            }}
          />
          <Stack.Screen name="MeusGuardioes" component={MeusGuardioes} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Perfil" component={Perfil} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="AddGuardiao" component={AddGuardiao} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Notificacoes" component={Notificacoes} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="HelpChat" component={HelpChat} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="Central" component={Central} 
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

