import { StatusBar } from 'expo-status-bar';
import {View ,Image,Text,Pressable,TextInput,FlatList } from 'react-native';
import styles from'./styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { useState,useEffect, } from 'react';
import axios from 'axios';
import api from "../../services/api";
import { Alert } from 'react-native';

export default function AdicionarEndereco() {
  const [enderecoSelecionado, setEnderecoSelecionado] = useState("");
   const [enderecoPesquisa, setEnderecoPesquisa] = useState("");
    const navigation = useNavigation();
   const [exibir, setExibir] = useState([]);

useEffect(() => {
  buscarEnderecosPesquisas();
}, []);

const buscarEnderecosPesquisas = async () => {
  try {
    const response = await api.get("/exibirPesquisaEndereco");

    setExibir(response.data.data);

  } catch (error) {
    console.log(error);
  }
};


   const salvarPesquisa = async () => {
  try {
    const dados = {
      enderecoPesquisa,
    };

    const response = await api.post("/salvarPesquisaEndereco", dados);

    console.log(response.data);


  } catch (error) {
  console.log("STATUS:", error.response?.status);
  console.log("DATA:", error.response?.data);
}
};
  const salvarEnderecoSelecionado = async (endereco) => {
  try {
    const response = await api.post("/salvarEndereco", {
      enderecoUsuaria: endereco,
      complementoEnderecoUsuaria:'n',
      descricaoEnderecoUsuaria:'n',
    });

    console.log("SALVOU:", response.data);

    Alert.alert("Salvo", "Endereço adicionado!");

  } catch (error) {
    console.log("ERRO COMPLETO:", error.response?.data || error);

    Alert.alert(
      "Erro",
      error.response?.data?.error || "Erro ao salvar"
    );
  }
};
    
  return (
    <View style={styles.container}>
  <View style={styles.fundoEncima}>
        <Pressable onPress={() => navigation.navigate('MeusEnderecos')}>
           <Image source={require('../../../assets/img/Telefone/seta.jpeg')} style={styles.imagem} />
        </Pressable>
        <Text style={styles.titulo}>Adicionar novo endereços</Text>    
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
    
      <View style={styles.lupaView} >
        <Pressable onPress={salvarPesquisa}>
          <Image source={require('../../../assets/img/AdiconarEndereco/lupa.png')} style={styles.lupa} />
        </Pressable>
        <TextInput
        style={styles.input}
        onChangeText={setEnderecoPesquisa}
        value={enderecoPesquisa}
      />
    </View>

     
    
      </View>
<FlatList
  style={{ flex: 1}}
  data={[...exibir].reverse()}
  keyExtractor={(item) => item.idEnderecoPesquisa.toString()}
  renderItem={({ item }) => (
    <View style={styles.cardAdiconarEndereco}>
      <Text style={styles.endereco}>
        {item.enderecoPesquisa}
      </Text>

      <Pressable style={styles.botaoAdicionar}onPress={() => {
  console.log("clicou", item);
  salvarEnderecoSelecionado(item.enderecoPesquisa);
}}>
        <Text style={styles.botaoTexto}>
          Adicionar Endereço
        </Text>
      </Pressable>
    </View>
  )}
/>
      <StatusBar style="auto" />
    </View>
  );
}