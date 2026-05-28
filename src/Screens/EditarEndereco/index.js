import { StatusBar } from 'expo-status-bar';
import {View ,Image,Text,Pressable,FlatList ,Alert, TextInput} from 'react-native';
import styles from'./styles';
import { useState,useEffect } from 'react';
import axios from 'axios';
import api from "../../services/api";
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function EditarEndereco() {
 const [endereco,setEndereco] = useState('')
const[complemento, setComplemento] = useState('')
const [descricao,setDescricao]= useState('')
 function exibirConcultaEndereco(){

 }
 
 const router = useRoute();

const { idEnderecoUsuaria, enderecoUsuaria ,descricaoEnderecoUsuaria} = router.params;

const salvarEdicaoEndereco = async () => {
  try {

    const dados = {
      enderecoUsuaria: endereco,
      complementoEnderecoUsuaria: complemento,
      descricaoEnderecoUsuaria: descricao,
    };

    const response = await api.put(
      `/salvarEnderecoAlterado/${idEnderecoUsuaria}`,
      dados
    );

    console.log(response.data);
  alert('alterações salva ')
  navigation.navigate('MeusEnderecos')
  } catch (error) {



    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
  }
};

 

const excluirEndereco = async () => {
  try {

    const response = await api.delete(
      `/salvarEnderecoAlterado/${idEnderecoUsuaria}`
    );

    console.log(response.data);

    navigation.navigate('MeusEnderecos');

  } catch (error) {

    alert('Erro ao excluir');

    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
  }
};


const navigation = useNavigation();


  return (
    <View style={styles.container}>
        <View style={styles.fundoEncima}>
                <Pressable onPress={() => navigation.navigate('MeusEnderecos')}>
                   <Image source={require('../../../assets/img/Telefone/seta.jpeg')} style={styles.imagem} />
                </Pressable>
                <Text style={styles.titulo}>Editar Endereços</Text>    
              </View>
       
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
                  <Text style={styles.tituloCasa}>{enderecoUsuaria}</Text>
                  <Text style={styles.text}>{descricaoEnderecoUsuaria}</Text>
               
         </View>

  <Text style={styles.textInput}>Nome do endereço</Text>

  <TextInput 
  style={styles.textInputNome}
      onChangeText={setDescricao}
        value={descricao}
  />
          
          <Text style={styles.textInput}>Endereço</Text>
  <TextInput 
   style={styles.textInputEndereco}
      onChangeText={setEndereco}
        value={endereco}
  />
     
     <Text   style={styles.textInput} >Complemento (opcional)</Text>
  <TextInput 
   style={styles.textInputComplemento}
       onChangeText={setComplemento}
        value={complemento}
  />
<Pressable style={styles.pressableAlteracoes} onPress={salvarEdicaoEndereco}>
    <Text style={styles.textAlteracoes}>Salvar alterações </Text>
</Pressable>
<Pressable  style={styles.excliirAlteracoes} onPress={excluirEndereco}> 
    <Text style={styles.textExcluir}>Excluir endereço </Text>
</Pressable>
      <StatusBar style="auto" />
    </View>
  );
}