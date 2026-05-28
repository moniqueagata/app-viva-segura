import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Image, ScrollView, Alert ,FlatList ,ActivityIndicator} from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import BottomNav from "../../components/BottomNav";
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import api from "../../services/api";

export default function MeusGuardioes() {
  const navigation = useNavigation();
   const [guardioes, setGuardioes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarGuardioes();
  }, []);

  const carregarGuardioes = async () => {
    try {
      setLoading(true);

      const response = await api.get("/listarGuardioes");

      setGuardioes(response.data);

    } catch (error) {
      console.log("ERRO AO CARREGAR:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
        <View style={styles.content}>

          <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Meus guardiões</Text>
            <Image
              source={require('../../../assets/img/angel.png')}
              style={styles.tituloIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.subtitulo}>
            Compartilhe seu código de uso único para seus guardiões se conectarem a você.
          </Text>
 
    
        
     
        
      <FlatList
        data={guardioes}
        keyExtractor={(item) =>
  item.idGuardiaoCadastroCodigo.toString()
}

        // TELA VAZIA
        ListEmptyComponent={
         
            <View style={styles.vazio}>
              <Image
                source={require('../../../assets/img/angel.png')}
                style={{ width: 48, height: 48 }}
                tintColor='#ccc'
              />
              <Text style={styles.vazioTexto}>Nenhum guardião cadastrado ainda.</Text>
            </View>
         
        }

        // CADA ITEM
        renderItem={({ item: g }) => (


          
                <View  style={styles.card}>
                  <View style={styles.cardInfo}>
                    <View style={styles.cardTopo}>
                      <Text style={styles.cardNome}>{g.nomeGuardiaoCadastroCodigo}</Text>
                     <Text style={styles.badge}>Ativa</Text>
                    </View>
                    <Text style={styles.cardTelefone}>{g.telefoneGuardiaoCadastroCodigo}</Text>
                  </View>
                  <View style={styles.cardAcoes}>
                    <Pressable
                      style={styles.btnChat}
                      onPress={() => navigation.navigate('ChatGuardiao', { nomeGuardiaoCadastroCodigo: g.nomeGuardiaoCadastroCodigo})}
                    >
                      <Text style={styles.btnChatText}>chat</Text>
                    </Pressable>
                    <Pressable
                      style={styles.btnRemover}
                    
                    >
                      <Text style={styles.btnRemoverTexto}>✕</Text>
                    </Pressable>
                  </View>
                </View>
        )}
      />


          <Pressable style={styles.botao} onPress={() => navigation.navigate("AddGuardiao")}>
            <Text style={styles.buttonText}>Novo Guardião +</Text>
          </Pressable>

        </View>
    

      <BottomNav abaAtivaInicial={2} />
      <StatusBar style="auto" />
    </View>
  );
}