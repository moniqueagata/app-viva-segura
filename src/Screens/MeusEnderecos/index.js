import { StatusBar } from 'expo-status-bar';
import { View ,Image ,Text ,Pressable ,FlatList ,Alert } from 'react-native';
import styles from'./styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from "../../services/api.js";
import { useNavigation } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function MeusEnderecos() {
   const [exibir, setExibir] = useState([]);
    const navigation = useNavigation();

useEffect(() => {
  exibirEndereco();
}, []);

const exibirEndereco = async () => {
  try {
    const response = await api.get("/exibirEndereco");

    setExibir(response.data.data);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../../assets/img/arrow_2.png')} 
            style={{ width: 20, height: 20 }} 
            tintColor='#fff'
        />
        </Pressable>
        <Text style={styles.tituloHeader}>Meus Endereços</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.viewFlex}>
          <Text style={styles.definaTexto}>Defina um endereço de sua escolha</Text>
        </View>

      <FlatList
        style={{ flex: 1}}
        data={[...exibir].reverse()}
        keyExtractor={(item) => item.idEnderecoUsuaria.toString()}
        renderItem={({ item }) => (  
          <View style={styles.card}>
            <MapView
              style={styles.mapa}
              initialRegion={{
                latitude: -23.5505,
                longitude: -46.6333,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            />
              <Text style={styles.tituloCasa}> {item.enderecoUsuaria}</Text>  
          </View>
        )}
      />

        <Pressable style={styles.botaoAdicionar}  onPress={() => navigation.navigate('AdicionarEndereco')}>
            <Text style={styles.botaoTexto}>Adicionar</Text>
            <Image source={require('../../../assets/img/add.png')} style={{ width: 18, height: 18 }} />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}