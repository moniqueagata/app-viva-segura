import { StatusBar } from 'expo-status-bar';
import {View ,Image,Text,Pressable,TextInput,FlatList } from 'react-native';
import styles from'./styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
export default function AdicionarPontoSeguro() {
  
  const [enderecoPesquisa, setEnderecoPesquisa] = useState("");
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
  <View style={styles.fundoEncima}>
        <Pressable onPress={() => navigation.navigate('Home')}>
           <Image source={require('../../../assets/img/Telefone/seta.jpeg')} style={styles.imagem} />
        </Pressable>
        <Text style={styles.titulo}>Adicionar ponto seguros</Text>    
      </View>

   <MapView
          
          style={styles.mapa}
          initialRegion={{
            latitude: -23.5505,
            longitude: -46.6333,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        />

      <View  style={styles.viewBordaRedonda}></View>
    <View  style={styles.viewMapaEmbaixo}>

      <View style={styles.lupaView}>
        <Pressable onPress={() => salvarEnderecoPesquisa()}>
          <Image source={require('../../../assets/img/AdiconarEndereco/lupa.png')} style={styles.lupa} />
        </Pressable>
        <TextInput
        style={styles.input}
        onChangeText={setEnderecoPesquisa}
        value={enderecoPesquisa}
    
      />
    </View>

 <View style={styles.cardAdiconarEndereco}>
      <Text style={styles.endereco}>
      endereço
      </Text>

      <Pressable  style={styles.botaoAdicionar}>
        <Text style={styles.botaoTexto}>
          Adicionar Pontos
        </Text>
      </Pressable>
    </View>
  
      </View>
      <StatusBar style="auto" />
    </View>
  );
}