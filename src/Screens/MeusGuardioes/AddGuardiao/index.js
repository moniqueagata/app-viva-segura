import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Image, Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Modal } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import api from "../../../services/api";
import { Alert } from "react-native";

export default function AddGuardiao() {
  const navigation = useNavigation();
  const [whats, setWhats] = useState(true);
  const [localizacao, setLocalizacao] = useState(true);
    const [modal, setModal] = useState(false);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
   const [telefone, setTelefone] = useState('');
 const salvarGuardiao = async () => {
   

    try {
      console.log("NOME:", nome);
      console.log("EMAIL:", email);
 console.log("telefone:", telefone);
      const codigo = uuidv4()
        .replace(/-/g, '')
        .slice(0, 6)
        .toUpperCase();

      console.log("CODIGO GERADO:", codigo);

      const dados = {
        CodigoGuardiaoCadastro: codigo,
        emailGuardiaoCadastroCodigo: email,
        nomeGuardiaoCadastroCodigo: nome,
           telefoneGuardiaoCadastroCodigo: telefone
      };

     console.log("DADOS ENVIADOS:", dados);
  
      const response = await api.post("/salvarCadastroCodigoGuardiao", dados);

      console.log("RESPOSTA API:", response.data);
       setModal(true);
    } catch (error) {
      Alert.alert('erro')
      console.log(" ERRO COMPLETO:", error);
      console.log("RESPONSE:", error.response?.data);
      console.log(" STATUS:", error.response?.status);
    }
  };
  return (
    <View style={styles.container}>
      <Modal visible={modal}  transparent={true}>
          <View style={styles.modal}>
             <View style={styles.overlay}>
            <View style={styles.circleCheck}>
              <Image source={require('../../../../assets/img/check.png')}
                style={{ width: 90, height: 90 }}
                resizeMode='contain'
              />
            </View>
            <Text style={styles.tituloModal}>Guardião adicionado</Text>
            <Text style={styles.subtitulo}>Codigo enviado para seu guardião!</Text>
            <Pressable style={styles.buttonModal}
              onPress={() => { setModal(false); navigation.replace('MeusGuardioes'); }}
            >
              <Text style={styles.txWhite}>Continuar</Text>
            </Pressable>
          </View>
          </View>
        </Modal>


      <View style={styles.topo}>
      <Pressable onPress={() => navigation.navigate('MeusGuardioes')}>
        <Image
          source={require('../../../../assets/img/arrow.png')}
          style={styles.seta}
        />
      </Pressable>
    </View>
    
      {/* TÍTULO COM ÍCONE */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Novo guardião</Text>
        <Image
          source={require('../../../../assets/img/angel.png')}
          style={styles.icon}
        />
      </View>

      {/* INPUTS */}
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          value={nome}
           onChangeText={setNome}
        />

        <Text style={styles.label}>Telefone</Text>
        <View style={styles.telefoneContainer}>
          <Text style={styles.ddd}>+55</Text>
          <TextInput
            style={styles.inputTelefone}
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>
      

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.telefoneContainer}>
          <Text style={styles.ddd}></Text>
          <TextInput
            style={styles.inputTelefone}
            placeholder=""
                value={email}
              onChangeText={setEmail}
          />
        </View>
      </View>

      {/* NOTIFICAÇÕES */}
      <View style={styles.notificacaoContainer}>
        <Text style={styles.notificacaoTitulo}>🔔 Notificações</Text>

        <View style={styles.linha}>
          <Text style={styles.textoNotificacao}>
            Receber alertas via E-mail
          </Text>
          <Switch
            value={whats}
            onValueChange={setWhats}
            trackColor={{ false: "#ccc", true: "#cbb4f6" }}
            thumbColor={whats ? "#6925b8" : "#fff"}
          />
        </View>

        <View style={styles.linha}>
          <Text style={styles.textoNotificacao}>
            Compartilhar localização em tempo real
          </Text>
          <Switch
            value={localizacao}
            onValueChange={setLocalizacao}
            trackColor={{ false: "#ccc", true: "#cbb4f6" }}
            thumbColor={localizacao ? "#6925b8" : "#fff"}
          />
        </View>
      </View>

      {/* BOTÃO */}
      <Pressable style={styles.botao} onPress={salvarGuardiao}>
        <Text style={styles.buttonText}>Adicionar guardião</Text>
      </Pressable>

    </View>
  );
}