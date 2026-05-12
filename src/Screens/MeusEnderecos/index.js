import { StatusBar } from 'expo-status-bar';
import {View ,Image,Text,Pressable,FlatList ,Alert} from 'react-native';
import styles from'./styles';
import { useState,useEffect } from 'react';
import axios from 'axios';
import api from "../../services/api";
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
  <View style={styles.fundoEncima}>
        <Pressable onPress={() => navigation.navigate('Home')}>
           <Image source={require('../../../assets/img/Telefone/seta.jpeg')} style={styles.imagem} />
        </Pressable>
        <Text style={styles.titulo}>Meus endereços</Text>    
      </View>

     <View style={styles.viewFlex}>
     <Text style={styles.definaTexto}>Defina um endereço de sua escolha</Text>
     <Image style={styles.imagemI} source={require('../../../assets/img/Endereco/iconiDefina.jpeg')}/>
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
        <Image  style={styles.imagemMais} source={require('../../../assets/img/Home/mais.jpeg')}/>
     </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}