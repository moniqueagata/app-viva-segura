import React from "react";
import { View, Text, StyleSheet, Pressable ,Image,Linking} from "react-native";
import styles from'./styles';
import { useNavigation } from '@react-navigation/native';



export default function Telefones() {
  
const ligar = (numero) => {
  Linking.openURL(`tel:${numero}`);
};
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      
      <View style={styles.fundoEncima}>
        <Pressable onPress={() => navigation.navigate('Home')}>
           <Image source={require('../../../assets/img/arrow_2.png')} style={{ width: 22, height: 22 }} />
        </Pressable>

        <Text style={styles.titulo}>Telefones públicos</Text>
      </View>

     
      <Pressable style={styles.card}>
        <Text style={styles.tituloCard}>Central de Atendimento à Mulher</Text>
       
         <View style={styles.viewNumero}>
    <Image
      source={require('../../../assets/img/phone.png')} 
      style={{ width: 30, height: 30 }}
    />
    <Text style={styles.telefone} onPress={() => Linking.openURL('tel:180')}>180</Text>
  </View>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.tituloCard}>Polícia Civil</Text>
          <View style={styles.viewNumero}>
    <Image
      source={require('../../../assets/img/phone.png')} 
      style={{ width: 30, height: 30 }}
    />
    <Text style={styles.telefone} onPress={() => Linking.openURL('tel:197')}>197</Text>
  </View>
      
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.tituloCard}>Polícia Militar</Text>
      
        <View style={styles.viewNumero}>
    <Image
      source={require('../../../assets/img/phone.png')} 
      style={{ width: 30, height: 30 }}
    />
     <Text onPress={() => Linking.openURL('tel:190')} style={styles.telefone}>190</Text>
  </View>
      </Pressable>

      <Pressable style={styles.card}>
        <Text style={styles.tituloCard}>Delegacia da Mulher</Text>
        <View style={styles.viewNumero}>
    <Image
      source={require('../../../assets/img/phone.png')} 
      style={{ width: 30, height: 30 }}
    />
    <Text style={styles.telefone}  onPress={() => ligar('61996109180')}>(61) 99610-0180</Text>
  </View>
       
      </Pressable>

    </View>
  );
}